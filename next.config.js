/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  output: "standalone", // This will build the project as a standalone app inside the Docker image.
};

module.exports = nextConfig;
