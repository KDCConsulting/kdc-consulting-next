# Cloudflare Workers 部署配置

## 修改后的配置

### 1. wrangler.toml 配置
```toml
# Cloudflare Workers 项目配置
name = "zk-consulting"
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]

# Workers 配置
[assets]
directory = "./out"

# 环境变量
[vars]
NEXT_PUBLIC_SITE_URL = "https://zk-consulting.service-ab5.workers.dev"
NEXT_PUBLIC_REVALIDATE_TIME = "600"
```

### 2. package.json 脚本
```json
"deploy:workers": "npm run build:cloudflare && npx wrangler deploy"
```

## Cloudflare Dashboard 配置

### 构建设置
- **框架**: 选择 "None" 或 "Custom"
- **构建命令**: `npm run build:cloudflare`
- **部署命令**: `npm run deploy:workers`
- **构建输出目录**: `out`
- **根目录**: `/kzzxEnNext/next`

### 环境变量
在 Cloudflare Dashboard 中设置：
- `STRAPI_API_URL`: `https://energized-dawn-75ac41de31.strapiapp.com`
- `STRAPI_API_TOKEN`: 您的 Strapi API Token

## 部署流程

1. **构建阶段**:
   - 运行 `npm run build:cloudflare`
   - 生成静态文件到 `out` 目录

2. **部署阶段**:
   - 运行 `npm run deploy:workers`
   - 使用 `npx wrangler deploy` 部署到 Workers

## 访问地址

- **Workers 域名**: `https://zk-consulting.service-ab5.workers.dev`
- **自定义域名**: 可以在 Cloudflare Dashboard 中配置

## 优势

- ✅ **支持 Workers 功能**: 可以使用 Workers 的服务器端功能
- ✅ **更好的性能**: Workers 边缘计算
- ✅ **更灵活的配置**: 支持自定义路由和中间件

## 注意事项

- Workers 有请求限制（免费版每月 100,000 请求）
- 静态文件通过 `[assets]` 配置提供
- 需要确保 `out` 目录包含所有静态文件
