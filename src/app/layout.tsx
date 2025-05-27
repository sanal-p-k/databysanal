import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProviderWrapper from "../components/AuthProviderWrapper";
import { StorageProvider } from "../context/StorageContext";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Power BI Templates - Premium Dashboard Solutions",
  description: "Get premium Power BI dashboard templates to transform your data visualization. Modern, customizable templates for business analytics.",
  keywords: "Power BI, templates, dashboard, data visualization, business analytics",
  authors: [{ name: "Sanal" }],
  creator: "Sanal",
  publisher: "Sanal",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    title: 'Power BI Templates - Premium Dashboard Solutions',
    description: 'Get premium Power BI dashboard templates to transform your data visualization.',
    siteName: 'Power BI Templates',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Power BI Templates - Premium Dashboard Solutions',
    description: 'Get premium Power BI dashboard templates to transform your data visualization.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-accent text-foreground`}>
        <AuthProviderWrapper>
          <StorageProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </StorageProvider>
        </AuthProviderWrapper>
      </body>
    </html>
  );
}
