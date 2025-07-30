import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { HeaderMegaMenu } from '@/components/HeaderTabs';

export const metadata = {
  title: 'Education Financing',
  description: 'CPF Education Financing Portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <HeaderMegaMenu />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}