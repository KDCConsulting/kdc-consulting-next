'use client'

import { useState, useEffect } from 'react'
import { reportsApi, type Report } from '@/lib/api'

interface ReportItem {
  id: string
  category: string
  title: string
  description: string
  image: string
  href: string
}

export function ReportsList() {
  const [reportsData, setReportsData] = useState<ReportItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 获取图片URL的辅助函数
  const getImageUrl = (report: Report): string => {
    if (report.PcCover?.formats?.medium?.url) {
      return report.PcCover.formats.medium.url
    }
    if (report.PcCover?.formats?.small?.url) {
      return report.PcCover.formats.small.url
    }
    if (report.PcCover?.url) {
      return report.PcCover.url
    }
    return '/images/indexbaogao1.png' // 默认图片
  }

  // 获取分类的辅助函数
  const getCategory = (report: Report): string => {
    if (report.industrys) {
      return report.industrys
    }
    // 根据标题关键词判断分类
    const title = report.title.toLowerCase()
    if (title.includes('算力中心') || title.includes('算力')) {
      return '算力中心'
    } else if (title.includes('智算中心') || title.includes('智算')) {
      return '智算中心'
    } else if (title.includes('服务器')) {
      return '服务器'
    } else if (title.includes('数据中心')) {
      return '数据中心'
    } else if (title.includes('大模型') || title.includes('ai')) {
      return 'AI大模型'
    } else if (title.includes('光伏')) {
      return '光伏'
    }
    return '研究报告'
  }

  // 获取描述文本的辅助函数
  const getDescription = (report: Report): string => {
    if (report.Description) {
      return report.Description
    }
    if (report.Subtitle) {
      return report.Subtitle
    }
    return '暂无描述'
  }

  // 获取报告数据
  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true)
        const response = await reportsApi.getReports({
          pageSize: 12,
          sort: 'publishedAt:desc'
        })

        if (response.data && response.data.length > 0) {
          const formattedReports = response.data.map((report) => ({
            id: report.documentId,
            category: getCategory(report),
            title: report.title,
            description: getDescription(report),
            image: getImageUrl(report),
            href: `/report/${report.documentId}`
          }))
          setReportsData(formattedReports)
        } else {
          // 使用默认数据作为备选
          setReportsData(getDefaultReports())
        }
      } catch (err) {
        console.error('获取报告数据失败:', err)
        setError('加载报告失败')
        // 使用默认数据作为备选
        setReportsData(getDefaultReports())
      } finally {
        setLoading(false)
      }
    }

    fetchReports()
  }, [])

  // 默认报告数据
  const getDefaultReports = (): ReportItem[] => [
    {
      id: '1',
      category: '算力中心',
      title: '《2025年中国第三方算力中心服务商发展研究报告》',
      description: '科智咨询《2025年中国第三方算力中心服务商发展研究报告》正式发布',
      image: '/images/indexbaogao1.png',
      href: '/report/1122821940755562496'
    },
    {
      id: '2',
      category: '服务器',
      title: '《中国国产服务器市场研究报告（2025）》',
      description: '伴随数据中心对算力更新换代的迫切需求，自2022年起国产服务器市场年增速持续超过20%，到2024年市场规模已突破693亿元。',
      image: '/images/indexbaogao2.png',
      href: '/report/1125728047304015872'
    },
    {
      id: '3',
      category: '智算中心',
      title: '《中国智算中心供配电系统应用市场研究报告(2025)》',
      description: '智算中心供配电系统正从"支撑系统"转变为制约算力发展的"瓶颈环节"，亟需在高压化、直流化、模块化和智能化等方向上实现跨越式升级',
      image: '/images/hangye1.png',
      href: '/report/1122459182172209152'
    },
    {
      id: '4',
      category: '智算中心',
      title: '《2025中国智算产业生态图谱》',
      description: '随着人工智能特别是大模型技术的快速发展，中国智算产业正从底层算力建设向系统能力跃迁，进入平台化、生态化的新阶段。',
      image: '/images/hangye2.png',
      href: '/report/1123230847835570176'
    },
    {
      id: '5',
      category: 'AI大模型',
      title: '《汽车行业大模型应用研究报告（2025）》',
      description: '人工智能大模型技术正在重塑全球汽车产业格局，推动自动驾驶、智能座舱、生产制造等领域的全面智能化转型。',
      image: '/images/indexxinwen1.png',
      href: '/report/1112692099003711488'
    },
    {
      id: '6',
      category: '算力',
      title: '《中国第三方算力中心服务商发展研究报告》（2024）',
      description: '如何把握机遇、规避风险、乘势而上是当下算力中心服务商实现长期稳健发展的关键。',
      image: '/images/indexxinwen2.png',
      href: '/report/986275048811659264'
    },
    {
      id: '7',
      category: '算力',
      title: '《2024中国智算产业生态图谱》',
      description: '梳理智算产业链条，展现产业发展全貌。',
      image: '/images/indexxinwen3.png',
      href: '/report/986275555198369792'
    },
    {
      id: '8',
      category: 'AI大模型',
      title: '《大模型应用及落地研究（2023）》',
      description: '大模型的三个层面均已进入商业化阶段。其中，模型层和应用层具有巨大的商业化潜力。',
      image: '/images/indexxinwen4.png',
      href: '/report/1016702059124097024'
    },
    {
      id: '9',
      category: '算力',
      title: '《中国算力产业高质量发展白皮书》（2023）',
      description: '中国算力产业亟待转入高质量发展阶段，支持数字经济与国民经济高质量发展战略。',
      image: '/images/hangye1.png',
      href: '/report/917074987305664512'
    },
    {
      id: '10',
      category: '数据中心',
      title: '《数据中心产业可持续发展白皮书（2022年）》',
      description: '数据中心产业已进入快速增长、深入变革新阶段。',
      image: '/images/hangye2.png',
      href: '/report/916380098347663360'
    },
    {
      id: '11',
      category: '数据中心',
      title: '《中国液冷数据中心市场深度研究报告》',
      description: '预计到2027年，中国液冷数据中心市场将突破千亿规模。',
      image: '/images/indexxinwen1.png',
      href: '/report/916393709883359232'
    },
    {
      id: '12',
      category: '光伏',
      title: '《2022年中国光伏行业研究报告》',
      description: '政策催化下，光伏进入黄金发展期，BIPV千亿蓝海市场可期。',
      image: '/images/indexxinwen2.png',
      href: '/report/917051966729748480'
    }
  ]

  const handleAddArticle = () => {
    const newReoprtBox = document.querySelector('.newReoprtBox') as HTMLElement
    const newReoprtList = document.querySelector('.newReoprtList') as HTMLElement
    
    if (newReoprtBox && newReoprtList) {
      const height = newReoprtBox.offsetHeight
      const newsHeight = newReoprtList.scrollHeight
      const count = newsHeight - height
      
      if (height >= newsHeight) {
        return
      } else if (count < 664) {
        newReoprtBox.style.height = newsHeight + 'px'
      } else {
        newReoprtBox.style.height = (height + 674) + 'px'
      }
    }
  }

  // 加载状态
  if (loading) {
    return (
      <div id="container-0f2cb07b881" className="cmp-container">
        <div className="container responsivegrid full-width-constraint">
          <div id="" className="channel">
            <h3 className="" style={{width: '1200px', margin: '35px auto'}}>
              最新报告
            </h3>
          </div>
          <div className="loading-container" style={{textAlign: 'center', padding: '40px'}}>
            <div className="loading">加载中...</div>
          </div>
        </div>
      </div>
    )
  }

  // 错误状态
  if (error) {
    return (
      <div id="container-0f2cb07b881" className="cmp-container">
        <div className="container responsivegrid full-width-constraint">
          <div id="" className="channel">
            <h3 className="" style={{width: '1200px', margin: '35px auto'}}>
              最新报告
            </h3>
          </div>
          <div className="error-container" style={{textAlign: 'center', padding: '40px'}}>
            <div className="error-message" style={{color: '#ff6b6b'}}>
              {error}
            </div>
            <div className="error-description" style={{marginTop: '10px', color: '#666'}}>
              正在使用默认数据展示
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="container-0f2cb07b881" className="cmp-container">
      <div className="container responsivegrid full-width-constraint">
        <div id="" className="channel">
          <h3 className="" style={{width: '1200px', margin: '35px auto'}}>
            最新报告
          </h3>
        </div>

        <div id="container-69d673454b" className="cmp-container">
          <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
            <div className="cmp-card-listing cmp-card-listing--cta-2-to-1">
              <div className="cmp-card-listing_second-row" style={{marginTop: '30px'}}>
                <div className="container responsivegrid newReoprtBox">
                  <div className="cmp-container newReoprtList">
                    {reportsData.map((report) => (
                      <div key={report.id} className="teaser dcc dcc-imagefoldtag card has-ellipsis has-tooltip">
                        <div className="cmp-teaser">
                          <div className="cmp-teaser__image">
                            <div className="cmp-image" itemScope={true}>
                              <a className="cmp-image__link" target="_self" href={report.href}>
                                <img src={report.image} alt={report.title} />
                              </a>
                            </div>
                          </div>
                          <div className="cmp-teaser__content">
                            <div className="cmp-teaser__pretitle">
                              <a className="cmp-teaser__pretitle-link" href="javascript:;" style={{cursor: 'auto'}}>
                                {report.category}
                              </a>
                            </div>
                            <h3 className="cmp-teaser__title">
                              <a className="cmp-teaser__title-link" href={report.href} target="_self" title={report.title}>
                                {report.title}
                              </a>
                            </h3>
                            <div className="cmp-teaser__description">
                              <p>
                                <span className="cmp-text__paragraph-default">
                                  {report.description}
                                </span>
                              </p>
                            </div>
                            <div className="cmp-teaser__action-container">
                              <a className="cmp-teaser__action-link" target="_self" href={report.href}>
                                了解更多
                              </a>
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
              <div className="cmp-card-listing_third-row">
                <div className="container responsivegrid">
                  <div id="container-1f16827fa8" className="cmp-container">
                  </div>
                </div>
              </div>
              <div className="learnMore">
                <a href="javascript:addArtticle();" className="addArtticle" onClick={handleAddArticle}>
                  <span className="cmp-button__text">解锁更多报告</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}