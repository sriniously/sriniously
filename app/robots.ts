const ROOT_DOMAIN = "https://sriniously.xyz";

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
