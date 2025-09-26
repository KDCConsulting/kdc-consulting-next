# Cloudflare Pages 最终配置指南

## 正确的构建设置

### 框架预设
- **选择**: `Next.js (Static HTML Export)` ✅

### 构建配置
- **构建命令**: `npm run build:cloudflare` ⚠️ **不要使用默认的 `npx next build`**
- **构建输出目录**: `out`
- **根目录**: `/kzzxEnNext/next` ⚠️ **指向 Next.js 项目目录**

### 环境变量（在 Cloudflare Dashboard 中设置）
- `NEXT_PUBLIC_SITE_URL`: `https://zk-consulting.pages.dev`
- `NEXT_PUBLIC_REVALIDATE_TIME`: `600`
- `STRAPI_API_URL`: `https://energized-dawn-75ac41de31.strapiapp.com`
- `STRAPI_API_TOKEN`: 您的 Strapi API Token

## 重要说明

### ❌ 不要设置：
- **部署命令**: 留空（框架预设会自动处理）
- **默认构建命令**: 不要使用 `npx next build`

### ✅ 必须设置：
- **根目录**: `/kzzxEnNext/next`（指向 Next.js 项目）
- **构建命令**: `npm run build:cloudflare`（使用我们的配置）

## 为什么使用 `build:cloudflare`？

我们的 `package.json` 中配置了：
```json
"build:cloudflare": "next build"
```

这个命令会：
1. 运行 `next build`
2. 生成静态文件到 `out` 目录
3. 配置为静态导出模式

## 部署流程

1. **Cloudflare Pages 自动**：
   - 克隆仓库到 `/kzzxEnNext/next` 目录
   - 运行 `npm run build:cloudflare`
   - 生成静态文件到 `out` 目录
   - 自动发布 `out` 目录内容

2. **访问地址**：
   - 生产环境: `https://zk-consulting.pages.dev`
   - 预览环境: 每次 PR 都会生成预览链接
