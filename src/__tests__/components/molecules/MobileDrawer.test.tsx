import { render, screen, fireEvent } from '@testing-library/react';

type MockImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type MockLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

type MockSocialIconButtonProps = {
  name: string;
  link: string;
};

type MockTypographyProps = {
  children: React.ReactNode;
  variant: string;
  className?: string;
};

jest.mock('next/image', () => {
  return function MockImage({ src, alt, width, height }: MockImageProps) {
    return <img src={src} alt={alt} width={width} height={height} />;
  };
});

jest.mock('next/link', () => {
  return function MockLink({ href, children, onClick, ...props }: MockLinkProps) {
    return <a href={href} onClick={onClick} {...props}>{children}</a>;
  };
});

jest.mock('../../../public/icons/whatsapp.svg', () => 'WhatsAppIcon');

jest.mock('@/components/atoms/buttons/SocialIconButton', () => {
  return function MockSocialIconButton({ name, link }: MockSocialIconButtonProps) {
    return <a href={link} data-testid={`social-${name}`}>{name} Icon</a>;
  };
});

jest.mock('@/components/atoms/text/Typography', () => ({
  Typography: function MockTypography({ children, variant, className }: MockTypographyProps) {
    return <span className={className} data-variant={variant}>{children}</span>;
  }
}));

jest.mock('@/data/imageSrc.data', () => ({
  IMAGE_SRC: {
    navBar: {
      logo: '/images/logo.png'
    }
  }
}));

jest.mock('@/data/copywriting/navbar.data', () => ({
  NAVBAR_COPYWRITING: {
    logoAlt: 'Logo da empresa ZCOM',
    mainSection: [
      { text: 'Home', link: '#Home' },
      { text: 'Planos', link: '#Planos' },
      { text: 'Parceiros', link: '#Parceiros' }
    ],
    phone: {
      text: '(18) 99785-6960',
      icon: 'WhatsAppIcon'
    },
    invoice: {
      text: '2ª via da fatura',
      link: '#invoice'
    }
  }
}));

jest.mock('@/data/links.data', () => ({
  socialMediaLinks: [
    { title: 'Instagram', link: '#instagram', target: '_blank', icon: 'Instagram' }
  ]
}));

import MobileDrawer from '@/components/molecules/MobileDrawer';

describe('MobileDrawer test suite', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
    document.body.style.overflow = 'unset';
  });

  it('Should render drawer elements when open', () => {
    render(<MobileDrawer isOpen={true} onClose={mockOnClose} />);
    
    expect(screen.getByAltText('Logo da empresa ZCOM')).toBeInTheDocument();
    
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toBeInTheDocument();
  });

  it('Should have correct visibility classes when closed', () => {
    render(<MobileDrawer isOpen={false} onClose={mockOnClose} />);
    
    const backdrop = document.querySelector('[class*="opacity-0"][class*="invisible"]');
    expect(backdrop).toBeInTheDocument();
  });

  it('Should call onClose when close button is clicked', () => {
    render(<MobileDrawer isOpen={true} onClose={mockOnClose} />);
    
    const closeButton = screen.getByRole('button', { name: 'Fechar menu' });
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('Should render navigation menu items', () => {
    render(<MobileDrawer isOpen={true} onClose={mockOnClose} />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Planos')).toBeInTheDocument();
    expect(screen.getByText('Parceiros')).toBeInTheDocument();
  });

  it('Should render invoice link', () => {
    render(<MobileDrawer isOpen={true} onClose={mockOnClose} />);
    
    expect(screen.getByText('2ª via da fatura')).toBeInTheDocument();
  });

  it('Should render contact information', () => {
    render(<MobileDrawer isOpen={true} onClose={mockOnClose} />);
    
    expect(screen.getByText('(18) 99785-6960')).toBeInTheDocument();
    expect(screen.getByTestId('social-whatsapp')).toBeInTheDocument();
  });

  it('Should set and reset body overflow', () => {
    const { rerender } = render(<MobileDrawer isOpen={true} onClose={mockOnClose} />);
    
    expect(document.body.style.overflow).toBe('hidden');
    
    rerender(<MobileDrawer isOpen={false} onClose={mockOnClose} />);
    
    expect(document.body.style.overflow).toBe('unset');
  });

  it('Should close menu when navigation link is clicked', () => {
    render(<MobileDrawer isOpen={true} onClose={mockOnClose} />);
    
    const homeLink = screen.getByRole('link', { name: 'Home' });
    fireEvent.click(homeLink);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
