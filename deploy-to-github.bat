@echo off
REM GitHub 自动部署脚本
REM 使用方法: deploy-to-github.bat

echo 🚀 开始推送到 GitHub 并触发自动部署...

REM 检查 Git 状态
echo 📋 检查 Git 状态...
git status

REM 添加所有更改
echo 📦 添加所有更改...
git add .

REM 提交更改
echo 💾 提交更改...
git commit -m "Deploy: 更新网站内容 $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

REM 推送到 GitHub
echo 🌐 推送到 GitHub...
git push origin main

echo ✅ 推送完成！
echo 🔄 GitHub Actions 将自动构建并部署到 Cloudflare Pages
echo 🌐 部署完成后访问: https://kz-consulting.pages.dev
echo 📝 查看部署状态: https://github.com/KDCConsulting/kdc-consulting-next/actions

pause
