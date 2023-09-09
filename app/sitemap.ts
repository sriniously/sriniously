import { ROOT_DOMAIN } from "@/lib/constants";
import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `${ROOT_DOMAIN}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/blog", "/work"].map((route) => ({
    url: `${ROOT_DOMAIN}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
