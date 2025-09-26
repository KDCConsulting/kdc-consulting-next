'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { insightsApi, type Insight } from '@/lib/api'

export function DataCenterInsights() {
  const [mainInsights, setMainInsights] = useState<Insight[]>([])
  const [smallInsights, setSmallInsights] = useState<Insight[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true)
        const response = await insightsApi.getInsights({
          pageSize: 5,
          sort: 'SortOrder:asc,createdAt:desc'
        })
        
        const insights = response.data || []
        // 前2个作为主要洞察
        setMainInsights(insights.slice(0, 2))
        // 后3个作为小型洞察
        setSmallInsights(insights.slice(2, 5))
      } catch (err) {
        console.error('获取洞察数据失败:', err)
        // 使用静态数据作为备选
        setMainInsights([
          {
            id: 1,
            documentId: 'fallback-1',
            title: '《中国数据中心可持续发展白皮书》',
            Subtitle: '"双碳"目标下，从产业内外部入手，把握可持续发展关键路径',
            Author: '本站',
            industrys: '人工智能',
            Source: '本站',
            SortOrder: 1,
            Reprint: null,
            Description: '"双碳"目标下，从产业内外部入手，把握可持续发展关键路径',
            Content: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
            Attachments: null,
            BannerImage: null,
            MobileCover: null,
            PcCover: null
          },
          {
            id: 2,
            documentId: 'fallback-2',
            title: '《2022-2023年中国IDC行业发展研究报告》',
            Subtitle: '2022年，中国IDC业务市场规模达到1368亿元，同比增长13.8%',
            Author: '本站',
            industrys: '人工智能',
            Source: '本站',
            SortOrder: 2,
            Reprint: null,
            Description: '2022年，中国IDC业务市场规模达到1368亿元，同比增长13.8%。数据中心产业由快速发展阶段进入集约高效、绿色低碳、安全',
            Content: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
            Attachments: null,
            BannerImage: null,
            MobileCover: null,
            PcCover: null
          }
        ])
        setSmallInsights([
          {
            id: 3,
            documentId: 'fallback-3',
            title: '数据中心市场：现状、未来趋势及投资机会',
            Subtitle: '深度分析数据中心市场发展现状',
            Author: '本站',
            industrys: '人工智能',
            Source: '本站',
            SortOrder: 3,
            Reprint: null,
            Description: '数据中心市场：现状、未来趋势及投资机会',
            Content: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
            Attachments: null,
            BannerImage: null,
            MobileCover: null,
            PcCover: null
          },
          {
            id: 4,
            documentId: 'fallback-4',
            title: '2023年中国数据中心市场十大发展趋势',
            Subtitle: '展望2023年数据中心市场发展趋势',
            Author: '本站',
            industrys: '新能源',
            Source: '本站',
            SortOrder: 4,
            Reprint: null,
            Description: '2023年中国数据中心市场十大发展趋势',
            Content: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
            Attachments: null,
            BannerImage: null,
            MobileCover: null,
            PcCover: null
          },
          {
            id: 5,
            documentId: 'fallback-5',
            title: '数据中心投融资路径研究',
            Subtitle: '探索数据中心投融资新模式',
            Author: '本站',
            industrys: '人工智能',
            Source: '本站',
            SortOrder: 5,
            Reprint: null,
            Description: '数据中心投融资路径研究',
            Content: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
            Attachments: null,
            BannerImage: null,
            MobileCover: null,
            PcCover: null
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchInsights()
  }, [])

  // 获取图片URL的辅助函数
  const getImageUrl = (insight: Insight): string => {
    if (insight.PcCover?.formats?.medium?.url) {
      return insight.PcCover.formats.medium.url
    }
    if (insight.PcCover?.formats?.small?.url) {
      return insight.PcCover.formats.small.url
    }
    if (insight.PcCover?.url) {
      return insight.PcCover.url
    }
    // 默认图片
    return '/images/hangye1.png'
  }

  // 获取描述文本的辅助函数
  const getDescription = (insight: Insight): string => {
    if (insight.Description) {
      return insight.Description
    }
    if (insight.Subtitle) {
      return insight.Subtitle
    }
    return '暂无描述'
  }

  if (loading) {
    return (
      <div className="cmp-cmp-container responsivegrid full-width-constraint">
        <div className="cmp-container kzsj" style={{ backgroundColor: 'rgb(242,242,242)' }}>
          <div className="fourcellblock ui-vs-top--lg ui-vs-bottom--bs">
            <div className="cmp-fourcellblock">
              <div className="loading">加载中...</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cmp-cmp-container responsivegrid full-width-constraint">
      <div className="cmp-container kzsj" style={{ backgroundColor: 'rgb(242,242,242)' }}>
        <div className="fourcellblock ui-vs-top--lg ui-vs-bottom--bs">
          <div className="cmp-fourcellblock">
            <div className="cmp-four-cell">
              {/* 标题行 */}
              <div className="cmp-four-cell__first-row cmp-four-cell__first-row--2-1 cmp-four-cell__first-row--cta-row">
                <div className="cmp-four-cell__first-col">
                  <div className="cmp-container responsivegrid">
                    <div className="cmp-container">
                      <div className="title cmp-title--section ui-vs-bottom--md">
                        <div className="cmp-title">
                          <h1 className="cmp-title__text">洞察与观点</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cmp-four-cell__second-col cmp-four-cell__cta-btn">
                  <div className="button cmp-button--text-link cmp-button__cta-arrow--right ui-vs-bottom--md">
                  </div>
                </div>
              </div>

              {/* 主要内容行 */}
              <div className="cmp-four-cell__second-row cmp-four-cell__second-row--2-1-inline">
                <div className="cmp-four-cell__first-col">
                  <div className="cmp-container responsivegrid">
                    <div className="cmp-container">
                      {/* 主要洞察卡片 */}
                      {mainInsights.map((insight) => (
                        <div key={insight.id} className="teaser dcc dcc-image-tag-title-summary card has-ellipsis ui-vs-bottom--md">
                          <div className="cmp-teaser">
                            <div className="cmp-teaser__image">
                              <div className="cmp-image">
                                <Link className="cmp-image__link" href={`/insights/${insight.documentId}`}>
                                  <Image 
                                    className="cmp-image__image" 
                                    src={getImageUrl(insight)}
                                    alt={insight.title}
                                    width={400}
                                    height={250}
                                    style={{ width: '100%', height: 'auto' }}
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="cmp-teaser__content">
                              <div className="cmp-teaser__pretitle">
                                <Link className="cmp-teaser__pretitle-link" href={`/insights/${insight.documentId}`}>
                                  {insight.industrys || '洞察'}
                                </Link>
                              </div>
                              <h3 className="cmp-teaser__title">
                                <Link className="cmp-teaser__title-link" href={`/insights/${insight.documentId}`}>
                                  {insight.title}
                                </Link>
                              </h3>
                              <div className="cmp-teaser__description" style={{ WebkitLineClamp: 1, paddingLeft: 0 }}>
                                <p>{getDescription(insight)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="cmp-four-cell__second-col">
                  <div className="cmp-container responsivegrid">
                    <div className="cmp-container">
                      {/* 小型洞察卡片 */}
                      {smallInsights.map((insight) => (
                        <div key={insight.id} className="teaser dcc dcc-tag-title-small card dcc-tag-title-small--divider ui-vs-bottom--md">
                          <div className="cmp-teaser">
                            <div className="cmp-teaser__content">
                              <div className="cmp-teaser__pretitle">
                                <Link className="cmp-teaser__pretitle-link" href={`/insights/${insight.documentId}`}>
                                  {insight.industrys || '洞察'}
                                </Link>
                              </div>
                              <h3 className="cmp-teaser__title">
                                <Link className="cmp-teaser__title-link" href={`/insights/${insight.documentId}`}>
                                  {insight.title}
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 移动端CTA行 */}
              <div className="cmp-four-cell__second-row cmp-four-cell__second-row--cta-mobile-row">
                <div className="cmp-four-cell__first-col cmp-four-cell__cta-btn">
                  <div className="button cmp-button--text-link cmp-button__cta-arrow--right ui-vs-bottom--md">
                  </div>
                </div>
                <div className="cmp-four-cell__second-col"></div>
              </div>

              {/* 全宽行 */}
              <div className="cmp-four-cell__third-row cmp-four-cell__fullwidth">
                <div className="cmp-four-cell__first-col">
                  <div className="cmp-container responsivegrid">
                    <div className="cmp-container">
                    </div>
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
