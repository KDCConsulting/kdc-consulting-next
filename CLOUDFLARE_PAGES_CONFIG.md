# Cloudflare Pages 正确配置指南

## 当前问题

Cloudflare Pages 从错误的仓库和目录克隆代码，导致构建失败。

## 解决方案

### 方案1：修改根目录配置（推荐）

在 Cloudflare Pages Dashboard 中设置：

1. **项目设置**：
   - **仓库**: 确保指向包含 Next.js 项目的正确仓库
   - **根目录**: `/kzzxEnNext/next`
   - **框架**: Next.js (Static Site)

2. **构建设置**：
   - **构建命令**: `npm run build:cloudflare`
   - **部署命令**: `npm run deploy:static`
   - **构建输出目录**: `out`

### 方案2：重构仓库结构（最佳）

将 Next.js 项目移到仓库根目录：

1. **移动文件**：
   ```
   将 kzzxEnNext/next/* 的所有文件移到仓库根目录
   ```

2. **更新配置**：
   - **根目录**: `/`
   - **构建命令**: `npm run build:cloudflare`
   - **部署命令**: `npm run deploy:static`
   - **构建输出目录**: `out`

## 验证配置

部署成功后，应该能够访问：
- ✅ `https://zk-consulting.pages.dev`
- ❌ 不是 `https://zk-consulting.service-ab5.workers.dev`

## 当前仓库结构问题

```
KDCConsulting/KDCConsulting (错误)
├── 没有 Next.js 项目
└── 缺少 app/ 或 pages/ 目录

应该是：
KDCConsulting/kdc-consulting-next (正确)
├── kzzxEnNext/
│   └── next/
│       ├── src/app/ (Next.js 项目)
│       ├── package.json
│       └── next.config.ts
```
