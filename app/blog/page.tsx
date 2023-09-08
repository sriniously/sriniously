import BlogCard from "@/components/blog/blog-card";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dive deep into my thoughts and experiences.",
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
