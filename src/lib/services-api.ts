import { ServiceType, ServicesApiResponse, StrategicAdvisory } from '@/types/services'

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://energized-dawn-75ac41de31.strapiapp.com'
const BEARER_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || 'eb4477ce3f84462840281742ee5af41b9f30d671b7b8e13140eb3ae24eddef6f91f40612434fa6e9009fb476f5cb642725f5caa7e9ca364444a5c2c114a6c9ff853b9d3a5c6a5734021a1b350141610b9df36aff704bba0d1fb8e724ccaf3ac2addc95e2a0c4cb7db4be2f0690cb72eb186c812984cb239c2c968c03007fef9f'

/**
 * 获取服务数据
 * @param serviceType 服务类型
 * @returns 服务数据
 */
export async function getServicesData(serviceType: ServiceType): Promise<StrategicAdvisory[]> {
  try {
    const apiUrl = `${BASE_URL}/api/${serviceType}?populate=*`
    console.log(`Fetching data from: ${apiUrl}`)
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEARER_TOKEN}`,
      },
      // 静态导出模式下使用缓存
      cache: 'force-cache'
    })

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`)
      throw new Error(`Failed to fetch ${serviceType} data: ${response.status}`)
    }

    const data: ServicesApiResponse = await response.json()
    console.log(`Successfully fetched ${data.data.length} items for ${serviceType}`)
    return data.data
  } catch (error) {
    console.error(`Error fetching ${serviceType} data:`, error)
    console.log('Falling back to mock data...')
    // 返回模拟数据作为fallback
    return mockServicesData[serviceType] || []
  }
}

/**
 * 获取特定服务数据（按channelName过滤）
 * @param serviceType 服务类型
 * @param channelName 频道名称
 * @returns 特定服务数据
 */
export async function getServiceByChannel(
  serviceType: ServiceType, 
  channelName: string
): Promise<StrategicAdvisory | null> {
  try {
    const services = await getServicesData(serviceType)
    return services.find(service => service.channelName === channelName) || null
  } catch (error) {
    console.error(`Error fetching service by channel ${channelName}:`, error)
    return null
  }
}

/**
 * 获取特定服务数据（按documentId过滤）
 * @param serviceType 服务类型
 * @param documentId 文档ID
 * @returns 特定服务数据
 */
export async function getServiceByDocumentId(
  serviceType: ServiceType, 
  documentId: string
): Promise<StrategicAdvisory | null> {
  try {
    const services = await getServicesData(serviceType)
    return services.find(service => service.documentId === documentId) || null
  } catch (error) {
    console.error(`Error fetching service by documentId ${documentId}:`, error)
    return null
  }
}

/**
 * 获取所有服务数据（用于首页展示等）
 * @returns 所有服务数据
 */
export async function getAllServicesData(): Promise<{
  strategic: StrategicAdvisory[]
  market: StrategicAdvisory[]
  industry: StrategicAdvisory[]
  investment: StrategicAdvisory[]
}> {
  try {
    const [strategic, market, industry, investment] = await Promise.all([
      getServicesData(ServiceType.STRATEGIC),
      getServicesData(ServiceType.MARKET),
      getServicesData(ServiceType.INDUSTRY),
      getServicesData(ServiceType.INVESTMENT)
    ])

    return {
      strategic,
      market,
      industry,
      investment
    }
  } catch (error) {
    console.error('Error fetching all services data:', error)
    return {
      strategic: [],
      market: [],
      industry: [],
      investment: []
    }
  }
}

/**
 * 模拟数据 - 当API不可用时使用
 */
export const mockServicesData: Record<ServiceType, StrategicAdvisory[]> = {
  [ServiceType.STRATEGIC]: [
    {
      id: 1,
      documentId: "mock-strategic-1",
      channelName: "战略规划",
      ServiceIntroductionTitle: "智驭变革，策动未来",
      ServiceIntroductionContent: [
        {
          type: "paragraph",
          children: [
            {
              text: "战略规划是组织或企业为实现其长期目标而制定的长远计划和行动方案，在企业发展中扮演着至关重要的角色。",
              type: "text"
            }
          ]
        }
      ],
      ServiceContentTitle: "服务内容",
      ServiceContentBriefIntroduction: "依托深度的环境分析、行业洞察与企业理解，我们帮助企业在剧烈变动的社会经济环境中制定最优发展战略。",
      ServiceValuePropositionTitle: "科智咨询的独到支持",
      ServiceValuePropositionBriefIntroduction: null,
      createdAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-01T00:00:00.000Z",
      publishedAt: "2025-01-01T00:00:00.000Z",
      channelDescription: null,
      channelBanner: {
        id: 1,
        documentId: "mock-banner-1",
        name: "strategic-banner.png",
        alternativeText: null,
        caption: null,
        width: 1920,
        height: 350,
        formats: {},
        hash: "mock-hash",
        ext: ".png",
        mime: "image/png",
        size: 100,
        url: "/images/strategic-banner.png",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z",
        publishedAt: "2025-01-01T00:00:00.000Z"
      },
      ServiceIntroductionImage: {
        id: 2,
        documentId: "mock-intro-1",
        name: "strategic-intro.jpg",
        alternativeText: null,
        caption: null,
        width: 4800,
        height: 2700,
        formats: {},
        hash: "mock-hash-2",
        ext: ".jpg",
        mime: "image/jpeg",
        size: 200,
        url: "/images/strategic-intro.jpg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z",
        publishedAt: "2025-01-01T00:00:00.000Z"
      },
      ServiceContentComponents: [
        {
          id: 1,
          Title: "宏观环境分析",
          Description: "对企业所处的宏观环境进行全面分析，帮助把握外部环境的机遇与威胁。"
        },
        {
          id: 2,
          Title: "行业环境与竞争格局分析",
          Description: "深入分析行业趋势、市场结构、竞争对手情况，明确企业的市场定位和发展空间。"
        }
      ],
      ServiceValuePropositionComponents: [
        {
          id: 1,
          Title: "灵活应变与持续支持",
          Description: "科智始终保持与企业的紧密联系，随时准备根据最新情况调整规划，并提供持续性支持和指导。"
        }
      ]
    }
  ],
  [ServiceType.MARKET]: [],
  [ServiceType.INDUSTRY]: [],
  [ServiceType.INVESTMENT]: []
}
