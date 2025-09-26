'use client'

import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { newsApi, type News } from '@/lib/api'

interface NewsListProps {
  onFirstNewsChange?: (firstNews: News | null) => void
}

export function NewsList({ onFirstNewsChange }: NewsListProps) {
  const [newsData, setNewsData] = useState<News[]>([])
  const [loading, setLoading] = useState(true)

  const handleFirstNewsChange = useCallback((firstNews: News | null) => {
    onFirstNewsChange?.(firstNews)
  }, [onFirstNewsChange])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const response = await newsApi.getNews({
          pageSize: 10,
          sort: 'createdAt:desc'
        })
        const data = response.data || []
        // 从第二条数据开始显示（跳过第一条）
        const remainingData = data.length > 1 ? data.slice(1) : []
        setNewsData(remainingData)
        // 通知父组件第一条数据
        handleFirstNewsChange(data.length > 0 ? data[0] : null)
      } catch (err) {
        console.error('获取新闻数据失败:', err)
        // 使用静态数据作为备选
        const fallbackData = [
          {
            id: 1,
            documentId: 'fallback-1',
            title: '科智咨询受邀出席首届酒仙桥论坛 深度解读智算中心产业趋势',
            Subtitle: '科智咨询受邀出席首届酒仙桥论坛 深度解读智算中心产业趋势',
            Author: '本站',
            industrys: null,
            Source: '本站',
            SortOrder: undefined,
            Reprint: null,
            Description: null,
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
              alternativeText: '科智咨询受邀出席首届酒仙桥论坛',
              caption: '科智咨询受邀出席首届酒仙桥论坛',
              width: 400,
              height: 250,
              formats: {
                medium: {
                  ext: '.jpg',
                  url: 'https://www.kzconsulting.cn/resource/image/20250427/1101080721394499584.jpg',
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
                  url: 'https://www.kzconsulting.cn/resource/image/20250427/1101080721394499584.jpg',
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
              url: 'https://www.kzconsulting.cn/resource/image/20250427/1101080721394499584.jpg',
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
        setNewsData(remainingFallbackData)
        // 通知父组件第一条数据
        handleFirstNewsChange(fallbackData[0])
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [handleFirstNewsChange])

  // 获取图片URL的辅助函数
  const getImageUrl = (news: News): string => {
    if (news.PcCover?.formats?.large?.url) {
      return news.PcCover.formats.large.url
    }
    if (news.PcCover?.formats?.medium?.url) {
      return news.PcCover.formats.medium.url
    }
    if (news.PcCover?.formats?.small?.url) {
      return news.PcCover.formats.small.url
    }
    if (news.PcCover?.url) {
      return news.PcCover.url
    }
    // 默认图片
    return 'https://www.kzconsulting.cn/resource/image/20250427/1101080721394499584.jpg'
  }

  // 获取描述文本的辅助函数
  const getDescription = (news: News): string => {
    if (news.Description) {
      return news.Description
    }
    if (news.Subtitle) {
      return news.Subtitle
    }
    // 从Content中提取文本
    if (news.Content && Array.isArray(news.Content)) {
      const firstParagraph = news.Content.find((item: { type: string; children?: Array<{ text?: string }> }) => 
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
      <div className="root container responsivegrid">
        <div className="cmp-container">
          <div className="cmp-container">
            <div className="container responsivegrid full-width-constraint">
              <div className="cmp-container">
                <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
                  <div className="cmp-card-listing cmp-card-listing--cta-2-to-1">
                    <div className="cmp-card-listing_second-row">
                      <div className="container responsivegrid" id="newsListBox">
                        <div className="cmp-container newsList" style={{marginTop: '30px'}}>
                          <div className="loading">加载中...</div>
                        </div>
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


  const handleShowMore = () => {
    const newsListBox = document.getElementById('newsListBox')
    const newsList = document.querySelector('.newsList')
    
    if (newsListBox && newsList) {
      const height = newsListBox.offsetHeight
      const newsHeight = newsList.scrollHeight
      const count = newsHeight - height
      
      if (height >= newsHeight) {
        return
      } else if (count < 1104) {
        newsListBox.style.height = (newsHeight + 5) + 'px'
      } else {
        newsListBox.style.height = (height + 1104) + 'px'
      }
    }
  }

  return (
    <div className="root container responsivegrid">
							<div className="cmp-container">
										<div className="cmp-container">
											<div className="container responsivegrid full-width-constraint">
												<div className="cmp-container">
													<div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
                <div className="cmp-card-listing cmp-card-listing--cta-2-to-1">
															<div className="cmp-card-listing_second-row">
																<div className="container responsivegrid" id="newsListBox">
                      <div className="cmp-container newsList" style={{marginTop: '30px'}}>
                        {newsData.map((news) => (
                          <div key={news.id} className="teaser dcc dcc-imagefoldtag card has-ellipsis has-tooltip">
                            <div className="cmp-teaser">
                              <div className="cmp-teaser__image">
                                <div className="cmp-image" itemScope={true}>
                                  <Link className="cmp-image__link" href={`/news/${news.documentId}`} style={{width: '100%', height: '100%'}}> 
                                    <Image 
                                      src={getImageUrl(news)} 
                                      alt={news.title} 
                                      width={400} 
                                      height={250} 
                                      style={{width: '100%', height: '100%'}} 
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="cmp-teaser__content">
                                <h3 className="cmp-teaser__title">
                                  <Link className="cmp-teaser__title-link" href={`/news/${news.documentId}`}>
                                    {news.title}
                                  </Link>
                                </h3>
                                <div className="cmp-teaser__description">
                                  <p>
                                    <span className="cmp-text__paragraph-default">
                                      {getDescription(news)}
                                    </span>
                                  </p>
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
                    <Link className="" href="/news">
                      <span className="cmp-button__text">解锁更多新闻文章</span>
                    </Link>
																				</div>
																			</div>
																					</div>
																				</div>
																			</div>
          <div className="showMore">
            <button onClick={handleShowMore}>展开</button>
																				</div>
																			</div>
										</div>
		</div>
  )
}