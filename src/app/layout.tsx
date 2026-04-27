import './globals.css';
import { neometric } from '@/data/fonts.data';
import Script from 'next/script';
import { organizationSchemaConfig } from '@/config/organizationSchema.config';
import { HTML_LANG, SCHEMA_JSON_LD_SCRIPT_ID } from '@/constants/ui.constants';

export { metadataConfig as metadata } from '@/config/metadata.config';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={HTML_LANG} className={`${neometric.variable}`}>
      <head>
        <Script
          id={SCHEMA_JSON_LD_SCRIPT_ID}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchemaConfig) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-background text-foreground"
      >
        {children}
      </body>
    </html>
  );
}
