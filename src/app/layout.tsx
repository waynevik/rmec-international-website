import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SupportConsecrationProvider } from "@/components/support-consecration/support-consecration-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/content/rmec";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const defaultDescription = site.taglineShort;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://rmec-international.org",
  ),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  openGraph: {
    title: site.name,
    description: defaultDescription,
    siteName: site.name,
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SupportConsecrationProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </SupportConsecrationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
