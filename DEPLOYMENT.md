# Cloudflare Pages 自动部署配置

## 设置步骤

### 1. 在 Cloudflare 中设置环境变量

1. 访问 [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. 选择您的项目 `kz-consulting`
3. 进入 Settings > Environment variables
4. 添加以下变量：
   - `NEXT_PUBLIC_SITE_URL`: `https://kz-consulting.pages.dev`
   - `NEXT_PUBLIC_REVALIDATE_TIME`: `600`
   - `STRAPI_API_URL`: `https://energized-dawn-75ac41de31.strapiapp.com`
   - `STRAPI_API_TOKEN`: 您的 Strapi API Token

## 部署方式

### 自动部署（推荐）

每次推送到 `main` 分支时，GitHub Actions 会自动：
1. 构建项目
2. 部署到 Cloudflare Pages

**无需额外配置** - GitHub 和 Cloudflare 已自动管理认证！

### 手动部署

运行以下命令：
```bash
./deploy-to-github.bat
```

## 访问地址

部署完成后，网站将在以下地址可用：
- **生产环境**: https://kz-consulting.pages.dev
- **预览环境**: 每次 PR 都会生成预览链接

## 监控部署状态

- **GitHub Actions**: https://github.com/KDCConsulting/kdc-consulting-next/actions
- **Cloudflare Pages**: https://dash.cloudflare.com/pages
