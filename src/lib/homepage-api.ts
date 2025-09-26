// 首页专用API接口
import { STRAPI_API_URL, STRAPI_API_TOKEN } from './api'

// 新的首页轮播图类型 (基于新API结构)
export interface BannerSwiper {
  id: number
  Title: string
  Description: string
  Remark: string | null
  Link: string | null
  Image: {
    id: number
    documentId: string
    name: string
    alternativeText: string | null
    caption: string | null
    width: number | null
    height: number | null
    formats: Record<string, unknown> | null
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: Record<string, unknown> | null
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

// 新的首页案例类型 (indexCases) - 基于新API结构
export interface IndexCase {
  id: number
  Title: string
  Description: string
  Remark: string | null
  Link: string | null
  Image: {
    id: number
    documentId: string
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: {
      thumbnail?: {
        ext: string
        url: string
        hash: string
        mime: string
        name: string
        path: string | null
        size: number
        width: number
        height: number
        sizeInBytes: number
      }
    } | null
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: Record<string, unknown> | null
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

// 首页案例类型 (bannerCases) - 保持原有结构作为备选
export interface BannerCase {
  id: number
  attributes: {
    title: string
    description: string
    image: {
      data: {
        attributes: {
          url: string
          alternativeText?: string
        }
      }
    }
    sortOrder: number
    isActive: boolean
    createdAt: string
    updatedAt: string
  }
}

// 首页数据响应类型
export interface HomepageData {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  bannerSwiper: BannerSwiper[]
  indexCases: IndexCase[]
}

// 通用API响应类型
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

// API请求配置
const apiConfig = {
  baseURL: STRAPI_API_URL,
  headers: {
    'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
}

// 通用API请求函数
async function strapiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<StrapiResponse<T>> {
  const url = `${STRAPI_API_URL}${endpoint}`
  
  const response = await fetch(url, {
    ...options,
    headers: {
      ...apiConfig.headers,
      ...options.headers,
    },
    // 添加ISR配置
    next: {
      revalidate: 600, // 10分钟重新验证
      tags: [endpoint.split('/')[2] || 'homepage'], // 使用endpoint中的内容类型作为标签
    },
  })

  if (!response.ok) {
    throw new Error(`API请求失败: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

// 首页API
export const homepageApi = {
  // 获取首页数据 (包含轮播图和案例)
  async getHomepageData(): Promise<HomepageData> {
    try {
      const response = await strapiRequest<HomepageData>('/api/index?populate[bannerSwiper][populate]=*&populate[indexCases][populate]=*')
      return response.data
    } catch (error) {
      console.error('获取首页数据失败:', error)
      // 返回默认数据
      return {
        id: 1,
        documentId: 'default',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        bannerSwiper: [
          {
            id: 1,
            Title: '数字科技领域专业咨询服务机构',
            Description: '科学决策 赢在未来',
            Remark: null,
            Link: null,
            Image: {
              id: 1,
              documentId: 'default-1',
              name: 'default-banner-1',
              alternativeText: '默认轮播图1',
              caption: null,
              width: null,
              height: null,
              formats: null,
              hash: 'default_1',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 100,
              url: '/images/banner1.jpg',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              publishedAt: new Date().toISOString()
            }
          },
          {
            id: 2,
            Title: '优化运营 行稳致远',
            Description: '面向数字科技领域提供全方位咨询服务',
            Remark: null,
            Link: null,
            Image: {
              id: 2,
              documentId: 'default-2',
              name: 'default-banner-2',
              alternativeText: '默认轮播图2',
              caption: null,
              width: null,
              height: null,
              formats: null,
              hash: 'default_2',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 100,
              url: '/images/banner2.jpg',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              publishedAt: new Date().toISOString()
            }
          }
        ],
        indexCases: [
          {
            id: 1,
            Title: '海外业务拓展规划',
            Description: '通过详实的区域行业和客户研究形成战略定位，最终实现海外落地项目的独立运营',
            Remark: null,
            Link: null,
            Image: {
              id: 1,
              documentId: 'default-case-1',
              name: 'default-case-1',
              alternativeText: '默认案例1',
              caption: null,
              width: 300,
              height: 300,
              formats: null,
              hash: 'default_case_1',
              ext: '.png',
              mime: 'image/png',
              size: 50,
              url: '/images/case1.jpg',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              publishedAt: new Date().toISOString()
            }
          }
        ]
      }
    }
  },

  // 获取首页轮播图 (bannerSwiper) - 从首页数据中提取
  async getBannerSlides(): Promise<BannerSwiper[]> {
    try {
      const homepageData = await this.getHomepageData()
      return homepageData.bannerSwiper || []
    } catch (error) {
      console.error('获取首页轮播图失败:', error)
      return []
    }
  },

  // 获取首页案例 (indexCases) - 从首页数据中提取
  async getIndexCases(): Promise<IndexCase[]> {
    try {
      const homepageData = await this.getHomepageData()
      return homepageData.indexCases || []
    } catch (error) {
      console.error('获取首页案例失败:', error)
      return []
    }
  },

  // 获取首页案例 (bannerCases) - 保持兼容性，暂时使用静态数据
  async getBannerCases(): Promise<BannerCase[]> {
    try {
      // 暂时返回静态数据，因为API端点可能不存在
      return [
        {
          id: 1,
          attributes: {
            title: '数据中心REITs成功上市',
            description: '科智咨询助力国内首批数据中心REITs成功上市',
            image: {
              data: {
                attributes: {
                  url: '/images/case1.jpg',
                  alternativeText: '数据中心REITs案例'
                }
              }
            },
            sortOrder: 1,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        },
        {
          id: 2,
          attributes: {
            title: '智能算力租赁市场研究',
            description: '深度解读中国智能算力租赁市场现状与未来发展',
            image: {
              data: {
                attributes: {
                  url: '/images/case2.jpg',
                  alternativeText: '智能算力租赁案例'
                }
              }
            },
            sortOrder: 2,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        }
      ]
    } catch (error) {
      console.error('获取首页案例失败:', error)
      return []
    }
  },

  // 获取所有首页数据
  async getAllHomepageData() {
    try {
      const homepageData = await this.getHomepageData()

      return {
        bannerSlides: homepageData.bannerSwiper || [],
        indexCases: homepageData.indexCases || [],
        bannerCases: [] as BannerCase[] // 保持兼容性
      }
    } catch (error) {
      console.error('获取首页数据失败:', error)
      return {
        bannerSlides: [],
        indexCases: [],
        bannerCases: [] as BannerCase[]
      }
    }
  }
}