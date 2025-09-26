# Cloudflare Pages 配置修复指南

## 问题诊断

您的网站显示 `zk-consulting.service-ab5.workers.dev`，这表明：
- ❌ 项目被识别为 **Workers 项目**
- ✅ 应该是 **Pages 项目**，域名应为 `zk-consulting.pages.dev`

## 修复步骤

### 1. 检查 Cloudflare Dashboard 项目类型

1. 访问 [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. 确认项目 `zk-consulting` 显示为 **"Pages"** 类型
3. 如果显示为 **"Workers"** 类型，需要删除并重新创建

### 2. 重新创建 Pages 项目（推荐）

如果项目类型错误，请按以下步骤操作：

1. **删除现有项目**：
   - 在 Cloudflare Dashboard 中删除 `zk-consulting` 项目

2. **创建新的 Pages 项目**：
   - 点击 "Create a project"
   - 选择 "Connect to Git"
   - 连接您的 GitHub 仓库
   - 项目名称：`zk-consulting`
   - 框架：Next.js (Static Site)

3. **配置构建设置**：
   - **构建命令**: `npm run build:cloudflare`
   - **部署命令**: `npm run deploy:static`
   - **构建输出目录**: `out`
   - **根目录**: `/`

### 3. 验证配置

部署成功后，网站应该访问：
- ✅ **正确**: `https://zk-consulting.pages.dev`
- ❌ **错误**: `https://zk-consulting.service-ab5.workers.dev`

## 临时解决方案

如果无法立即重新创建项目，可以尝试：

1. **修改项目设置**：
   - 在 Cloudflare Dashboard 中
   - 进入项目 Settings
   - 检查是否有 "Workers" 相关设置
   - 确保项目类型为 "Pages"

2. **清理 wrangler.toml**：
   - 已移除可能导致混淆的配置
   - 只保留 Pages 相关设置

## 预期结果

修复后，您应该能够：
- ✅ 访问 `https://zk-consulting.pages.dev`
- ✅ 看到您的 Next.js 静态网站
- ✅ 所有页面正常工作
