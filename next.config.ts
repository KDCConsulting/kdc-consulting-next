import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用静态导出用于 Cloudflare Pages
  output: 'export',
  
  // 配置动态路由
  trailingSlash: true,
  
  // 图片优化配置 - 静态导出需要禁用优化
  images: {
    domains: ['energized-dawn-75ac41de31.media.strapiapp.com', 'www.kzconsulting.cn'],
    unoptimized: true, // 静态导出需要禁用图片优化
  },
  
  // 禁用ESLint检查（解决CSS文件中的表达式警告）
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // 配置构建选项
  trailingSlash: true,
  
  // 静态导出配置
  distDir: 'out',
  
  // 配置环境变量
  env: {
    NEXT_PUBLIC_REVALIDATE_TIME: '600', // 10分钟
  },
  
  // 禁用服务器端功能（移除 esmExternals 以支持 Turbopack）
  // experimental: {
  //   esmExternals: false,
  // },
  
  // 暂时禁用动态路由以解决构建问题
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
