#!/usr/bin/env node

/**
 * 定时重新编译脚本
 * 每10分钟重新生成静态页面
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// 配置
const REVALIDATE_INTERVAL = 10 * 60 * 1000; // 10分钟
const LOG_FILE = path.join(__dirname, '../logs/revalidate.log');

// 确保日志目录存在
const logDir = path.dirname(LOG_FILE);
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// 日志函数
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  
  console.log(logMessage.trim());
  fs.appendFileSync(LOG_FILE, logMessage);
}

// 重新编译函数
async function revalidate() {
  return new Promise((resolve, reject) => {
    log('开始重新编译静态页面...');
    
    const startTime = Date.now();
    
    exec('npm run build', { cwd: path.join(__dirname, '..') }, (error, stdout, stderr) => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      if (error) {
        log(`重新编译失败: ${error.message}`);
        log(`错误输出: ${stderr}`);
        reject(error);
        return;
      }
      
      log(`重新编译成功，耗时: ${duration}ms`);
      log(`输出: ${stdout}`);
      
      if (stderr) {
        log(`警告: ${stderr}`);
      }
      
      resolve();
    });
  });
}

// 主函数
async function main() {
  log('定时重新编译服务启动');
  log(`重新编译间隔: ${REVALIDATE_INTERVAL / 1000}秒`);
  
  // 立即执行一次
  try {
    await revalidate();
  } catch (error) {
    log(`初始编译失败: ${error.message}`);
  }
  
  // 设置定时器
  setInterval(async () => {
    try {
      await revalidate();
    } catch (error) {
      log(`定时重新编译失败: ${error.message}`);
    }
  }, REVALIDATE_INTERVAL);
  
  // 优雅关闭
  process.on('SIGINT', () => {
    log('收到SIGINT信号，正在关闭服务...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    log('收到SIGTERM信号，正在关闭服务...');
    process.exit(0);
  });
}

// 启动服务
if (require.main === module) {
  main().catch(error => {
    log(`服务启动失败: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { revalidate, log };
