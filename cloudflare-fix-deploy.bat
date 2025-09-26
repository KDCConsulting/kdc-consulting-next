@echo off
REM Cloudflare 修复部署脚本
REM 使用方法: cloudflare-fix-deploy.bat

echo 🚀 开始 Cloudflare 修复部署...

REM 清理缓存和依赖
echo 🧹 清理缓存和依赖...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

REM 重新安装依赖
echo 📦 重新安装依赖...
call npm install

REM 检查 wrangler 版本
echo 📋 检查 wrangler 版本...
call npx wrangler --version

REM 构建项目
echo 🔨 构建项目...
call npm run build:cloudflare

REM 检查构建输出
if not exist "out" (
    echo ❌ 构建失败，未找到 out 目录
    pause
    exit /b 1
)

echo ✅ 构建完成，输出目录: ./out

REM 部署到 Cloudflare Pages
echo 🌐 部署到 Cloudflare Pages...
call npx wrangler pages deploy ./out --project-name=kz-consulting

echo ✅ 部署完成！
echo 🌐 访问地址: https://kz-consulting.pages.dev
echo 📝 查看部署状态: npx wrangler pages deployment list --project-name=kz-consulting

pause
