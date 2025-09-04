import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootLayout, { metadataConfig as exportedMetadataConfig } from '@/app/layout';

jest.mock('next/script', () => {
  return jest.fn((props) =>
    React.createElement('script', {
      'data-testid': `next-script-${props.id}`,
      id: props.id,
      type: props.type,
      dangerouslySetInnerHTML: props.dangerouslySetInnerHTML,
    }),
  );
});

jest.mock('@/data/fonts.data', () => ({
  neometric: { variable: 'neometric-class' },
}));

jest.mock('@/config/organizationSchema.config', () => ({
  organizationSchemaConfig: { '@type': 'Organization', name: 'ZCOM' },
}));

jest.mock('@/config/metadata.config', () => ({
  metadataConfig: { title: 'ZCOM', description: 'Empresa Z' },
}));

describe('RootLayout — test suite', () => {
  const setup = (children?: React.JSX.Element | undefined | null, defaultChildren = true) => {
    const renderChildren = defaultChildren ? <div data-testid="children">Hello</div> : children;
    return render(<RootLayout>{renderChildren}</RootLayout>, { container: document });
  };

  it('Should render children into the <body>', () => {
    setup();
    const child = screen.getByTestId('children');
    expect(child).toBeInTheDocument();
    expect(document.body.contains(child)).toBe(true);
  });

  it('Should apply the font class on <html> and the expected utility classes on <body>', () => {
    setup();
    expect(document.documentElement.classList.contains('neometric-class')).toBe(true);

    expect(document.body).toHaveClass(
      'font-sans',
      'antialiased',
      'bg-background',
      'text-foreground',
    );
  });

  it('Should inject the organization JSON-LD into a <script id="zcom-schema"> with correct type', () => {
    setup();

    const script = document.getElementById('zcom-schema') as HTMLScriptElement | null;
    expect(script).toBeInTheDocument();
    expect(script?.type).toBe('application/ld+json');

    const expected = JSON.stringify({ '@type': 'Organization', name: 'ZCOM' });
    expect(script?.innerHTML).toBe(expected);
  });

  it('Should set lang="pt-br" on the <html> element for proper locale support', () => {
    const { container } = setup();
    const htmlEl = container.querySelector('html');
    expect(htmlEl).toBeTruthy();
    expect(htmlEl?.getAttribute('lang')).toBe('pt-br');
  });

  it('Should re-exports metadataConfig from the metadata configuration file', () => {
    expect(exportedMetadataConfig).toEqual({ title: 'ZCOM', description: 'Empresa Z' });
  });

  it('Should handles null children without throwing (empty body)', () => {
    const { container } = setup(null, false);
    const body = container.querySelector('body');
    expect(body).toBeTruthy();
    expect(body?.innerHTML).toBe('');
  });
});
