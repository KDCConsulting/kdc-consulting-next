# KDC Consulting Next.js 项目

## 项目简介

这是一个基于 Next.js 的静态网站项目，使用 Cloudflare Workers 部署。

## 技术栈

- **框架**: Next.js 15.5.2
- **样式**: Tailwind CSS
- **部署**: Cloudflare Workers
- **CMS**: Strapi

## 开发命令

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建项目
npm run build:cloudflare

# 部署到 Cloudflare Workers
npm run deploy:workers
```

## 部署配置

### Cloudflare Workers 部署

项目配置为使用 Cloudflare Workers 部署：

- **配置文件**: `wrangler.toml`
- **构建输出**: `out` 目录
- **部署命令**: `npm run deploy:workers`

### 环境变量

在 `wrangler.toml` 中配置：
- `STRAPI_API_URL`: Strapi API 地址
- `STRAPI_API_TOKEN`: Strapi API Token
- `NEXT_PUBLIC_SITE_URL`: 网站 URL

## 项目结构

```
src/
├── app/           # Next.js App Router 页面
├── components/    # React 组件
├── lib/          # 工具函数和 API 配置
├── styles/       # CSS 样式文件
└── types/        # TypeScript 类型定义
```

## 访问地址

- **生产环境**: https://kdc-consulting-next.service-ab5.workers.dev
- **开发环境**: http://localhost:6002

## 功能特性

- ✅ 响应式设计
- ✅ 静态网站生成 (SSG)
- ✅ 动态路由支持
- ✅ API 数据集成
- ✅ SEO 优化