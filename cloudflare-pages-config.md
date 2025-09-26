# Cloudflare Pages 配置说明

## 推荐的 Cloudflare Pages 设置

### 构建配置
- **框架**: Next.js (Static Site)
- **构建命令**: `npm run build:cloudflare`
- **部署命令**: 留空（使用 GitHub Actions 自动部署）
- **根目录**: `/`
- **构建输出目录**: `out`

### 分支控制
- **生产分支**: `main`
- **拉取请求预览**: 已启用

### 环境变量（在 Cloudflare Dashboard 中设置）
- `NEXT_PUBLIC_SITE_URL`: `https://zk-consulting.pages.dev`
- `NEXT_PUBLIC_REVALIDATE_TIME`: `600`
- `STRAPI_API_URL`: `https://energized-dawn-75ac41de31.strapiapp.com`
- `STRAPI_API_TOKEN`: 您的 Strapi API Token

## 为什么移除部署命令？

1. **GitHub Actions 自动处理**: 我们使用 GitHub Actions 进行部署
2. **避免命令冲突**: 本地 `wrangler deploy` 与 Pages 不兼容
3. **简化配置**: 减少手动配置错误

## 部署流程

1. **推送代码到 GitHub**
2. **GitHub Actions 自动构建和部署**
3. **Cloudflare Pages 自动更新**

无需手动运行部署命令！
