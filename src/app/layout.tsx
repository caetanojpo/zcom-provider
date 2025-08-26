import './globals.css';
import { neometric } from '@/app/fonts';
import Script from 'next/script';
import { organizationSchema } from '@/config/organizationSchema';

export { metadata } from '@/config/metadata';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${neometric.variable}`}>
      <head>
        <Script
          id="zcom-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
