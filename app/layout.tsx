import { cn } from "@/lib/utils";
import "../styles/globals.css";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import Header from "@/components/header";

const ysabeau = localFont({
  src: [
    {
      path: '../public/fonts/Ysabeau-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Ysabeau-Black.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srini-dev.tech"),
  title: {
    default: "K Srinivas Rao",
    template: "%s | K Srinivas Rao",
  },
  description: "Pixels, Punches, Plot Twists",
  openGraph: {
    title: "K Srinivas Rao",
    description: "Pixels, Punches, Plot Twists",
    url: "https://srini-dev.tech",
    siteName: "K Srinivas Rao",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "K Srinivas Rao",
    card: "summary_large_image",
    site: "@Srinu53168",
    creator: "@Srinu53168",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-background max-w-3xl text-xl px-4 lg:mx-auto text-foreground",
        ysabeau.className
      )}
    >
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
