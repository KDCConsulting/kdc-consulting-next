# Cloudflare Pages 静态部署配置

## 问题说明

PM2 是用于 Node.js 服务器进程管理的工具，但 **Cloudflare Pages 是静态网站托管服务**，不支持 PM2 或任何服务器端进程管理。

## 正确的部署配置

### Cloudflare Pages Dashboard 设置

在 Cloudflare Pages 项目 `zk-consulting` 中设置：

1. **构建配置**：
   - **框架**: Next.js (Static Site)
   - **构建命令**: `npm run build:cloudflare`
   - **部署命令**: `npm run deploy:static`
   - **构建输出目录**: `out`
   - **根目录**: `/`

2. **环境变量**（在 Cloudflare Dashboard 中设置）：
   - `NEXT_PUBLIC_SITE_URL`: `https://zk-consulting.pages.dev`
   - `NEXT_PUBLIC_REVALIDATE_TIME`: `600`
   - `STRAPI_API_URL`: `https://energized-dawn-75ac41de31.strapiapp.com`
   - `STRAPI_API_TOKEN`: 您的 Strapi API Token

## 为什么不能使用 PM2？

1. **Cloudflare Pages 是静态托管**：只提供静态文件服务
2. **不支持服务器端进程**：无法运行 Node.js 服务器
3. **PM2 需要服务器环境**：需要操作系统进程管理

## 静态网站的优势

1. **更快的加载速度**：CDN 全球分发
2. **更高的可靠性**：无服务器故障
3. **更低的成本**：免费静态托管
4. **更好的 SEO**：静态页面更利于搜索引擎

## 部署流程

1. **推送代码到 GitHub**
2. **Cloudflare Pages 自动**：
   - 运行 `npm run build:cloudflare`
   - 生成静态文件到 `out` 目录
   - 运行 `npm run deploy:static`（仅作占位）
   - 自动发布 `out` 目录内容

## 访问地址

- **生产环境**: https://zk-consulting.pages.dev
- **预览环境**: 每次 PR 都会生成预览链接
