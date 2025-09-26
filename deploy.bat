@echo off
REM KZ Consulting 生产环境部署脚本
REM 使用方法: deploy.bat

echo 🚀 开始部署 KZ Consulting 项目...

REM 检查Node.js版本
echo 📋 检查Node.js版本...
node --version
npm --version

REM 创建日志目录
echo 📁 创建日志目录...
if not exist logs mkdir logs

REM 安装依赖
echo 📦 安装项目依赖...
call npm ci --production

REM 构建项目
echo 🔨 构建生产版本...
call npm run build

REM 检查PM2是否安装
pm2 --version >nul 2>&1
if errorlevel 1 (
    echo ⚠️  PM2未安装，正在安装...
    call npm install -g pm2
)

REM 停止现有服务（如果存在）
echo 🛑 停止现有服务...
call pm2 stop kz-consulting 2>nul
call pm2 delete kz-consulting 2>nul

REM 启动服务
echo ▶️  启动服务...
call pm2 start ecosystem.config.js --env production

REM 保存PM2配置
echo 💾 保存PM2配置...
call pm2 save

REM 显示服务状态
echo 📊 服务状态:
call pm2 status

echo ✅ 部署完成！
echo 🌐 访问地址: http://localhost:6002
echo 📝 查看日志: pm2 logs kz-consulting
echo 🔄 重启服务: pm2 restart kz-consulting

pause
