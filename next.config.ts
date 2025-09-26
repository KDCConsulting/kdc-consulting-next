import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 注释掉静态导出，改为服务器端渲染
  // output: 'export',
  
  // 图片优化配置
  images: {
    domains: ['energized-dawn-75ac41de31.media.strapiapp.com', 'www.kzconsulting.cn'],
    unoptimized: false,
  },
  
  // 禁用ESLint检查（解决CSS文件中的表达式警告）
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // 配置构建选项
  trailingSlash: true,
  
  // 配置环境变量
  env: {
    NEXT_PUBLIC_REVALIDATE_TIME: '600', // 10分钟
  },
};

export default nextConfig;
