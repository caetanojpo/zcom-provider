import { render, screen, fireEvent } from '@testing-library/react';
import { mockSocialMediaLinks } from '@/__mocks__/data/links.mock';
import nextImageMock from '@/__mocks__/nextImage.mock';
import NavBar from '@/components/organisms/Navbar';
import { JSX } from 'react';

// Mock Next.js Image component using the project's standard mock
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Parameters<typeof nextImageMock>[0]) => nextImageMock(props),
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: function MockLink({ href, children, ...props }: any) {
    return <a href={href} {...props}>{children}</a>;
  },
}));

// Mock child components following the project's pattern
jest.mock('@/components/molecules/NavbarMenu', () => ({
  __esModule: true,
  default: function MockNavbarMenu(): JSX.Element {
    return <nav data-testid="navbar-menu">Desktop Menu</nav>;
  },
}));

jest.mock('@/components/atoms/buttons/HamburgerButton', () => ({
  __esModule: true,
  default: function MockHamburgerButton({ isOpen, onClick }: any): JSX.Element {
    return (
      <button 
        data-testid="hamburger-button" 
        onClick={onClick}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        Hamburger {isOpen ? 'Open' : 'Closed'}
      </button>
    );
  },
}));

jest.mock('@/components/molecules/MobileDrawer', () => ({
  __esModule: true,
  default: function MockMobileDrawer({ isOpen, onClose }: any): JSX.Element | null {
    return isOpen ? (
      <div data-testid="mobile-drawer">
        Mobile Drawer
        <button onClick={onClose}>Close Drawer</button>
      </div>
    ) : null;
  },
}));

// Mock data files using the project's mock data
jest.mock('@/data/imageSrc.data', () => ({
  __esModule: true,
  IMAGE_SRC: {
    navBar: {
      logo: '/images/logo.png'
    }
  },
}));

jest.mock('@/data/copywriting/navbar.data', () => ({
  __esModule: true,
  NAVBAR_COPYWRITING: {
    logoAlt: 'Logo da empresa ZCOM',
    invoice: {
      text: '2ª via da fatura',
      link: '#invoice'
    }
  },
}));

jest.mock('@/data/links.data', () => ({
  __esModule: true,
  socialMediaLinks: [
    { 
      title: 'Instagram', 
      link: 'https://instagram.com/zcom', 
      target: '_blank',
      icon: () => 'Instagram' // Return string instead of JSX to avoid React warnings
    },
    { 
      title: 'LinkedIn', 
      link: 'https://linkedin.com/company/zcom', 
      target: '_blank',
      icon: () => 'LinkedIn' // Return string instead of JSX to avoid React warnings
    }
  ],
}));

// Mock WhatsApp icon following the project's pattern
jest.mock('../../../../../public/icons/whatsapp.svg', () => ({
  __esModule: true,
  default: function WhatsAppIconMock(): JSX.Element {
    return <svg data-testid="whatsapp-icon" />;
  },
}));

describe('NavBar test suite', () => {
  beforeEach(() => {
    // Reset any mocks
    jest.clearAllMocks();
  });

  it('Should render navbar with logo', () => {
    render(<NavBar />);
    
    const logo = screen.getByAltText('Logo da empresa ZCOM');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo.png');
  });

  it('Should render desktop menu', () => {
    render(<NavBar />);
    
    const desktopMenu = screen.getByTestId('navbar-menu');
    expect(desktopMenu).toBeInTheDocument();
  });

  it('Should render hamburger button for mobile', () => {
    render(<NavBar />);
    
    const hamburgerButton = screen.getByTestId('hamburger-button');
    expect(hamburgerButton).toBeInTheDocument();
    expect(hamburgerButton).toHaveTextContent('Hamburger Closed');
  });

  it('Should render desktop invoice link', () => {
    render(<NavBar />);
    
    const invoiceLink = screen.getByText('2ª via da fatura');
    expect(invoiceLink).toBeInTheDocument();
  });

  it('Should render WhatsApp contact in desktop', () => {
    render(<NavBar />);
    
    const phoneNumber = screen.getByText('(18) 99785-6960');
    expect(phoneNumber).toBeInTheDocument();
  });

  it('Should toggle mobile menu when hamburger button is clicked', () => {
    render(<NavBar />);
    
    const hamburgerButton = screen.getByTestId('hamburger-button');
    
    // Initially closed
    expect(hamburgerButton).toHaveTextContent('Hamburger Closed');
    expect(screen.queryByTestId('mobile-drawer')).not.toBeInTheDocument();
    
    // Click to open
    fireEvent.click(hamburgerButton);
    
    expect(hamburgerButton).toHaveTextContent('Hamburger Open');
    expect(screen.getByTestId('mobile-drawer')).toBeInTheDocument();
    
    // Click to close
    fireEvent.click(hamburgerButton);
    
    expect(hamburgerButton).toHaveTextContent('Hamburger Closed');
    expect(screen.queryByTestId('mobile-drawer')).not.toBeInTheDocument();
  });

  it('Should close mobile menu when drawer close is called', () => {
    render(<NavBar />);
    
    const hamburgerButton = screen.getByTestId('hamburger-button');
    
    // Open the menu
    fireEvent.click(hamburgerButton);
    expect(screen.getByTestId('mobile-drawer')).toBeInTheDocument();
    
    // Close via drawer
    const closeButton = screen.getByText('Close Drawer');
    fireEvent.click(closeButton);
    
    expect(screen.queryByTestId('mobile-drawer')).not.toBeInTheDocument();
    expect(hamburgerButton).toHaveTextContent('Hamburger Closed');
  });

  it('Should render logo as a link to home', () => {
    render(<NavBar />);
    
    // Get the logo link specifically by finding the link with the logo image
    const logoLink = screen.getByRole('link', { name: /logo da empresa zcom/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('Should have correct CSS classes for responsive design', () => {
    render(<NavBar />);
    
    // Find the navbar container by looking for the main container div
    const navbarContainer = document.querySelector('.relative.top-6.mx-auto');
    expect(navbarContainer).toHaveClass('relative', 'top-6', 'mx-auto', 'w-[95%]');
    expect(navbarContainer).toHaveClass('rounded-full');
    expect(navbarContainer).toHaveClass('bg-gradient-to-r', 'from-zcom-dark', 'to-zcom');
  });

  it('Should hide desktop elements on mobile and show hamburger', () => {
    render(<NavBar />);
    
    // Desktop elements should have hidden md:flex classes
    const desktopSection = screen.getByText('2ª via da fatura').closest('div');
    expect(desktopSection).toHaveClass('hidden', 'md:flex');
    
    // Hamburger should be visible
    const hamburgerButton = screen.getByTestId('hamburger-button');
    expect(hamburgerButton).toBeInTheDocument();
  });
});
