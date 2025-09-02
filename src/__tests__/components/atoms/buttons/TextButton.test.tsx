import { render, screen } from '@testing-library/react';
import TextButton from '@/components/atoms/buttons/TextButton';

// No additional mocks needed for TextButton as it doesn't use external dependencies

describe('TextButton test suite', () => {
  const linkExample = 'https://test.com';
  const internalLink = '/internal';

  it('Should render with required props', () => {
    render(
      <TextButton href={linkExample}>
        Test Button
      </TextButton>
    );
    
    const link = screen.getByRole('link', { name: 'Test Button' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', linkExample);
    expect(link).toHaveAttribute('target', '_self');
    expect(link).not.toHaveAttribute('rel');
  });

  it('Should render with target="_blank" and set rel correctly', () => {
    render(
      <TextButton href={linkExample} target="_blank">
        External Link
      </TextButton>
    );
    
    const link = screen.getByRole('link', { name: 'External Link — abre em nova aba' });
    expect(link).toHaveAttribute('href', linkExample);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('Should use custom aria-label when provided', () => {
    render(
      <TextButton href={linkExample} ariaLabel="Custom label">
        Button Text
      </TextButton>
    );
    
    const link = screen.getByRole('link', { name: 'Custom label' });
    expect(link).toBeInTheDocument();
  });

  it('Should apply custom className', () => {
    const customClass = 'custom-button-class';
    render(
      <TextButton href={linkExample} className={customClass}>
        Styled Button
      </TextButton>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveClass(customClass);
  });

  it('Should use default className when none provided', () => {
    render(
      <TextButton href={linkExample}>
        Default Button
      </TextButton>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveClass('inline-flex', 'items-center', 'justify-center');
  });

  it('Should handle different target values', () => {
    render(
      <TextButton href={linkExample} target="_parent">
        Parent Target
      </TextButton>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_parent');
    expect(link).not.toHaveAttribute('rel');
  });

  it('Should render with different typography variants', () => {
    render(
      <TextButton href={linkExample} variant="body-lg">
        Large Text
      </TextButton>
    );
    
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    // Typography component should receive the variant prop
    const typography = link.querySelector('[class*="text-"]');
    expect(typography).toBeInTheDocument();
  });

  it('Should handle internal links correctly', () => {
    render(
      <TextButton href={internalLink}>
        Internal Link
      </TextButton>
    );
    
    const link = screen.getByRole('link', { name: 'Internal Link' });
    expect(link).toHaveAttribute('href', internalLink);
    expect(link).toHaveAttribute('target', '_self');
  });

  it('Should render children correctly', () => {
    render(
      <TextButton href={linkExample}>
        <span>Complex Children</span>
      </TextButton>
    );
    
    expect(screen.getByText('Complex Children')).toBeInTheDocument();
  });

  it('Should not add "abre em nova aba" to aria-label for non-string children with target="_blank"', () => {
    render(
      <TextButton href={linkExample} target="_blank">
        <span>JSX Child</span>
      </TextButton>
    );
    
    const link = screen.getByRole('link');
    // Should not have the auto-generated aria-label since children is not a string
    expect(link).not.toHaveAttribute('aria-label');
  });
});
