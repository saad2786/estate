/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['heroui.com'],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-raleway)", "sans-serif"], // If using `variable`
        // OR:
        sans: ["Raleway", "sans-serif"], // Direct reference
      },
    },

  };
  
  export default nextConfig;