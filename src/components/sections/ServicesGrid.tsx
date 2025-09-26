import Link from 'next/link'
import Image from 'next/image'

interface ServiceItem {
  id: string
  title: string
  titleEn: string
  description: string
  features: string[]
  image: string
  href: string
  icon: string
}

export function ServicesGrid() {
  const services: ServiceItem[] = [
    {
      id: 'strategic-advisory',
      title: '战略咨询',
      titleEn: 'Strategic Advisory',
      description: '为企业提供战略规划、商业模式设计、数字化转型等全方位战略咨询服务，助力企业实现可持续发展。',
      features: [
        '企业战略规划',
        '商业模式设计',
        '数字化转型',
        '组织架构优化',
        '投资决策支持'
      ],
      image: '/images/service-strategic.jpg',
      href: '/services/strategic-advisory',
      icon: '🎯'
    },
    {
      id: 'market-intelligence',
      title: '市场咨询',
      titleEn: 'Market Intelligence',
      description: '深度市场研究分析，提供市场趋势洞察、竞争分析、用户研究等专业市场咨询服务。',
      features: [
        '市场趋势分析',
        '竞争环境研究',
        '用户需求调研',
        '市场机会识别',
        '营销策略制定'
      ],
      image: '/images/service-market.jpg',
      href: '/services/market-intelligence',
      icon: '📊'
    },
    {
      id: 'industry-analysis',
      title: '行业研究',
      titleEn: 'Industry Analysis',
      description: '专注于数字科技领域的深度行业研究，提供行业发展趋势、技术路线图、政策解读等专业分析。',
      features: [
        '行业趋势分析',
        '技术发展路线',
        '政策环境解读',
        '产业链分析',
        '投资机会评估'
      ],
      image: '/images/service-industry.jpg',
      href: '/services/industry-analysis',
      icon: '🔍'
    },
    {
      id: 'investment-consulting',
      title: '投资咨询',
      titleEn: 'Investment Consulting',
      description: '为投资机构和企业提供专业的投资决策支持，包括尽职调查、估值分析、风险评估等服务。',
      features: [
        '投资尽职调查',
        '企业估值分析',
        '风险评估管理',
        '投资组合优化',
        '退出策略制定'
      ],
      image: '/images/service-investment.jpg',
      href: '/services/investment-consulting',
      icon: '💰'
    }
  ]

  return (
    <div className="cmp-cmp-container responsivegrid full-width-constraint">
      <div className="cmp-container" style={{ backgroundColor: 'rgb(255,255,255)' }}>
        <div className="services-section ui-vs-top--lg ui-vs-bottom--lg">
          
          {/* 服务介绍 */}
          <div className="services-intro">
            <div className="title">
              <div className="cmp-title">
                <h2 className="cmp-title__text">专业服务</h2>
              </div>
            </div>
            <div className="text">
              <div className="cmp-text">
                <p>以深厚的行业积累和专业的分析能力，为客户提供全方位的咨询服务</p>
              </div>
            </div>
          </div>

          {/* 服务网格 */}
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card__image">
                  <Link href={service.href}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={250}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Link>
                  <div className="service-card__icon">
                    {service.icon}
                  </div>
                </div>
                
                <div className="service-card__content">
                  <h3 className="service-card__title">
                    <Link href={service.href}>
                      {service.title}
                    </Link>
                  </h3>
                  
                  <p className="service-card__title-en">
                    {service.titleEn}
                  </p>
                  
                  <p className="service-card__description">
                    {service.description}
                  </p>
                  
                  <ul className="service-card__features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <Link href={service.href} className="service-card__link">
                    了解详情 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
