import { ROOT_DOMAIN } from "@/lib/constants";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${ROOT_DOMAIN}/sitemap.xml`,
    host: ROOT_DOMAIN,
  };
}
