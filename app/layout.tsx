import "./globals.css";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ROOT_DOMAIN = "https://sriniously.xyz";

const ysabeau = localFont({
  src: [
    {
      path: "../public/fonts/Ysabeau-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Ysabeau-Black.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(ROOT_DOMAIN),
  title: {
    default: "Sriniously | K Srinivas Rao",
    template: "%s | Sriniously",
  },
  description: "Pixels, Punches, Plot Twists",
  openGraph: {
    title: "Sriniously | K Srinivas Rao",
    description: "Pixels, Punches, Plot Twists",
    url: ROOT_DOMAIN,
    siteName: "Sriniously",
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
    title: "Sriniously | K Srinivas Rao",
    card: "summary_large_image",
    site: "@sriniously",
    creator: "@sriniously",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${ysabeau.className}`}>
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            <main className="max-w-4xl mx-auto w-full space-y-6">
              <Header />
              {children}
              <Footer />
            </main>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
