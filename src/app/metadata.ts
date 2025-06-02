import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Data By Sanal - Power Platform Solutions',
    template: '%s | Data By Sanal',
  },
  description: 'Expert Power Platform solutions for HR and business automation. Specializing in Power BI, Power Apps, Power Automate, and AppSheet implementations.',
  keywords: [
    'Power Platform', 'Power BI', 'Power Apps', 'Power Automate', 'AppSheet',
    'HR Automation', 'Business Intelligence', 'Data Analytics',
    'Recruitment Solutions', 'Workflow Automation'
  ],
  metadataBase: new URL('https://data-bysanal.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Data By Sanal - Power Platform Solutions',
    description: 'Expert Power Platform solutions for HR and business automation. Specializing in Power BI, Power Apps, Power Automate, and AppSheet implementations.',
    url: 'https://data-bysanal.com',
    siteName: 'Data By Sanal',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Data By Sanal - Power Platform Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data By Sanal - Power Platform Solutions',
    description: 'Expert Power Platform solutions for HR and business automation. Specializing in Power BI, Power Apps, Power Automate, and AppSheet implementations.',
    images: ['/images/og-image.png'],
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
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
  },
};
