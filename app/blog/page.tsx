import BlogCard from "@/components/blog/blog-card";
import { ROOT_DOMAIN } from "@/lib/constants";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dive deep into my thoughts and experiences.",
  openGraph: {
    title: "Srini's Blog",
    description: "Dive deep into my thoughts and experiences.",
    url: `${ROOT_DOMAIN}/blog`,
    siteName: "Srini's Blog",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${ROOT_DOMAIN}/og.jpg`,
      },
    ],
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
    images: [
      {
        url: `${ROOT_DOMAIN}/og.jpg`,
      },
    ],
  },
};

export default async function BlogPage() {
  const blogs = allBlogs
    .filter((post) => post.published)
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1;
      }
      return 1;
    });

  return (
    <section>
      <h1 className="font-bold text-2xl mb-10">my blog</h1>

      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </section>
  );
}
