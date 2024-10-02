/** @type {import('next').NextConfig} */
import nextra from 'nextra';


const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "uploadthing.com",
      "utfs.io",
      "img.clerk.com",
      "subdomain",
      "files.stripe.com",
      "upload.wikimedia.org",
      "logos-world.net"
    ],
  },
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})
 

export default withNextra(nextConfig)