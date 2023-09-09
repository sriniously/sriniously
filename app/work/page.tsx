import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Things I've worked on and built.",
  openGraph: {
    title: "Srini's Work",
    description: "Things I've worked on and built.",
    url: "https://srini-dev.tech/work",
    siteName: "Srini's Work",
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
    card: "summary_large_image",
    site: "@Srinu53168",
    creator: "@Srinu53168",
  },
};

export default async function WorkPage() {
  return <section></section>;
}
