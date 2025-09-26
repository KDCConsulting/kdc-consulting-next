#!/usr/bin/env node

/**
 * 定时任务调度器
 * 每10分钟调用重新验证API
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

// 配置
const REVALIDATE_URL = process.env.REVALIDATE_URL || 'http://localhost:3000/api/revalidate';
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'your-secret-key';
const REVALIDATE_INTERVAL = 10 * 60 * 1000; // 10分钟
const LOG_FILE = './logs/scheduler.log';

// 确保日志目录存在
const fs = require('fs');
const path = require('path');
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

// 调用重新验证API
async function callRevalidateAPI() {
  return new Promise((resolve, reject) => {
    const url = new URL(REVALIDATE_URL);
    const isHttps = url.protocol === 'https:';
    const client = isHttps ? https : http;
    
    const postData = JSON.stringify({
      path: '/',
      tag: 'all'
    });
    
    const options = {
      hostname: url.hostname,
      port: url.port || (isHttps ? 443 : 80),
      path: `${url.pathname}?secret=${REVALIDATE_SECRET}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    
    const req = client.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          log(`重新验证API调用成功: ${res.statusCode}`);
          log(`响应: ${data}`);
          resolve(data);
        } else {
          log(`重新验证API调用失败: ${res.statusCode}`);
          log(`错误响应: ${data}`);
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });
    
    req.on('error', (error) => {
      log(`重新验证API请求错误: ${error.message}`);
      reject(error);
    });
    
    req.write(postData);
    req.end();
  });
}

// 主函数
async function main() {
  log('定时任务调度器启动');
  log(`重新验证URL: ${REVALIDATE_URL}`);
  log(`重新验证间隔: ${REVALIDATE_INTERVAL / 1000}秒`);
  
  // 立即执行一次
  try {
    await callRevalidateAPI();
  } catch (error) {
    log(`初始重新验证失败: ${error.message}`);
  }
  
  // 设置定时器
  const intervalId = setInterval(async () => {
    try {
      await callRevalidateAPI();
    } catch (error) {
      log(`定时重新验证失败: ${error.message}`);
    }
  }, REVALIDATE_INTERVAL);
  
  // 优雅关闭
  process.on('SIGINT', () => {
    log('收到SIGINT信号，正在关闭调度器...');
    clearInterval(intervalId);
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    log('收到SIGTERM信号，正在关闭调度器...');
    clearInterval(intervalId);
    process.exit(0);
  });
  
  // 保持进程运行
  process.on('uncaughtException', (error) => {
    log(`未捕获的异常: ${error.message}`);
    log(`堆栈: ${error.stack}`);
  });
  
  process.on('unhandledRejection', (reason, promise) => {
    log(`未处理的Promise拒绝: ${reason}`);
  });
}

// 启动调度器
if (require.main === module) {
  main().catch(error => {
    log(`调度器启动失败: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { callRevalidateAPI, log };
