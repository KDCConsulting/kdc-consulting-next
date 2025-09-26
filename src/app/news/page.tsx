'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NewsBanner } from "@/components/sections/NewsBanner"
import { NewsList } from "@/components/sections/NewsList"
import { RecommendedReading } from "@/components/sections/RecommendedReading"
import { type News } from '@/lib/api'
import "@/styles/kzgc.css"
import "@/styles/news.css"


export default function NewsPage() {
  const [firstNews, setFirstNews] = useState<News | null>(null)

  // 获取图片URL的辅助函数
  const getImageUrl = (news: News | null): string => {
    if (!news) {
      return 'https://www.kzconsulting.cn/resource/image/20250427/1101080721394499584.jpg'
    }
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
    return 'https://www.kzconsulting.cn/resource/image/20250427/1101080721394499584.jpg'
  }

  // 获取描述文本的辅助函数
  const getDescription = (news: News | null): string => {
    if (!news) {
      return '科智咨询受邀出席首届酒仙桥论坛 深度解读智算中心产业趋势'
    }
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
    return '科智咨询受邀出席首届酒仙桥论坛 深度解读智算中心产业趋势'
  }

  return (
    <div>
      {/* 新闻页面Banner - 全宽 */}
      <NewsBanner />

      {/* 新闻列表 - 版心限制 */}
      <div className="container responsivegrid" style={{ backgroundColor: "#f3f3f3", padding: "60px 0" , margin:'0 auto'}}>
        <div className="w">
          <div id="container-first" className="cmp-container">
            <div className="teaser dcc dcc-imagefoldtag card has-ellipsis has-tooltip">
              <div className="cmp-teaser firstBanner">
                <div className="cmp-teaser__image">
                  <div className="cmp-image">
                    <Link className="cmp-image__link" href={firstNews ? `/news/${firstNews.documentId}` : '/newsKzzx/1101080727170056192.html'}>
                      <Image 
                        src={getImageUrl(firstNews)} 
                        alt={firstNews?.title || '科智咨询受邀出席首届酒仙桥论坛'} 
                        width={400} 
                        height={250} 
                        style={{width: '100%', height: '100%'}} 
                      />
                    </Link>
                  </div>
                </div>
                <div className="cmp-teaser__content">
                  <div className="cmp-teaser__pretitle">
                  </div>
                  <h3 className="cmp-teaser__title">
                    <Link className="cmp-teaser__title-link" href={firstNews ? `/news/${firstNews.documentId}` : '/newsKzzx/1101080727170056192.html'}>
                      {firstNews?.title || '科智咨询受邀出席首届酒仙桥论坛 深度解读智算中心产业趋势'}
                    </Link>
                  </h3>
                  <div className="cmp-teaser__description">
                    <p>
                      <span className="cmp-text__paragraph-default">
                        {getDescription(firstNews)}
                      </span>
                    </p>
                  </div>
                  <div className="cmp-teaser__action-container">
                    <Link className="cmp-teaser__action-link" href={firstNews ? `/news/${firstNews.documentId}` : '/newsKzzx/1101080727170056192.html'}>
                      了解更多
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewsList onFirstNewsChange={setFirstNews} />
      </div>

      {/* 推荐阅读 - 全宽 */}
      <RecommendedReading />
    </div>
  )
}
