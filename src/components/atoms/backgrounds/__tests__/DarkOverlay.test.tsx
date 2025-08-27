import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import { render, screen } from '@testing-library/react';

describe('DarkOverlay test suite', () => {
  it('Should render with default value (30%)', () => {
    render(<DarkOverlay percentage={30} />);
    const div = screen.getByTestId('dark-overlay');

    expect(div).toBeInTheDocument();
    expect(div).toHaveStyle({
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    });
  });

  it('Should render with custom percentage (60%)', () => {
    render(<DarkOverlay percentage={60} />);
    const div = screen.getByTestId('dark-overlay');

    expect(div).toBeInTheDocument();
    expect(div).toHaveStyle({
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    });
  });
});