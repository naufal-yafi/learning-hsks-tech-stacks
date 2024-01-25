import CompressionPlugin from "compression-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: { optimizeCss: true },
  webpack: (config) => {
    config.plugins.push(
      new CompressionPlugin({
        test: /\.js$|\.css$|\.html$/,
      }),
    );
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
