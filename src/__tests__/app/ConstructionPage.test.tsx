import { mockSocialMediaLinks } from '@/__mocks__/data/links.mock';
import { render, screen } from '@testing-library/react';
import nextImageMock from '@/__mocks__/nextImage.mock';
import mockIcon from '@/__mocks__/components/atoms/icons/Icon.mock';
import { JSX } from 'react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Parameters<typeof nextImageMock>[0]) => nextImageMock(props),
}));

jest.mock('../../data/links.data', () => ({
  __esModule: true,
  socialMediaLinks: mockSocialMediaLinks,
}));

jest.mock('../../components/atoms/icons/Icon', () => {
  return {
    __esModule: true,
    Icon: mockIcon,
  };
});

jest.mock('../../components/atoms/backgrounds/DarkOverlay', () => {
  return {
    __esModule: true,
    default: function MockDarkOverlay(): JSX.Element {
      return <div data-testid="dark-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />;
    },
  };
});

jest.mock('../../components/atoms/buttons/SocialIconButton', () => {
  return {
    __esModule: true,
    default: function MockSocialIconButton({
      name,
      link,
      target,
    }: {
      name?: string;
      link: string;
      target?: string;
    }): JSX.Element {
      return (
        <a data-testid={`social-${String(name)}`} href={link} target={target}>
          {name}
        </a>
      );
    },
  };
});

import ConstructionPage from '@/app/page';

describe('ConstructionPage test suite', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResult = render(<ConstructionPage />);
    container = renderResult.container;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should renders main heading as an h1', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Site em construção/i);
  });

  it('Should renders decorative background element with aria-hidden', () => {
    const decorative = container.querySelector('[aria-hidden]') as HTMLElement | null;
    expect(decorative).toBeTruthy();
    expect(decorative?.className).toEqual(expect.stringContaining('bg-construction-bg'));
  });

  it('Should renders DarkOverlay (mock) and Icon', () => {
    const overlay = screen.getByTestId('dark-overlay');
    expect(overlay).toBeInTheDocument();

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('Should renders main title and descriptive texts', () => {
    const heading = screen.getByTestId('mainText');
    const firstText = screen.getByTestId('firstText');
    const secondText = screen.getByTestId('secondText');
    const thirdText = screen.getByTestId('thirdText');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Site em construção!/i);
    expect(firstText).toBeInTheDocument();
    expect(firstText).toHaveTextContent(
      /Nosso site está em construção, mas estamos prontos para começar!/i,
    );
    expect(secondText).toBeInTheDocument();
    expect(secondText).toHaveTextContent(/A Zcom está preparando algo incrível para vocês!/i);
    expect(thirdText).toBeInTheDocument();
    expect(thirdText).toHaveTextContent(
      /Clique nos ícones abaixo para acessar nossas redes sociais ou entrar em contato para saber mais./i,
    );
  });

  it('Should renders the "sob construção" image with correct src and alt', () => {
    const constructionSign = screen.getByRole('img', {
      name: /Placa "sob construção" da empresa ZCOM/i,
    });

    expect(constructionSign).toBeInTheDocument();
    expect(constructionSign).toHaveAttribute(
      'src',
      expect.stringContaining('under-construction-sign.png'),
    );
  });

  it('Should renders social media links from data and respects link count', () => {
    const allLinks = screen.getAllByRole('link');
    const socialLinks = allLinks.filter((a) =>
      mockSocialMediaLinks.some((m) => {
        return a.getAttribute('href') === m.link || a.getAttribute('href')?.includes(m.link);
      }),
    );
    const instagram = screen.getByRole('link', { name: /Instagram/i });
    const linkedin = screen.getByRole('link', { name: /LinkedIn/i });

    expect(socialLinks).toHaveLength(mockSocialMediaLinks.length);
    expect(instagram).toBeInTheDocument();
    expect(instagram).toHaveAttribute('href', expect.stringContaining('instagram.com'));
    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
  });

  it('Should snapshot to detect unintentional structural changes', () => {
    expect(container).toMatchSnapshot();
  });
});
