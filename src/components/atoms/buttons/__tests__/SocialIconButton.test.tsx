import { render, screen } from '@testing-library/react';
import SocialIconButton from '@/components/atoms/buttons/SocialIconButton';
import { GitBranch } from 'lucide-react';

describe('SocialIconButton test suite', () => {
  const linkExample = 'https://test.com';

  it('Should render with fallback (CircleQuestionMark) when no Icon is passed', () => {
    render(<SocialIconButton link={linkExample} />);
    const link = screen.getByRole('link');
    const svg = link.querySelector('svg');
    screen.debug();
    expect(link).toHaveAttribute('href', linkExample);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).not.toHaveAttribute('rel');
    expect(link).toHaveAttribute('aria-label', 'Abrir link externo');
    expect(svg).toBeInTheDocument();
  });

  it('Should render with name and use it on aria-label', () => {
    render(<SocialIconButton name="GitHub" link={linkExample} icon={GitBranch} />);
    const link = screen.getByRole('link', {
      name: 'GitHub — abre em nova aba',
    });

    expect(link).toHaveAttribute('href', linkExample);
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('Sould accept custom target without rel', () => {
    render(<SocialIconButton name="Docs" link="https://docs.example.com" target="_self" />);

    const link = screen.getByRole('link', {
      name: 'Docs — abre em nova aba',
    });

    expect(link).toHaveAttribute('target', '_self');
    expect(link).not.toHaveAttribute('rel');
  });
});