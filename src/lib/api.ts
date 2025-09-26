// Strapi API 配置和类型定义
export const STRAPI_API_URL = 'https://energized-dawn-75ac41de31.strapiapp.com'
export const STRAPI_API_TOKEN = 'eb4477ce3f84462840281742ee5af41b9f30d671b7b8e13140eb3ae24eddef6f91f40612434fa6e9009fb476f5cb642725f5caa7e9ca364444a5c2c114a6c9ff853b9d3a5c6a5734021a1b350141610b9df36aff704bba0d1fb8e724ccaf3ac2addc95e2a0c4cb7db4be2f0690cb72eb186c812984cb239c2c968c03007fef9f'

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

// 媒体文件类型
export interface Media {
  id: number
  attributes: {
    name: string
    alternativeText?: string
    caption?: string
    width?: number
    height?: number
    formats?: any
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl?: string
    provider: string
    provider_metadata?: any
    createdAt: string
    updatedAt: string
  }
}

// 作者类型
export interface Author {
  id: number
  attributes: {
    name: string
    email?: string
    bio?: string
    avatar?: {
      data: Media
    }
    createdAt: string
    updatedAt: string
  }
}

// 洞察文章类型
export interface Insight {
  id: number
  documentId: string
  title: string
  Subtitle?: string
  Author?: string
  industrys?: string | null
  Source?: string
  SortOrder?: number
  Reprint?: boolean | null
  Description?: string | null
  Content?: any
  createdAt: string
  updatedAt: string
  publishedAt: string
  Attachments?: any | null
  BannerImage?: any | null
  MobileCover?: any | null
  PcCover?: {
    id: number
    documentId: string
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {
      large?: {
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
      small?: {
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
      medium?: {
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
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: any | null
    createdAt: string
    updatedAt: string
    publishedAt: string
  } | null
}

// 新闻类型
export interface News {
  id: number
  documentId: string
  title: string
  Subtitle?: string
  Author?: string
  industrys?: string | null
  Source?: string
  SortOrder?: number
  Reprint?: boolean | null
  Description?: string | null
  Content?: any
  createdAt: string
  updatedAt: string
  publishedAt: string
  Attachments?: any | null
  BannerImage?: any | null
  MobileCover?: any | null
  PcCover?: {
    id: number
    documentId: string
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {
      large?: {
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
      small?: {
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
      medium?: {
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
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: any | null
    createdAt: string
    updatedAt: string
    publishedAt: string
  } | null
}

// 报告类型
export interface Report {
  id: number
  documentId: string
  title: string
  Subtitle?: string
  Author?: string
  industrys?: string | null
  Source?: string
  SortOrder?: number
  Reprint?: boolean | null
  Description?: string | null
  Content?: any
  createdAt: string
  updatedAt: string
  publishedAt: string
  Attachments?: any | null
  BannerImage?: any | null
  MobileCover?: any | null
  PcCover?: {
    id: number
    documentId: string
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {
      large?: {
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
      small?: {
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
      medium?: {
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
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: any | null
    createdAt: string
    updatedAt: string
    publishedAt: string
  } | null
}


// 文章类型
export interface Article {
  id: number
  attributes: {
    title: string
    description?: string
    slug: string
    content?: any
    featuredImage?: {
      data: Media
    }
    author?: {
      data: Author
    }
    publishedAt: string
    createdAt: string
    updatedAt: string
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

// 数据验证函数
function validateInsightData(data: any): data is Insight {
  return data && 
    typeof data === 'object' && 
    typeof data.id === 'number' &&
    typeof data.documentId === 'string' &&
    typeof data.title === 'string' &&
    typeof data.createdAt === 'string' &&
    typeof data.updatedAt === 'string' &&
    typeof data.publishedAt === 'string'
}

function validateNewsData(data: any): data is News {
  return data && 
    typeof data === 'object' && 
    typeof data.id === 'number' &&
    typeof data.documentId === 'string' &&
    typeof data.title === 'string' &&
    typeof data.createdAt === 'string' &&
    typeof data.updatedAt === 'string' &&
    typeof data.publishedAt === 'string'
}

function validateReportData(data: any): data is Report {
  return data && 
    typeof data === 'object' && 
    typeof data.id === 'number' &&
    typeof data.documentId === 'string' &&
    typeof data.title === 'string' &&
    typeof data.createdAt === 'string' &&
    typeof data.updatedAt === 'string' &&
    typeof data.publishedAt === 'string'
}

// 通用API请求函数
async function strapiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<StrapiResponse<T>> {
  const url = `${STRAPI_API_URL}${endpoint}`
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...apiConfig.headers,
        ...options.headers,
      },
      // 添加ISR配置
      next: {
        revalidate: 600, // 10分钟重新验证
        tags: [endpoint.split('/')[2] || 'default'], // 使用endpoint中的内容类型作为标签
      },
    })

    if (!response.ok) {
      console.error(`API请求失败: ${response.status} ${response.statusText}`, { url, options })
      throw new Error(`API请求失败: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    
    // 确保返回的数据结构正确
    if (!data || typeof data !== 'object') {
      console.error('API返回数据格式错误:', data)
      throw new Error('API返回数据格式错误')
    }

    return data
  } catch (error) {
    console.error('API请求异常:', error)
    throw error
  }
}

// 洞察相关API
export const insightsApi = {
  // 获取洞察列表
  async getInsights(params: {
    page?: number
    pageSize?: number
    sort?: string
    filters?: Record<string, any>
  } = {}): Promise<StrapiResponse<Insight[]>> {
    const searchParams = new URLSearchParams()
    
    // 新API不需要populate参数，数据已经扁平化
    if (params.page) {
      searchParams.set('pagination[page]', params.page.toString())
    }
    
    if (params.pageSize) {
      searchParams.set('pagination[pageSize]', params.pageSize.toString())
    }
    
    if (params.sort) {
      searchParams.set('sort', params.sort)
    }
    
    if (params.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        searchParams.set(`filters[${key}]`, value)
      })
    }
    
    const response = await strapiRequest<Insight[]>(`/api/insights?${searchParams.toString()}`)
    
    // 验证数据
    if (response.data && Array.isArray(response.data)) {
      response.data = response.data.filter(validateInsightData)
    }
    
    return response
  },

  // 根据ID获取洞察详情
  async getInsightById(id: number): Promise<StrapiResponse<Insight>> {
    return strapiRequest<Insight>(`/api/insights/${id}`)
  },

  // 根据documentId获取洞察详情
  async getInsightByDocumentId(documentId: string): Promise<StrapiResponse<Insight[]>> {
    return strapiRequest<Insight[]>(`/api/insights?filters[documentId][$eq]=${documentId}`)
  },

  // 根据标题获取洞察详情
  async getInsightByTitle(title: string): Promise<StrapiResponse<Insight[]>> {
    return strapiRequest<Insight[]>(`/api/insights?filters[title][$eq]=${title}`)
  },
}

// 新闻相关API
export const newsApi = {
  // 获取新闻列表
  async getNews(params: {
    page?: number
    pageSize?: number
    sort?: string
    filters?: Record<string, any>
  } = {}): Promise<StrapiResponse<News[]>> {
    const searchParams = new URLSearchParams()
    
    if (params.page) {
      searchParams.set('pagination[page]', params.page.toString())
    }
    
    if (params.pageSize) {
      searchParams.set('pagination[pageSize]', params.pageSize.toString())
    }
    
    if (params.sort) {
      searchParams.set('sort', params.sort)
    }
    
    if (params.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        searchParams.set(`filters[${key}]`, value)
      })
    }
    
    const response = await strapiRequest<News[]>(`/api/newses?${searchParams.toString()}`)
    
    // 验证数据
    if (response.data && Array.isArray(response.data)) {
      response.data = response.data.filter(validateNewsData)
    }
    
    return response
  },

  // 根据ID获取新闻详情
  async getNewsById(id: number): Promise<StrapiResponse<News>> {
    return strapiRequest<News>(`/api/newses/${id}`)
  },

  // 根据documentId获取新闻详情
  async getNewsByDocumentId(documentId: string): Promise<StrapiResponse<News[]>> {
    return strapiRequest<News[]>(`/api/newses?filters[documentId][$eq]=${documentId}`)
  },

  // 根据标题获取新闻详情
  async getNewsByTitle(title: string): Promise<StrapiResponse<News[]>> {
    return strapiRequest<News[]>(`/api/newses?filters[title][$eq]=${title}`)
  },
}

// 文章相关API
export const articlesApi = {
  // 获取文章列表
  async getArticles(params: {
    page?: number
    pageSize?: number
    sort?: string
    filters?: Record<string, any>
  } = {}): Promise<StrapiResponse<Article[]>> {
    const searchParams = new URLSearchParams()
    
    searchParams.set('populate', '*')
    
    if (params.page) {
      searchParams.set('pagination[page]', params.page.toString())
    }
    
    if (params.pageSize) {
      searchParams.set('pagination[pageSize]', params.pageSize.toString())
    }
    
    if (params.sort) {
      searchParams.set('sort', params.sort)
    }
    
    if (params.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        searchParams.set(`filters[${key}]`, value)
      })
    }
    
    return strapiRequest<Article[]>(`/api/articles?${searchParams.toString()}`)
  },

  // 根据ID获取文章详情
  async getArticleById(id: number): Promise<StrapiResponse<Article>> {
    return strapiRequest<Article>(`/api/articles/${id}?populate=*`)
  },

  // 根据slug获取文章详情
  async getArticleBySlug(slug: string): Promise<StrapiResponse<Article[]>> {
    return strapiRequest<Article[]>(`/api/articles?filters[slug][$eq]=${slug}&populate=*`)
  },
}

// 作者相关API
export const authorsApi = {
  // 获取作者列表
  async getAuthors(): Promise<StrapiResponse<Author[]>> {
    return strapiRequest<Author[]>('/api/authors?populate=*')
  },

  // 根据ID获取作者详情
  async getAuthorById(id: number): Promise<StrapiResponse<Author>> {
    return strapiRequest<Author>(`/api/authors/${id}?populate=*`)
  },
}

// 报告相关API
export const reportsApi = {
  // 获取报告列表
  async getReports(params: {
    page?: number
    pageSize?: number
    sort?: string
    filters?: Record<string, any>
  } = {}): Promise<StrapiResponse<Report[]>> {
    const searchParams = new URLSearchParams()
    
    if (params.page) {
      searchParams.set('pagination[page]', params.page.toString())
    }
    
    if (params.pageSize) {
      searchParams.set('pagination[pageSize]', params.pageSize.toString())
    }
    
    if (params.sort) {
      searchParams.set('sort', params.sort)
    }
    
    if (params.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        searchParams.set(`filters[${key}]`, value)
      })
    }
    
    const response = await strapiRequest<Report[]>(`/api/reports?${searchParams.toString()}`)
    
    // 验证数据
    if (response.data && Array.isArray(response.data)) {
      response.data = response.data.filter(validateReportData)
    }
    
    return response
  },

  // 根据ID获取报告详情
  async getReportById(id: number): Promise<StrapiResponse<Report>> {
    return strapiRequest<Report>(`/api/reports/${id}`)
  },

  // 根据documentId获取报告详情
  async getReportByDocumentId(documentId: string): Promise<StrapiResponse<Report[]>> {
    return strapiRequest<Report[]>(`/api/reports?filters[documentId][$eq]=${documentId}`)
  },

  // 根据标题获取报告详情
  async getReportByTitle(title: string): Promise<StrapiResponse<Report[]>> {
    return strapiRequest<Report[]>(`/api/reports?filters[title][$eq]=${title}`)
  },
}

// 行业频道类型定义
export interface IndustryChannel {
  id: number
  documentId: string
  channelName: string
  channelDescription: Array<{
    type: string
    children: Array<{
      text: string
      type: string
    }>
  }>
  industryIntroductionTitle: string
  industryIntroductionContent: Array<{
    type: string
    children: Array<{
      text: string
      type: string
    }>
  }>
  ResourcesandCapabilitiesTitle: string
  ResourcesandCapabilitiesBriefIntroduction?: string
  channelBanner: {
    id: number
    documentId: string
    name: string
    alternativeText?: string
    caption?: string
    width: number
    height: number
    formats: any
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl?: string
    provider: string
    provider_metadata?: any
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  industryIntroductionImage?: {
    id: number
    documentId: string
    name: string
    alternativeText?: string
    caption?: string
    width: number
    height: number
    formats: any
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl?: string
    provider: string
    provider_metadata?: any
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  ResourcesandCapabilitiesComponents: Array<{
    id: number
    Title: string
    Description: string
    Symbol?: string
    Number: string
  }>
  SuccessfulCasesComponents: Array<{
    id: number
    Title: string
    Description: string
    Image?: {
      id: number
      documentId: string
      name: string
      alternativeText?: string
      caption?: string
      width: number
      height: number
      formats: any
      hash: string
      ext: string
      mime: string
      size: number
      url: string
      previewUrl?: string
      provider: string
      provider_metadata?: any
      createdAt: string
      updatedAt: string
      publishedAt: string
    }
    Link?: string
    Category?: string
    Tags?: Array<string>
    [key: string]: any // 允许其他可能的字段
  }>
  createdAt: string
  updatedAt: string
  publishedAt: string
}

// 验证行业频道数据
function validateIndustryChannelData(data: any): data is IndustryChannel {
  return (
    data &&
    typeof data.id === 'number' &&
    typeof data.documentId === 'string' &&
    typeof data.channelName === 'string' &&
    Array.isArray(data.channelDescription) &&
    typeof data.industryIntroductionTitle === 'string' &&
    Array.isArray(data.industryIntroductionContent) &&
    typeof data.ResourcesandCapabilitiesTitle === 'string' &&
    data.channelBanner &&
    Array.isArray(data.ResourcesandCapabilitiesComponents) &&
    Array.isArray(data.SuccessfulCasesComponents) &&
    typeof data.createdAt === 'string' &&
    typeof data.updatedAt === 'string' &&
    typeof data.publishedAt === 'string'
  )
}

// 行业频道相关API
export const industriesChannelsApi = {
  // 获取行业频道列表
  async getIndustriesChannels(params: {
    page?: number
    pageSize?: number
    sort?: string
    filters?: Record<string, any>
  } = {}): Promise<StrapiResponse<IndustryChannel[]>> {
    const searchParams = new URLSearchParams()
    
    if (params.page) {
      searchParams.set('pagination[page]', params.page.toString())
    }
    
    if (params.pageSize) {
      searchParams.set('pagination[pageSize]', params.pageSize.toString())
    }
    
    if (params.sort) {
      searchParams.set('sort', params.sort)
    }
    
    if (params.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        searchParams.set(`filters[${key}]`, value)
      })
    }
    
    const response = await strapiRequest<IndustryChannel[]>(`/api/industries-channels?${searchParams.toString()}&populate=*`)
    
    // 验证数据
    if (response.data && Array.isArray(response.data)) {
      response.data = response.data.filter(validateIndustryChannelData)
    }
    
    return response
  },

  // 根据ID获取行业频道详情
  async getIndustryChannelById(id: number): Promise<StrapiResponse<IndustryChannel>> {
    return strapiRequest<IndustryChannel>(`/api/industries-channels/${id}?populate=*`)
  },

  // 根据documentId获取行业频道详情
  async getIndustryChannelByDocumentId(documentId: string): Promise<StrapiResponse<IndustryChannel[]>> {
    return strapiRequest<IndustryChannel[]>(`/api/industries-channels?filters[documentId][$eq]=${documentId}&populate=*`)
  },

  // 根据标题获取行业频道详情
  async getIndustryChannelByTitle(title: string): Promise<StrapiResponse<IndustryChannel[]>> {
    return strapiRequest<IndustryChannel[]>(`/api/industries-channels?filters[channelName][$eq]=${encodeURIComponent(title)}&populate=*`)
  }
}
