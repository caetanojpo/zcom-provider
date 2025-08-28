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

	it('Should applies sizePx to width and height and merges with provided style', () => {
		render(<Icon icon={GitBranch} sizePx={32} style={{ opacity: 0.5 }} />);
		const { icon } = setup();

		expect(icon).toHaveStyle('width: 32px');
		expect(icon).toHaveStyle('height: 32px');
		expect(icon.style.opacity).toBe('0.5');
	});
});
