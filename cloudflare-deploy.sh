#!/bin/bash

# Cloudflare 部署脚本
# 使用方法: ./cloudflare-deploy.sh

set -e

echo "🚀 开始 Cloudflare 部署..."

# 检查 Node.js 版本
echo "📋 检查 Node.js 版本..."
node --version
npm --version

# 检查 wrangler 是否安装
echo "📦 检查 wrangler..."
npx wrangler --version

# 安装依赖
echo "📦 安装项目依赖..."
npm ci

# 构建静态文件
echo "🔨 构建静态文件..."
npm run build:cloudflare

# 检查构建输出
if [ ! -d "out" ]; then
    echo "❌ 构建失败，未找到 out 目录"
    exit 1
fi

echo "✅ 构建完成，输出目录: ./out"

# 部署到 Cloudflare Pages
echo "🌐 部署到 Cloudflare Pages..."
npx wrangler pages deploy ./out --project-name=kz-consulting

echo "✅ 部署完成！"
echo "🌐 访问地址: https://kz-consulting.pages.dev"
echo "📝 查看部署状态: npx wrangler pages deployment list --project-name=kz-consulting"
