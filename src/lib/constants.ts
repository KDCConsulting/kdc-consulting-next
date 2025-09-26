// 网站常量配置
export const SITE_CONFIG = {
  name: '科智咨询',
  nameEn: 'KDC Consulting',
  description: '科学决策 赢在未来 - 数字科技领域的专业咨询服务机构',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/images/og-image.jpg',
  twitterImage: '/images/twitter-image.jpg',
  contact: {
    phone: '+86-10-51668499',
    email: 'service@kzconsulting.cn',
    address: '北京市朝阳区',
  },
  social: {
    weibo: 'https://weibo.com/kzconsulting',
    linkedin: 'https://www.linkedin.com/company/kzconsulting',
  },
} as const

// 分页配置
export const PAGINATION = {
  defaultPageSize: 12,
  maxPageSize: 50,
} as const

// 图片配置
export const IMAGE_CONFIG = {
  placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  sizes: {
    thumbnail: '150x150',
    small: '300x200',
    medium: '600x400',
    large: '1200x800',
  },
} as const
