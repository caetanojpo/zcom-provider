import '../globals.css';
import { neometric } from '@/data/fonts.data';
import Script from 'next/script';
import { organizationSchemaConfig } from '@/config/organizationSchema.config';

export { metadataConfig } from '@/config/metadata.config';

export default function RootLayoutDev({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${neometric.variable}`}>
      <head>
        <Script
          id="zcom-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchemaConfig) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
