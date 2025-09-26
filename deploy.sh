#!/bin/bash

# KZ Consulting 生产环境部署脚本
# 使用方法: ./deploy.sh

set -e

echo "🚀 开始部署 KZ Consulting 项目..."

# 检查Node.js版本
echo "📋 检查Node.js版本..."
node --version
npm --version

# 创建日志目录
echo "📁 创建日志目录..."
mkdir -p logs

# 安装依赖
echo "📦 安装项目依赖..."
npm ci --production

# 构建项目
echo "🔨 构建生产版本..."
npm run build

# 检查PM2是否安装
if ! command -v pm2 &> /dev/null; then
    echo "⚠️  PM2未安装，正在安装..."
    npm install -g pm2
fi

# 停止现有服务（如果存在）
echo "🛑 停止现有服务..."
pm2 stop kz-consulting 2>/dev/null || true
pm2 delete kz-consulting 2>/dev/null || true

# 启动服务
echo "▶️  启动服务..."
pm2 start ecosystem.config.js --env production

# 保存PM2配置
echo "💾 保存PM2配置..."
pm2 save

# 显示服务状态
echo "📊 服务状态:"
pm2 status

echo "✅ 部署完成！"
echo "🌐 访问地址: http://localhost:6002"
echo "📝 查看日志: pm2 logs kz-consulting"
echo "🔄 重启服务: pm2 restart kz-consulting"
