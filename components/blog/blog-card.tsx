import { Blog } from "@/.contentlayer/generated";
import { formatDate } from "@/lib/utils";
import { AiOutlineClockCircle } from "react-icons/ai";
import Link from "next/link";

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
  const readTime = Math.ceil(blog.body.raw.length / 1500);
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="mb-10">
        <p className="text-xl font-bold text-stone-700 tracking-tight">
          {blog.title}
        </p>
        <p className="text-muted-foreground mt-2 text-sm">{blog.summary}</p>
        <div className="flex items-center gap-5 mt-1">
          <p className="text-xs text-muted-foreground">
            {formatDate(blog.publishedAt)}
          </p>
          <div className="flex text-xs items-end gap-1 text-muted-foreground">
            <AiOutlineClockCircle />
            <p className="">{readTime} min read</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
