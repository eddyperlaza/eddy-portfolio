import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? 'https://eddyperlaza.com'),
  title: "Eddy Perlaza - AI Marketing Consultant & Digital Strategist | Toronto",
  description: "I build marketing systems powered by AI that help businesses grow faster with less effort. Founder of IntelliBrandAI, specializing in digital marketing, web development, and AI automation.",
  keywords: [
    "AI Marketing",
    "Digital Marketing Consultant",
    "Web Development",
    "Marketing Automation",
    "Toronto",
    "IntelliBrandAI",
    "AI Consultant",
    "Digital Strategy"
  ],
  authors: [{ name: "Eddy Perlaza" }],
  openGraph: {
    title: "Eddy Perlaza - AI Marketing Consultant & Digital Strategist",
    description: "Building marketing systems powered by AI to help businesses grow faster with less effort.",
    url: "/",
    siteName: "Eddy Perlaza Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eddy Perlaza - AI Marketing Consultant",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eddy Perlaza - AI Marketing Consultant & Digital Strategist",
    description: "Building marketing systems powered by AI to help businesses grow faster with less effort.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}