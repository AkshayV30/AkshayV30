import type { Metadata, Viewport } from "next";
import { Noto_Sans, Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import { geistMono, geistSans } from "./configs/fonts.config";
import { siteMetadata, siteViewport } from "./configs/metadata.config";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = siteViewport;

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        geistSans.variable,
        geistMono.variable,
        notoSans.variable,
        playfairDisplayHeading.variable,
        "h-full antialiased",
      )}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
