import { HeroCarousel } from '@/components/sections/HeroCarousel'
import { FocusSection } from '@/components/sections/FocusSection'
import { ReportsSection } from '@/components/sections/ReportsSection'
import { CasesCarousel } from '@/components/sections/CasesCarousel'
import { NewsCarousel } from '@/components/sections/NewsCarousel'
import { CTASection } from '@/components/sections/CTASection'
import { homepageApi } from '@/lib/homepage-api'
import { insightsApi, newsApi, reportsApi } from '@/lib/api'
import "@/styles/index.css"

export default async function Home() {
  // 获取首页数据
  let homepageData
  try {
    homepageData = await homepageApi.getAllHomepageData()
  } catch (error) {
    console.error('获取首页数据失败:', error)
    homepageData = {
      bannerSlides: [],
      indexCases: [],
      bannerCases: []
    }
  }

  // 调试信息
  console.log('首页 homepageData:', homepageData)
  console.log('首页 bannerSlides:', homepageData.bannerSlides)
  console.log('首页 indexCases:', homepageData.indexCases)

  // 处理轮播图数据 (bannerSwiper) - 使用新的API结构
  const heroSlides = homepageData.bannerSlides.length > 0 
    ? homepageData.bannerSlides.map(slide => ({
        title: slide.Title,
        description: slide.Description,
        image: slide.Image?.url || '/images/indexbanner1.png',
        buttonText: '了解更多',
        buttonLink: slide.Link || '/about'
      }))
    : [
        // 默认数据
        {
          title: '数字科技领域的专业咨询服务机构',
          description: '科学决策 赢在未来',
          image: '/images/indexbanner1.png',
          buttonText: '了解更多',
          buttonLink: '/about'
        },
        {
          title: '优化运营 行稳致远',
          description: '面向数字科技领域提供全方位咨询服务',
          image: '/images/indexbanner1.png',
          buttonText: '了解更多',
          buttonLink: '/services'
        },
        {
          title: '专业积累 多元智慧',
          description: '高效运营 释放潜能',
          image: '/images/indexbanner1.png',
          buttonText: '了解更多',
          buttonLink: '/insights'
        },
        {
          title: '创新驱动 引领未来',
          description: '以专业视角洞察行业趋势，助力企业数字化转型',
          image: '/images/indexbanner1.png',
          buttonText: '了解更多',
          buttonLink: '/contact'
        }
      ]

  // 处理聚焦内容数据 - 使用insights栏目最新的4篇文章
  let focusItems = []
  try {
    const insightsResponse = await insightsApi.getInsights({ 
      pageSize: 4, 
      sort: 'publishedAt:desc' 
    })
    focusItems = insightsResponse.data.map(insight => ({
      title: insight.title,
      description: insight.Description || insight.Subtitle || '暂无描述',
      image: insight.PcCover?.formats?.medium?.url || insight.PcCover?.url || '/images/indexxinwen1.png',
      link: `/insights/${insight.documentId}`
    }))
  } catch (error) {
    console.error('获取洞察数据失败:', error)
    // 使用默认数据
    focusItems = [
      {
        title: '中国算力产业发展迅猛，亟待提升发…',
        description: '本文从算力产业链、算力产业发展情况、算力产业发展驱动、算力产业发展面临的问题等维度对中国算力产业发展现状进行分析研究，提出算力高质量发展建议。',
        image: '/images/indexxinwen1.png',
        link: '/insights/1'
      },
      {
        title: '液冷数据中心发展步入快车道',
        description: '近几年来中国数据中心产业快速发展，主流数据中心单机柜功率持续提升，液冷技术因其在散热效率及适用功率等方面的明显优势，逐步应用于高密度数据中心中。',
        image: '/images/indexxinwen2.png',
        link: '/insights/2'
      },
      {
        title: '中国公有云市场风云变幻，政企成争…',
        description: '本文从算力产业链、算力产业发展情况、算力产业发展驱动、算力产业发展面临的问题等维度对中国算力产业发展现状进行分析研究。',
        image: '/images/indexxinwen3.png',
        link: '/insights/3'
      },
      {
        title: '2025年银行业数字化转型市场洞察',
        description: '当前，数字化转型已成为企业发展的核心战略，从早期探索逐步迈向数智驱动、全面深耕新阶段。企业通过数据驱动实现生产、运营、管理等各个环节的智能化。',
        image: '/images/indexxinwen4.png',
        link: '/insights/4'
      }
    ]
  }

  // 处理新闻数据 - 使用newses的文章
  let newsItems = []
  try {
    const newsResponse = await newsApi.getNews({ 
      pageSize: 5, 
      sort: 'publishedAt:desc' 
    })
    newsItems = newsResponse.data.map(news => ({
      title: news.title,
      image: news.PcCover?.formats?.medium?.url || news.PcCover?.url || '/images/indexxinwendongtai1.png',
      link: `/news/${news.documentId}`
    }))
  } catch (error) {
    console.error('获取新闻数据失败:', error)
    // 使用默认数据
    newsItems = [
      {
        title: '科智咨询亮相中国IDC产业（大湾区）年度大典，深度解读港澳大湾区(广东)数据中心产业高质量发展指南',
        image: '/images/indexxinwendongtai1.png',
        link: '/news/1'
      },
      {
        title: '科智咨询携手中国信息通信研究院撰写《数字中国产业洞察》报告',
        image: '/images/indexxinwendongtai2.png',
        link: '/news/2'
      },
      {
        title: '科智咨询助力亚太经合组织（APEC）地区远程医疗发展研究项目成果落地',
        image: '/images/indexxinwendongtai3.png',
        link: '/news/3'
      },
      {
        title: '开启算力新时代开启算力新时代开启算力新时开启算力新时代开启算力新时代开启算力新时',
        image: '/images/indexxinwendongtai1.png',
        link: '/news/4'
      },
      {
        title: '开启算力新时代开启算力新时代开启算力新时开启算力新时代开启算力新时代开启算力新时',
        image: '/images/indexxinwendongtai2.png',
        link: '/news/5'
      }
    ]
  }

  // 处理案例数据 - 使用新的indexCases
  const caseItems = homepageData.indexCases.length > 0
    ? homepageData.indexCases.map(item => ({
        title: item.Title,
        description: item.Description,
        image: item.Image?.url || '/images/indexanli1.png'
      }))
    : [
        // 默认数据
        {
          title: '保险行业人工智能应用研究',
          description: '通过产品对目标场景的切入、合作模式与竞争优势的建立等途径，为行业技术应用提供了有力支撑',
          image: '/images/indexanli3.png'
        },
        {
          title: '公有云市场用户研究',
          description: '明确各行业上云应用的需求现状和趋势、细分行业客户痛点、云平台迁移趋势和竞对研究，对市场扩张提供有力支撑',
          image: '/images/indexanli4.png'
        },
        {
          title: '互联网行业数据中心市场研究',
          description: '通过详实的互联网企业用户需求分析，对客户制定自身发展规划提供精准支撑',
          image: '/images/indexanli5.png'
        },
        {
          title: '地区产业规划项目',
          description: '通过深度需求调研、前景测算和对比分析，促使区域建设更加协同高效',
          image: '/images/indexanli1.png'
        },
        {
          title: '某世界五百强企业数据中心五年规划',
          description: '结合业务现状与难点，输出切实可行、落地度高的方案，对业务发展起到直接指导的作用',
          image: '/images/indexanli2.png'
        }
      ]

  // 处理报告数据 - 使用reportsApi获取最新三条数据
  let mainReport = {
    title: '中国数据中心产业可持续发展白皮书',
    description: '中国数据中心产业可持续发展白皮书中国数据中心产业可持续发展白皮书中国数据中心产业可持续发展白皮书中国数据中心产业可持续发展白皮书中国数据中心产业可持续发展白皮书中国数据中心产业可持续发展白皮书中国数据中心产业可持续发展白皮书中国数据中心产业可持续发展白皮书',
    link: '/report/whitepaper'
  }

  let sideReports = [
    // 默认数据
    {
      title: '中国数据中心产业可持续发展白皮书',
      description: '中国数据中心产业可持续发展白皮书中国数据中心产业可持续发展白皮书',
      image: '/images/indexbaogao1.png',
      link: '/report/whitepaper'
    },
    {
      title: '中国数据中心产业可持续发展白皮书',
      description: '中国数据中心产业可持续发展白皮书中国数据中心产业可持续发展白皮书',
      image: '/images/indexbaogao2.png',
      link: '/report/whitepaper'
    }
  ]

  try {
    const reportsResponse = await reportsApi.getReports({ 
      pageSize: 3, 
      sort: 'publishedAt:desc' 
    })
    
    if (reportsResponse.data && reportsResponse.data.length > 0) {
      // 第一条作为主报告
      const firstReport = reportsResponse.data[0]
      mainReport = {
        title: firstReport.title,
        description: firstReport.Description || firstReport.Subtitle || '暂无描述',
        link: `/report/${firstReport.documentId}`
      }

      // 其余作为侧边报告
      sideReports = reportsResponse.data.slice(1).map(report => ({
        title: report.title,
        description: report.Description || report.Subtitle || '暂无描述',
        image: report.PcCover?.formats?.medium?.url || report.PcCover?.url || '/images/indexbaogao1.png',
        link: `/report/${report.documentId}`
      }))

      // 如果只有一条数据，补充默认数据
      if (reportsResponse.data.length === 1) {
        sideReports.push({
          title: '中国数据中心产业可持续发展白皮书',
          description: '中国数据中心产业可持续发展白皮书中国数据中心产业可持续发展白皮书',
          image: '/images/indexbaogao2.png',
          link: '/report/whitepaper'
        })
      }
    }
  } catch (error) {
    console.error('获取报告数据失败:', error)
    // 使用默认数据
  }

  // 调试信息
  console.log('首页 heroSlides:', heroSlides)
  console.log('首页 caseItems:', caseItems)
  console.log('首页 focusItems:', focusItems)
  console.log('首页 mainReport:', mainReport)
  console.log('首页 sideReports:', sideReports)

  // 处理CTA数据 - 使用默认数据
  const ctaData = {
    title: '联系我们',
    description: '专业咨询，助力您的数字化转型',
    subDescription: '我们拥有丰富的行业经验和专业团队',
    buttonText: '立即咨询',
    buttonLink: '/contact'
  }

  return (
    <div>
      <div className="root container responsivegrid">
        <div id="container-0936f56efa" className="cmp-container">
          <main className="container responsivegrid">
            <div id="main" className="cmp-container">
              <HeroCarousel slides={heroSlides} />
              <FocusSection items={focusItems} />
            </div>
          </main>
        </div>
      </div>
      
      <ReportsSection mainReport={mainReport} sideReports={sideReports} />
      <CasesCarousel items={caseItems} />
      <NewsCarousel items={newsItems} />
      <CTASection 
        title={ctaData.title}
        description={ctaData.description}
        subDescription={ctaData.subDescription}
        buttonText={ctaData.buttonText}
        buttonLink={ctaData.buttonLink}
      />
    </div>
  )
}