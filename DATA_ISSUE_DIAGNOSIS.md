# 数据问题诊断和修复指南

## 问题症状
- ✅ 部署成功
- ❌ 网站无法找到数据
- ❌ API 调用失败

## 可能原因和解决方案

### 1. 环境变量问题 ✅ 已修复
**问题**: API Token 和 URL 未正确传递到 Workers 环境
**解决方案**: 
- 更新 `src/lib/api.ts` 使用环境变量
- 在 `wrangler.toml` 中添加环境变量配置

### 2. 静态文件路径问题
**检查**: 确保静态文件正确生成到 `out` 目录
**验证**: 检查 `out` 目录是否包含所有必要的文件

### 3. API 调用问题
**可能原因**:
- CORS 问题
- API 端点不可访问
- 认证问题

## 修复步骤

### 1. 重新部署
```bash
npm run deploy:workers
```

### 2. 检查环境变量
在 Cloudflare Workers Dashboard 中验证：
- `STRAPI_API_URL`
- `STRAPI_API_TOKEN`
- `NEXT_PUBLIC_SITE_URL`

### 3. 测试 API 连接
访问: `https://kdc-consulting-next.service-ab5.workers.dev`

### 4. 检查浏览器控制台
查看是否有 JavaScript 错误或网络请求失败

## 调试工具

### 检查 Workers 日志
1. 访问 Cloudflare Dashboard
2. 进入 Workers 项目
3. 查看实时日志

### 检查网络请求
1. 打开浏览器开发者工具
2. 查看 Network 标签
3. 检查 API 请求是否成功

## 预期结果

修复后应该能够：
- ✅ 正常访问网站
- ✅ 加载数据内容
- ✅ API 调用成功
- ✅ 所有页面功能正常
