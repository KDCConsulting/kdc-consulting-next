import { StrategicAdvisory, ServiceType } from '@/types/services'

interface ServicesExpertiseProps {
  servicesData?: StrategicAdvisory[]
  serviceType?: ServiceType
}

export function ServicesExpertise({ servicesData = [], serviceType = ServiceType.STRATEGIC }: ServicesExpertiseProps) {
  // 从API数据中提取服务信息，只显示channelName和channelDescription
  const getServicesFromData = () => {
    console.log('ServicesExpertise received data:', servicesData)
    console.log('Service type:', serviceType)
    
    if (servicesData.length > 0) {
      // 根据服务类型生成正确的链接路径
      const getServicePath = (serviceType: ServiceType) => {
        switch (serviceType) {
          case ServiceType.STRATEGIC:
            return '/services/StrategicAdvisory'
          case ServiceType.MARKET:
            return '/services/MarketIntelligence'
          case ServiceType.INDUSTRY:
            return '/services/IndustryAnalysis'
          case ServiceType.INVESTMENT:
            return '/services/InvestmentConsulting'
          default:
            return '/services/StrategicAdvisory'
        }
      }
      
      // 提取每个服务的channelName和channelDescription
      const services = servicesData.map(service => ({
        title: service.channelName,
        description: service.channelDescription || service.ServiceContentBriefIntroduction || '暂无描述',
        link: `${getServicePath(serviceType)}/${service.documentId}` // 根据服务类型跳转到具体服务页面
      }))
      
      console.log('Extracted services:', services)
      return services
    }
    
    // 默认数据
    const getServicePath = (serviceType: ServiceType) => {
      switch (serviceType) {
        case ServiceType.STRATEGIC:
          return '/services/StrategicAdvisory'
        case ServiceType.MARKET:
          return '/services/MarketIntelligence'
        case ServiceType.INDUSTRY:
          return '/services/IndustryAnalysis'
        case ServiceType.INVESTMENT:
          return '/services/InvestmentConsulting'
        default:
          return '/services/StrategicAdvisory'
      }
    }
    
    const basePath = getServicePath(serviceType)
    
    return [
      {
        title: "战略规划",
        description: "明确企业长期发展方向和目标，制定实现策略与行动计划。",
        link: `${basePath}/strategic-planning`,
      },
      {
        title: "商业模式变革",
        description: "重新设计企业的价值创造、传递和获取方式，以适应市场变化和客户需求。",
        link: `${basePath}/business-model-transformation`,
      },
      {
        title: "竞争战略",
        description: "深入分析竞争对手发展策略、市场表现，指导企业市场战略与决策制定。",
        link: `${basePath}/competitive-strategy`,
      },
      {
        title: "技术商业化",
        description: "将创新技术转化为商业价值和竞争优势，帮助企业实现技术的商业化应用。",
        link: `${basePath}/technology-commercialization`,
      },
      {
        title: "区域产业规划",
        description: "根据区域特点和资源禀赋，规划产业发展方向和布局。",
        link: `${basePath}/regional-industrial-planning`,
      },
    ]
  }

  const services = getServicesFromData()

  return (
    <div className="container responsivegrid full-width-constraint">
      <div
        id="container-b333991d9d"
        className="cmp-container zxfw"
        style={{ backgroundColor: "rgb(255,255,255)" }}
      >
        <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
          {/* Card Listing Block */}

          <div className="cmp-card-listing cmp-card-listing--cta-2-to-1">
            <div className="cmp-card-listing_first-row">
              <div className="cmp-card-listing_first-row_left-col">
                <div className="container responsivegrid">
                  <div className="cmp-container">
                    <div className="title cmp-title--section ui-vs-bottom--md">
                      <div className="cmp-title">
                        <h2 className="cmp-title__text">服务专长</h2>
                      </div>
                    </div>
                    <div className="text ui-vs-bottom--md">
                      <div className="cmp-text cmp-consent--verify">
                        <p>
                          <span className="cmp-text__paragraph-default">
                            帮助客户绘制和实施制胜战略，为客户把握机遇并交付既定成果。
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cmp-card-listing_first-row_right-col">
                <div className="container responsivegrid">
                  <div
                    id="container-04bbf0d3f6"
                    className="cmp-container"
                  ></div>
                </div>
              </div>
            </div>
            <div className="cmp-card-listing_second-row">
              <div className="container responsivegrid">
                <div className="cmp-container">
                  {services.map((service, index) => (
                    <div key={index} className="teaser dcc dcc-title-summary-arrow card has-ellipsis color-block-blue-dark">
                      <div className="cmp-teaser" style={{ border: "none" }}>
                        <div className="cmp-teaser__content">
                          <h3 className="cmp-teaser__title">
                            <a
                              className="cmp-teaser__title-link"
                              href={service.link}
                              target="_self"
                            >
                              <span>{service.title}</span>
                              <span className="cmp-teaser__arrow-tag">
                                <span className="cmp-teaser__arrow-tag--icon"></span>
                              </span>
                            </a>
                          </h3>
                          <div className="cmp-teaser__description">
                            {service.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="button cmp-card-listing_button cmp-button--text-link cmp-button__cta-arrow--right"></div>
            </div>

            <div className="cmp-card-listing_third-row ">
              <div className="container responsivegrid">
                <div id="container-beb0388fd0" className="cmp-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
