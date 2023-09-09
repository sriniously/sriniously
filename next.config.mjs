import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.hashnode.com"],
  },
};

export default withContentlayer(nextConfig);
