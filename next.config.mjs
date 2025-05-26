/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      // Add this new pattern for Wikimedia
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**" // Allows all paths under this host
      }
    ],
  },
};

export default nextConfig;
