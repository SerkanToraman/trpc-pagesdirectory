// types/next-config.d.ts

import "next/config";

declare module "next/config" {
  interface PublicRuntimeConfig {
    NODE_ENV: string;
    // Add other properties as needed
  }

  interface NextConfig {
    publicRuntimeConfig: PublicRuntimeConfig;
  }

  export default function getConfig(): NextConfig;
}
