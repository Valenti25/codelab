import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
   // output: "standalone",

   compress: true,

   eslint: {
      ignoreDuringBuilds: true,
   },

   compiler: {
      removeConsole: true
   },

   images: {
      dangerouslyAllowSVG: true,
      minimumCacheTTL: 1800,
      remotePatterns: [
         new URL('https://github.com/**'),
         {
            hostname: "*",
            port: "",
            protocol: "https"
         }
      ],
   },

   modularizeImports: {
      "lucide-react": {
         transform: "lucide-react/lib/icons/{{member}}"
      },
      "react-icons": {
         transform: "react-icons/{{member}}"
      },
      "@radix-ui/react-avatar": {
         transform: "@radix-ui/react-avatar/{{member}}"
      },
      "@radix-ui/react-label": {
         transform: "@radix-ui/react-label/{{member}}"
      },
      // "@radix-ui/react-slot": {
      //    transform: "@radix-ui/react-slot/{{member}}"
      // },
      "@radix-ui/react-tooltip": {
         transform: "@radix-ui/react-tooltip/{{member}}"
      },
      "recharts": {
         transform: "recharts/{{member}}"
      },
      "@hookform/resolvers": {
         transform: "@hookform/resolvers/{{member}}"
      },
      // "zod": {
      //    transform: "zod/lib/{{member}}"
      // }
   },

   // Webpack optimizations
   webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
         config.optimization.minimize = true;
         config.optimization.splitChunks.chunks = "all";
      }
      return config;
   },

   // Base path config
   // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
   // basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
   // publicRuntimeConfig: {
   //    basePath: process.env.NEXT_PUBLIC_BASE_PATH || ""
   // },
   // serverRuntimeConfig: {
   //    basePath: process.env.NEXT_PUBLIC_BASE_PATH || ""
   // },


   reactStrictMode: false,

   // rewrites: async () => {
   //    return [
   //       {
   //          source: "/",
   //          destination: process.env.API_URL || "/"
   //       }
   //    ];
   // }

}

export default nextConfig
