import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProviderWrapper from "../components/AuthProviderWrapper";
import { StorageProvider } from "../context/StorageContext";
import { metadata as siteMetadata } from "./metadata";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = siteMetadata;

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
