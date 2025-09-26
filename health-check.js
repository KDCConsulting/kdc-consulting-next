#!/usr/bin/env node

// KZ Consulting 健康检查脚本
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 6002,
  path: '/',
  method: 'GET',
  timeout: 5000
};

const req = http.request(options, (res) => {
  console.log(`✅ 服务运行正常 - 状态码: ${res.statusCode}`);
  process.exit(0);
});

req.on('error', (err) => {
  console.log(`❌ 服务异常 - 错误: ${err.message}`);
  process.exit(1);
});

req.on('timeout', () => {
  console.log('⏰ 服务响应超时');
  req.destroy();
  process.exit(1);
});

req.end();
