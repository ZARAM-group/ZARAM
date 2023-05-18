/** @type {import('next').NextConfig} */
const nextConfig = {}

const images={
  remotePatterns: [
    {
      protocol: "https",
      hostname: "static.zara.net",
      port: "",
      pathname: "/"
    }
  ]
}

module.exports = nextConfig
