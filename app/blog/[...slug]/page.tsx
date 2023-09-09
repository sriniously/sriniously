import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";

import { Mdx } from "@/components/blog/mdx";
import { FaChevronLeft } from "react-icons/fa";

import "@/styles/mdx.css";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ROOT_DOMAIN } from "@/lib/constants";

interface BlogPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join("/");
  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    null;
  }

  return blog;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await getPostFromParams(params);

  if (!blog) {
    return {};
  }

  const ogImage = blog.image
    ? `${ROOT_DOMAIN}${blog.image}`
    : `${ROOT_DOMAIN}/og.jpg`;

  return {
    title: blog.title,
    description: blog.summary,
    authors: [
      {
        name: "K Srinivas Rao",
      },
    ],
    openGraph: {
      title: blog.title,
      description: blog.summary,
      type: "article",
      url: `${ROOT_DOMAIN}/blog/${blog.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams(): Promise<
  BlogPageProps["params"][]
> {
  return allBlogs.map((post) => ({
    slug: post.slug.split("/"),
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getPostFromParams(params);

  if (!blog) {
    notFound();
  }

  return (
    <article className="lg:container relative w-full lg:max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <FaChevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        <time
          dateTime={blog.publishedAt}
          className="block text-sm text-muted-foreground"
        >
          Published on {formatDate(blog.publishedAt)}
        </time>

        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {blog.title}
        </h1>

        <Link
          href={`https://twitter.com/Srinu53168`}
          className="flex items-center mt-4 space-x-2 text-sm"
        >
          <Image
            src="/og.jpg"
            alt="K Srinivas Rao"
            width={42}
            height={42}
            className="rounded-full bg-white"
          />
          <div className="flex-1 text-left leading-tight">
            <p className="font-medium">K Srinivas Rao</p>
            <p className="text-[12px] text-muted-foreground">@Srinu53168</p>
          </div>
        </Link>
      </div>
      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <Mdx code={blog.body.code} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <FaChevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  );
}
