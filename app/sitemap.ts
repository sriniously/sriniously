import { promises as fs } from "fs";
import path from "path";

async function getBlogSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

async function getMusingSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap() {
  const blogDirectory = path.join(process.cwd(), "app", "blog");
  const musingsDirectory = path.join(process.cwd(), "app", "musings");

  const blogSlugs = await getBlogSlugs(blogDirectory);
  const musingSlugs = await getMusingSlugs(musingsDirectory);

  const blogs = blogSlugs.map((slug) => ({
    url: `https://sriniously.xyz/blog/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const musings = musingSlugs.map((slug) => ({
    url: `https://sriniously.xyz/musings/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/blog", "/musings"].map((route) => ({
    url: `https://sriniously.xyz${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...blogs, ...musings];
}
