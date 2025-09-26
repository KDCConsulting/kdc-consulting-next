# 科智咨询 Next.js 项目

这是科智咨询的Next.js前端项目，基于Next.js 15、TypeScript、Tailwind CSS构建。

## 🚀 快速开始

### 环境要求

- Node.js 18.18.0 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

项目将在 [http://localhost:3000](http://localhost:3000) 启动

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── layout/           # 布局组件
│   │   ├── Header.tsx    # 头部导航
│   │   └── Footer.tsx    # 页脚
│   ├── ui/               # 基础UI组件
│   │   ├── Button.tsx    # 按钮组件
│   │   └── OptimizedImage.tsx # 优化图片组件
│   ├── sections/         # 页面区块组件
│   ├── forms/            # 表单组件
│   └── common/           # 通用组件
├── lib/                  # 工具函数和配置
│   ├── navigation.ts     # 导航配置
│   ├── constants.ts      # 常量定义
│   ├── utils.ts          # 工具函数
│   └── validations.ts    # 表单验证
├── types/                # TypeScript 类型定义
│   ├── global.d.ts       # 全局类型
│   └── components.ts     # 组件类型
└── styles/               # 样式文件
```

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件**: Headless UI
- **动画**: Framer Motion
- **轮播**: Swiper.js
- **表单**: React Hook Form + Zod
- **状态管理**: Zustand
- **数据获取**: SWR
- **SEO**: next-seo
- **国际化**: next-intl

## 📋 功能特性

- ✅ 响应式设计
- ✅ SEO优化
- ✅ 图片优化
- ✅ 类型安全
- ✅ 现代化UI组件
- ✅ 中英文支持
- ✅ 性能优化

## 🔧 开发命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# 类型检查
npm run type-check
```

## 📝 环境变量

创建 `.env.local` 文件：

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000
STRAPI_API_TOKEN=your-strapi-token-here
```

## 🎨 样式指南

项目使用 Tailwind CSS，支持：

- 响应式设计
- 深色模式
- 自定义动画
- 中文字体优化

## 📱 页面路由

- `/` - 首页
- `/insights` - 科智洞察
- `/services` - 服务
- `/industries` - 行业
- `/news` - 新闻中心
- `/contact` - 联系我们
- `/about` - 关于我们

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

Copyright © 2024. 中科智道集团 All rights reserved