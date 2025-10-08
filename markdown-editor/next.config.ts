
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 💡 Required for serving with NGINX (Static Export)
  output: 'export',
  
  // Optional: Allows a base path if your app is not at the root (e.g., mysite.com/app/)
  // basePath: '', 

  // Make sure to use the 'export' option for static builds
};

export default nextConfig;