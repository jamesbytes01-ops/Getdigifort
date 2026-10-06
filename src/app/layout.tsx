import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { DisclaimerBanner } from '@/components/DisclaimerBanner';
import { Footer } from '@/components/Footer';
import { ToastNotification } from '@/components/ToastNotification';

export const metadata: Metadata = {
  title: 'DIGIFORT | Digital Antivirus & Security Software Marketplace',
  description: 'Compare and license top antivirus protection plans from Norton, McAfee, Bitdefender, and Webroot with transparent pricing and instant digital delivery.',
  keywords: 'antivirus marketplace, compare antivirus plans, Norton, McAfee, Bitdefender, Webroot, digital license keys, device security',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'DIGIFORT | Digital Security Marketplace',
    description: 'Find and compare top antivirus protection for Windows, Mac, iOS & Android.',
    url: 'https://shop.getdigifort.com',
    siteName: 'DIGIFORT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8FPL4M3');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18471207184" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18471207184');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8FPL4M3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <CartProvider>
          <Navbar />
          <main style={{ minHeight: '80vh' }}>{children}</main>
          <DisclaimerBanner />
          <Footer />
          <ToastNotification />
        </CartProvider>
      </body>
    </html>
  );
}
