import { render, screen } from '@testing-library/react';
import { Icon } from '@/components/atoms/icons/Icon';
import { GitBranch } from 'lucide-react';

describe('Icon test suite', () => {
  const setup = () => {
    const icon = screen.getByTestId('icon');

    return {
      icon,
    };
  };

  it('Should render a custom Icon', () => {
    render(<Icon icon={GitBranch} />);
    const { icon } = setup();

    expect(icon).toBeInTheDocument();
  });

  it('Should aria-hidden by default (decorative default true)', () => {
    render(<Icon icon={GitBranch} decorative={true} />);
    const { icon } = setup();

    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('Should sets aria-hidden to "false" when decorative is false and no aria-hidden prop provided', () => {
    render(<Icon icon={GitBranch} decorative={false} />);
    const { icon } = setup();

    expect(icon).toHaveAttribute('aria-hidden', 'false');
  });

  it('Should respects an explicit aria-hidden prop when decorative is false', () => {
    render(<Icon icon={GitBranch} decorative={false} aria-hidden={true} />);
    const { icon } = setup();

    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('Should merge custom className with default classes', () => {
    render(<Icon icon={GitBranch} size="md" className="text-red-500 rotate-45" />);
    const { icon } = setup();

    expect(icon).toHaveClass('w-10', 'h-10', 'text-red-500', 'rotate-45');
  });
});
