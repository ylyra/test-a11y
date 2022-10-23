/**
 * @type {import('next').NextConfig}
 **/
export default {
  images: {
    domains: ["blog.rocketseat.com.br"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
    newNextLinkBehavior: true,
  },
};
