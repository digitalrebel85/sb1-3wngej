import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { generateOrganizationSchema } from '@/lib/structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://findanadvisor.online'),
  title: {
    default: 'FindAnAdvisor - Professional Financial Advisors Directory',
    template: '%s | FindAnAdvisor'
  },
  description: 'Connect with expert financial advisors, mortgage specialists, and wealth managers in your area.',
  keywords: ['financial advisors', 'mortgage advisors', 'wealth managers', 'pension advisors', 'UK advisors', 'financial advice'],
  authors: [{ name: 'FindAnAdvisor' }],
  creator: 'FindAnAdvisor',
  publisher: 'FindAnAdvisor',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://findanadvisor.online',
    siteName: 'FindAnAdvisor',
    title: 'FindAnAdvisor - Professional Financial Advisors Directory',
    description: 'Connect with expert financial advisors, mortgage specialists, and wealth managers in your area.',
    images: [
      {
        url: 'https://findanadvisor.online/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FindAnAdvisor - Professional Financial Advisors Directory'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FindAnAdvisor - Professional Financial Advisors Directory',
    description: 'Connect with expert financial advisors, mortgage specialists, and wealth managers in your area.',
    images: ['https://findanadvisor.online/twitter-image.jpg'],
    creator: '@findanadvisor'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    other: {
      me: ['your-google-site-verification']
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P3WWTP6D');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3WWTP6D"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}