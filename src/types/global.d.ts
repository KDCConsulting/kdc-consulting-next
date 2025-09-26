// 全局类型定义

export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiImage {
  id: number
  attributes: {
    name: string
    alternativeText?: string
    caption?: string
    width: number
    height: number
    formats?: {
      thumbnail?: StrapiImageFormat
      small?: StrapiImageFormat
      medium?: StrapiImageFormat
      large?: StrapiImageFormat
    }
    url: string
  }
}

export interface StrapiImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  url: string
}

export interface SEO {
  metaTitle?: string
  metaDescription?: string
  keywords?: string
  canonicalURL?: string
  metaImage?: StrapiImage
  metaSocial?: {
    socialNetwork: string
    title: string
    description: string
    image: StrapiImage
  }[]
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
