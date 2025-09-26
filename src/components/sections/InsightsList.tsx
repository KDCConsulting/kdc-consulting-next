'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { insightsApi, type Insight } from '@/lib/api'

interface InsightsListProps {
  onFirstInsightChange?: (firstInsight: Insight | null) => void
}

export function InsightsList({ onFirstInsightChange }: InsightsListProps) {
  const [insightsData, setInsightsData] = useState<Insight[]>([])
  const [loading, setLoading] = useState(true)

  const handleFirstInsightChange = useCallback((firstInsight: Insight | null) => {
    onFirstInsightChange?.(firstInsight)
  }, [onFirstInsightChange])

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true)
        const response = await insightsApi.getInsights({
          pageSize: 7, // 增加获取数量，因为第一条会被移到主要内容区域
          sort: 'SortOrder:asc,createdAt:desc'
        })
        const data = response.data || []
        // 从第二条数据开始显示（跳过第一条）
        const remainingData = data.length > 1 ? data.slice(1) : []
        setInsightsData(remainingData)
        // 通知父组件第一条数据
        handleFirstInsightChange(data.length > 0 ? data[0] : null)
      } catch (err) {
        console.error('获取洞察数据失败:', err)
        // 使用静态数据作为备选
        const fallbackData = [
          {
            id: 1,
            documentId: 'fallback-1',
      title: '数据中心REITs时代来临：算力资产开启市场化运作新篇章',
            Subtitle: '科智咨询助力国内首批数据中心REITs成功上市——REITs正成为算力时代的资本新引擎',
            Author: '本站',
            industrys: '数据中心',
            Source: '本站',
            SortOrder: 1,
            Reprint: null,
            Description: '8月8日，南方万国数据中心REIT和南方润泽科技数据中心REIT同步在沪深交易所上市，标志着公募REITs资产正式迈入新型基础设施领域，揭开了算力时代资本化运作的新篇章。',
            Content: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
            Attachments: null,
            BannerImage: null,
            MobileCover: null,
            PcCover: {
              id: 1,
              documentId: 'cover-1',
              name: 'fallback-cover-1',
              alternativeText: '数据中心REITs时代来临',
              caption: '数据中心REITs时代来临',
              width: 400,
              height: 250,
              formats: {
                medium: {
                  ext: '.jpg',
                  url: 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg',
                  hash: 'medium_fallback_1',
                  mime: 'image/jpeg',
                  name: 'medium_fallback-1',
                  path: null,
                  size: 50.0,
                  width: 750,
                  height: 500,
                  sizeInBytes: 50000
                },
                small: {
                  ext: '.jpg',
                  url: 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg',
                  hash: 'small_fallback_1',
                  mime: 'image/jpeg',
                  name: 'small_fallback-1',
                  path: null,
                  size: 25.0,
                  width: 500,
                  height: 333,
                  sizeInBytes: 25000
                }
              },
              hash: 'fallback_1',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 100.0,
              url: 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg',
              previewUrl: null,
              provider: 'strapi-provider-upload-strapi-cloud',
              provider_metadata: null,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              publishedAt: new Date().toISOString()
            }
          },
          {
            id: 2,
            documentId: 'fallback-2',
      title: '中国智能算力租赁市场全景解读：现状、竞争格局与未来发展',
            Subtitle: '在全球数字经济加速向"AI+算力"驱动转型的背景下，智能算力租赁已从技术概念演进为支撑产业升级的核心生产要素。',
            Author: '本站',
            industrys: '算力服务',
            Source: '本站',
            SortOrder: 2,
            Reprint: null,
            Description: '在全球数字经济加速向"AI+算力"驱动转型的背景下，智能算力租赁已从技术概念演进为支撑产业升级的核心生产要素。',
            Content: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
            Attachments: null,
            BannerImage: null,
            MobileCover: null,
            PcCover: {
              id: 2,
              documentId: 'cover-2',
              name: 'fallback-cover-2',
              alternativeText: '中国智能算力租赁市场全景解读',
              caption: '中国智能算力租赁市场全景解读',
              width: 400,
              height: 250,
              formats: {
                medium: {
                  ext: '.jpg',
                  url: 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg',
                  hash: 'medium_fallback_2',
                  mime: 'image/jpeg',
                  name: 'medium_fallback-2',
                  path: null,
                  size: 50.0,
                  width: 750,
                  height: 500,
                  sizeInBytes: 50000
                },
                small: {
                  ext: '.jpg',
                  url: 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg',
                  hash: 'small_fallback_2',
                  mime: 'image/jpeg',
                  name: 'small_fallback-2',
                  path: null,
                  size: 25.0,
                  width: 500,
                  height: 333,
                  sizeInBytes: 25000
                }
              },
              hash: 'fallback_2',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 100.0,
              url: 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg',
              previewUrl: null,
              provider: 'strapi-provider-upload-strapi-cloud',
              provider_metadata: null,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              publishedAt: new Date().toISOString()
            }
          },
          {
            id: 3,
            documentId: 'fallback-3',
      title: '2024年全球数据中心市场洞察：AI驱动下的规模跃升与格局演化',
            Subtitle: '2024年，全球数据中心市场在生成式AI爆发、云计算加速渗透以及数字化战略落地的多重驱动下，迎来新一轮跃升。',
            Author: '本站',
            industrys: '数据中心',
            Source: '本站',
            SortOrder: 3,
            Reprint: null,
            Description: '2024年，全球数据中心市场在生成式AI爆发、云计算加速渗透以及数字化战略落地的多重驱动下，迎来新一轮跃升，市场规模首次突破千亿美元大关，达1086.2亿美元，同比增长14.9%。',
            Content: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
            Attachments: null,
            BannerImage: null,
            MobileCover: null,
            PcCover: {
              id: 3,
              documentId: 'cover-3',
              name: 'fallback-cover-3',
              alternativeText: '2024年全球数据中心市场洞察',
              caption: '2024年全球数据中心市场洞察',
              width: 400,
              height: 250,
              formats: {
                medium: {
                  ext: '.jpg',
                  url: 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg',
                  hash: 'medium_fallback_3',
                  mime: 'image/jpeg',
                  name: 'medium_fallback-3',
                  path: null,
                  size: 50.0,
                  width: 750,
                  height: 500,
                  sizeInBytes: 50000
                },
                small: {
                  ext: '.jpg',
                  url: 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg',
                  hash: 'small_fallback_3',
                  mime: 'image/jpeg',
                  name: 'small_fallback-3',
                  path: null,
                  size: 25.0,
                  width: 500,
                  height: 333,
                  sizeInBytes: 25000
                }
              },
              hash: 'fallback_3',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 100.0,
              url: 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg',
              previewUrl: null,
              provider: 'strapi-provider-upload-strapi-cloud',
              provider_metadata: null,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              publishedAt: new Date().toISOString()
            }
          }
        ]
        // 从第二条数据开始显示（跳过第一条）
        const remainingFallbackData = fallbackData.length > 1 ? fallbackData.slice(1) : []
        setInsightsData(remainingFallbackData)
        // 通知父组件第一条数据
        handleFirstInsightChange(fallbackData[0])
      } finally {
        setLoading(false)
      }
    }

    fetchInsights()
  }, [handleFirstInsightChange])

  // 获取图片URL的辅助函数
  const getImageUrl = (insight: Insight): string => {
    // 临时调试信息
    console.log('Insight:', insight.title)
    console.log('PcCover:', insight.PcCover)
    
    if (insight.PcCover?.formats?.large?.url) {
      console.log('Using large format:', insight.PcCover.formats.large.url)
      return insight.PcCover.formats.large.url
    }
    if (insight.PcCover?.formats?.medium?.url) {
      console.log('Using medium format:', insight.PcCover.formats.medium.url)
      return insight.PcCover.formats.medium.url
    }
    if (insight.PcCover?.formats?.small?.url) {
      console.log('Using small format:', insight.PcCover.formats.small.url)
      return insight.PcCover.formats.small.url
    }
    if (insight.PcCover?.url) {
      console.log('Using original URL:', insight.PcCover.url)
      return insight.PcCover.url
    }
    // 默认图片
    console.log('Using default image for:', insight.title)
    return 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg'
  }

  // 获取描述文本的辅助函数
  const getDescription = (insight: Insight): string => {
    if (insight.Description) {
      return insight.Description
    }
    if (insight.Subtitle) {
      return insight.Subtitle
    }
    // 从Content中提取文本
    if (insight.Content && Array.isArray(insight.Content)) {
      const firstParagraph = insight.Content.find((item: { type: string; children?: Array<{ text?: string }> }) => 
        item.type === 'paragraph' && 
        item.children && 
        item.children.some((child: { text?: string }) => child.text && child.text.trim())
      )
      if (firstParagraph) {
        const text = firstParagraph.children
          ?.filter((child: { text?: string }) => child.text)
          ?.map((child: { text?: string }) => child.text)
          ?.join('')
          ?.trim() || ''
        return text.length > 150 ? text.substring(0, 150) + '...' : text
      }
    }
    return '暂无描述'
  }

  if (loading) {
    return (
      <div className="cmp-container">
        <div className="container responsivegrid full-width-constraint">
          <div className="cmp-container">
            <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
              <div className="cmp-card-listing cmp-card-listing--cta-2-to-1">
                <div className="cmp-card-listing_second-row">
                  <div className="container responsivegrid">
                    <div className="cmp-container">
                      <div className="loading">加载中...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cmp-container">
      <div className="container responsivegrid full-width-constraint">
        <div className="cmp-container">
          <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
            <div className="cmp-card-listing cmp-card-listing--cta-2-to-1">
              <div className="cmp-card-listing_second-row">
                <div className="container responsivegrid">
                  <div className="cmp-container">
                    {insightsData.map((insight) => (
                      <div key={insight.id} className="teaser dcc dcc-imagefoldtag card has-ellipsis has-tooltip">
                        <div className="cmp-teaser">
                          <div className="cmp-teaser__image">
                            <div className="cmp-image" itemScope={true}>
                              <Link className="cmp-image__link" href={`/insights/${insight.documentId}`}>
                                <Image 
                                  src={getImageUrl(insight)} 
                                  alt={insight.title} 
                                  width={400}
                                  height={250}
                                  style={{ width: '100%', height: 'auto' }}
                                  onError={(e) => {
                                    console.log('Image load error for:', insight.title, 'URL:', getImageUrl(insight))
                                    // 如果图片加载失败，使用默认图片
                                    e.currentTarget.src = 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg'
                                  }}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="cmp-teaser__content">
                            <div className="cmp-teaser__pretitle">
                              <a className="cmp-teaser__pretitle-link" href="javascript:;" style={{cursor: 'auto'}}>
                                {insight.industrys || '洞察'}
                              </a>
                            </div>
                            <h3 className="cmp-teaser__title">
                              <Link className="cmp-teaser__title-link" href={`/insights/${insight.documentId}`} title={insight.title}>
                                {insight.title}
                              </Link>
                            </h3>
                            <div className="cmp-teaser__description">
                              <p>
                                <span className="cmp-text__paragraph-default">
                                  {getDescription(insight)}
                                </span>
                              </p>
                            </div>
                            <div className="cmp-teaser__action-container">
                              <Link className="cmp-teaser__action-link" href={`/insights/${insight.documentId}`}>
                                了解更多
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="button cmp-card-listing_button cmp-button--text-link cmp-button__cta-arrow--right">
                </div>
              </div>
              <div className="learnMore">
                <Link className="" href="/insights">
                  <span className="cmp-button__text">解锁更多洞察文章</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}