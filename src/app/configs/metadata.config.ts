import type { Metadata, Viewport } from "next";

const BASE_URL = "https://akshayv30.github.io/AkshayV30";
const SITE_NAME = "Akshay Minz Portfolio";
const DEFAULT_TITLE = "Akshay Minz | DevOps Engineer";

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Akshay Minz",
  },
  description:
    "DevOps Engineer, Cloud Developer, Backend Engineer and AI Enthusiast specializing in Kubernetes, Docker, Terraform, AWS, GCP, CI/CD and Cloud Native Applications.",
  keywords: [
    "Akshay Minz",
    "DevOps",
    "Cloud Engineer",
    "Backend Developer",
    "Next.js",
    "React",
    "Node.js",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "GitHub Actions",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Akshay Minz" }],
  creator: "Akshay Minz",
  publisher: "Akshay Minz",
  robots: { index: true, follow: true },
  openGraph: {
    title: DEFAULT_TITLE,
    description: "Portfolio showcasing DevOps, Cloud, Backend and AI Projects.",
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Minz",
    description: "DevOps • Cloud • Backend • AI Engineer Portfolio",
    images: ["/images/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export const siteViewport: Viewport = {
  themeColor: "#155799",
  colorScheme: "light dark",
};
