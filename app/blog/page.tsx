import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";

interface BlogMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
}

async function getBlogMetadatas(): Promise<BlogMetadata[]> {
  const blogDir = path.join(process.cwd(), "app", "blog");
  const entries = await fs.readdir(blogDir, { withFileTypes: true });

  const metadataPromises = entries
    .filter((entry) => entry.isDirectory())
    .map(async (entry) => {
      const slug = entry.name;
      const pagePath = path.join(blogDir, slug, "page.mdx");

      try {
        await fs.access(pagePath);
        const { metadata } = await import(`@/app/blog/${slug}/page.mdx`);

        return {
          slug,
          title: metadata.title || "Untitled",
          date: metadata.publishedAt || "No date",
          description: metadata.description || "No description",
        };
      } catch (error) {
        console.error(`Error processing ${slug}: ${error}`);
        return null;
      }
    });

  const metadatas = await Promise.all(metadataPromises);
  return metadatas
    .filter((metadata): metadata is BlogMetadata => metadata !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Blog() {
  const blogMetadatas = await getBlogMetadatas();

  return (
    <div className="pb-20 flex flex-col gap-10">
      {blogMetadatas.map((post) => (
        <Link href={`/blog/${post.slug}`} className="group" key={post.slug}>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:underline underline-offset-4">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-2">{post.description}</p>
          <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
        </Link>
      ))}
    </div>
  );
}
