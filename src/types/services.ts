// 服务接口数据类型定义
export interface ServiceImage {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
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
  provider_metadata: Record<string, unknown> | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface ServiceContentComponent {
  id: number
  Title: string
  Description: string
}

export interface ServiceValuePropositionComponent {
  id: number
  Title: string
  Description: string
}

export interface ServiceIntroductionContent {
  type: string
  children: Array<{
    text: string
    type: string
  }>
}

export interface StrategicAdvisory {
  id: number
  documentId: string
  channelName: string
  ServiceIntroductionTitle: string
  ServiceIntroductionContent: ServiceIntroductionContent[]
  ServiceContentTitle: string
  ServiceContentBriefIntroduction: string
  ServiceValuePropositionTitle: string
  ServiceValuePropositionBriefIntroduction: string | null
  createdAt: string
  updatedAt: string
  publishedAt: string
  channelDescription: string | null
  channelBanner: ServiceImage
  ServiceIntroductionImage: ServiceImage
  ServiceContentComponents: ServiceContentComponent[]
  ServiceValuePropositionComponents: ServiceValuePropositionComponent[]
}

export interface ServicesApiResponse {
  data: StrategicAdvisory[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

// 服务类型枚举
export enum ServiceType {
  STRATEGIC = 'strategic-advisories',
  MARKET = 'market-intelligence',
  INDUSTRY = 'industry-analysis',
  INVESTMENT = 'investment-consulting'
}

// 服务类型映射
export const SERVICE_TYPE_MAP = {
  'StrategicAdvisory': ServiceType.STRATEGIC,
  'MarketIntelligence': ServiceType.MARKET,
  'IndustryAnalysis': ServiceType.INDUSTRY,
  'InvestmentConsulting': ServiceType.INVESTMENT
} as const

export type ServicePageType = keyof typeof SERVICE_TYPE_MAP
