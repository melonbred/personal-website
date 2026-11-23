/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Discord avatars for signed-in users.
    remotePatterns: [{ protocol: "https", hostname: "cdn.discordapp.com" }],
  },
};

module.exports = nextConfig;
