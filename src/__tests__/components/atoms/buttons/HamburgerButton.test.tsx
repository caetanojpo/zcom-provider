import { render, screen, fireEvent } from '@testing-library/react';
import HamburgerButton from '@/components/atoms/buttons/HamburgerButton';

// No additional mocks needed for HamburgerButton as it's a pure component

describe('HamburgerButton test suite', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('Should render with correct aria-label when closed', () => {
    render(<HamburgerButton isOpen={false} onClick={mockOnClick} />);

    const button = screen.getByRole('button', { name: 'Abrir menu' });
    expect(button).toBeInTheDocument();
  });

  it('Should render with correct aria-label when open', () => {
    render(<HamburgerButton isOpen={true} onClick={mockOnClick} />);

    const button = screen.getByRole('button', { name: 'Fechar menu' });
    expect(button).toBeInTheDocument();
  });

  it('Should call onClick when clicked', () => {
    render(<HamburgerButton isOpen={false} onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('Should have correct CSS classes when closed', () => {
    render(<HamburgerButton isOpen={false} onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    const spans = button.querySelectorAll('span');

    expect(spans).toHaveLength(3);
    expect(spans[1]).toHaveClass('opacity-100'); // Middle line visible
  });

  it('Should have correct CSS classes when open', () => {
    render(<HamburgerButton isOpen={true} onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    const spans = button.querySelectorAll('span');

    expect(spans).toHaveLength(3);
    expect(spans[1]).toHaveClass('opacity-0'); // Middle line hidden
  });
});
