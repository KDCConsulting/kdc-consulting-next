'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { InsightsBanner } from "@/components/sections/InsightsBanner"
import { InsightsList } from "@/components/sections/InsightsList"
import { ReportsList } from "@/components/sections/ReportsList"
import { type Insight } from '@/lib/api'
import "@/styles/kzgc.css"

export default function InsightsPage() {
  const [firstInsight, setFirstInsight] = useState<Insight | null>(null)

  // 获取图片URL的辅助函数
  const getImageUrl = (insight: Insight | null): string => {
    if (!insight) {
      return 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg'
    }
    if (insight.PcCover?.formats?.medium?.url) {
      return insight.PcCover.formats.medium.url
    }
    if (insight.PcCover?.formats?.small?.url) {
      return insight.PcCover.formats.small.url
    }
    if (insight.PcCover?.url) {
      return insight.PcCover.url
    }
    return 'https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg'
  }

  // 获取描述文本的辅助函数
  const getDescription = (insight: Insight | null): string => {
    if (!insight) {
      return '当前，数字化转型已成为企业发展的核心战略，从早期探索逐步迈向数智驱动、全面深耕新阶段。企业通过数据驱动实现生产、运营、管理等各个环节的智能化，其中银行业始终处在科技变革的前沿引领行业发展。'
    }
    if (insight.Description) {
      return insight.Description
    }
    if (insight.Subtitle) {
      return insight.Subtitle
    }
    return '当前，数字化转型已成为企业发展的核心战略，从早期探索逐步迈向数智驱动、全面深耕新阶段。企业通过数据驱动实现生产、运营、管理等各个环节的智能化，其中银行业始终处在科技变革的前沿引领行业发展。'
  }

  return (
    <div >
      {/* 科智洞察Banner - 全宽 */}
      <InsightsBanner />

      {/* 主要内容区域 - 全宽 */}
      <div className="container responsivegrid full-width" style={{backgroundColor: '#f6f6f6',maxWidth:'1200px',margin:'0 auto'}} id="container-first">


<div className="root container responsivegrid mainInsights">

  <div  className="cmp-container">

    <div className="teaser dcc dcc-imagefoldtag card has-ellipsis has-tooltip">
      <div className="cmp-teaser firstBanner">


        <div className="cmp-teaser__image">
          <div className="cmp-image " itemScope={true}>
            <Link className="cmp-image__link" href={firstInsight ? `/insights/${firstInsight.documentId}` : "/insights/1145658887655915520.html"}>
                  <Image 
                    src={firstInsight ? getImageUrl(firstInsight) : "https://www.kzconsulting.cn/resource/image/20250828/1145660375115497472.jpg"} 
                    alt={firstInsight?.title || ""} 
                    width={400}
                    height={250}
                    style={{ width: '100%', height: 'auto' }}
                  />
            </Link>



          </div>


        </div>


        <div className="cmp-teaser__content">

          <div className="cmp-teaser__pretitle">
            <a className="cmp-teaser__pretitle-link" href="javascript:;" style={{cursor: 'auto'}}>
              {firstInsight?.industrys || '行业数智化'}
            </a>

          </div>




          <h3 className="cmp-teaser__title" style={{WebkitLineClamp: 1}}>

            <Link className="cmp-teaser__title-link" href={firstInsight ? `/insights/${firstInsight.documentId}` : "/insights/1145658887655915520.html"} title={firstInsight?.title || "2025年银行业数字化转型市场洞察"}>
              {firstInsight?.title || "2025年银行业数字化转型市场洞察"}
              
            </Link>
          </h3>


          <div className="cmp-teaser__description">
            <p><span className="cmp-text__paragraph-default">{getDescription(firstInsight)}</span>
            </p>
          </div>


          <div className="cmp-teaser__action-container">

            <Link className="cmp-teaser__action-link" href={firstInsight ? `/insights/${firstInsight.documentId}` : "/insights/1145658887655915520.html"}>了解更多</Link>

          </div>

        </div>
      </div>


    </div>

  </div>
</div>


</div>
<div className="container responsivegrid full-width" style={{backgroundColor: '#f6f6f6',maxWidth:'1200px',margin:'0 auto'}}>
  <div className="cmp-container">
    <main className="container responsivegrid">
      {/* 洞察文章列表 - 全宽 */}
  <InsightsList onFirstInsightChange={setFirstInsight} />

{/* 最新报告列表 - 全宽 */}
<ReportsList />
    </main>
  </div>
  
</div>
    
    </div>
  )
}

