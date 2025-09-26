import Image from 'next/image'

interface CaseItem {
  id: string
  title: string
  description: string
  image: string
}

export function DataCenterCases() {
  const cases: CaseItem[] = [
    {
      id: 'regional-research',
      title: '重点地区IDC市场研究',
      description: '基于对重点需求区域的分析研究，前瞻各地区IDC行业发展前景，把握区域发展潜力和投资机会',
      image: '/images/hangyeanli1.png'
    },
    {
      id: 'investment-value',
      title: 'IDC项目投资价值研究',
      description: '深入分析数据中心项目基本情况及运营前景，结合所在区域IDC市场情况，评估项目投资可行性',
      image: '/images/hangyeanli2.png'
    },
    {
      id: 'business-planning',
      title: '服务商IDC业务发展规划',
      description: '在行业竞争加剧的背景下，研究设计IDC业务策略体系，提供定制化解决方案，赋能企业可持续发展',
      image: '/images/hangyeanli3.png'
    }
  ]

  return (
    <div className="cmp-container responsivegrid flex">
      <div className="cmp-container">
        <div className="cmp-cmp-container responsivegrid full-width-constraint">
          <div className="cmp-container case">
            <div className="title cmp-title--section ui-vs-bottom--md">
              <div className="cmp-title">
                <h2 className="cmp-title__text">成功案例</h2>
              </div>
            </div>
            
            <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
              <div className="cmp-card-listing cmp-card-listing--cta-2-to-1">
                <div className="cmp-card-listing_first-row">
                  <div className="cmp-card-listing_first-row_left-col">
                    <div className="cmp-container responsivegrid">
                      <div className="cmp-container">
                        <div className="title cmp-title--section ui-vs-bottom--md">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cmp-card-listing_first-row_right-col">
                    <div className="cmp-container responsivegrid">
                      <div className="cmp-container">
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="cmp-card-listing_second-row">
                  <div className="cmp-container responsivegrid">
                    <div className="cmp-container newsList flex-container">
                      {cases.map((caseItem) => (
                        <div key={caseItem.id} className="teaser dcc dcc-imagefoldtag card has-ellipsis has-tooltip">
                          <div className="cmp-teaser">
                            <div className="cmp-teaser__image">
                              <div className="cmp-image">
                                <a className="cmp-image__link">
                                  <Image 
                                    src={caseItem.image} 
                                    alt={caseItem.title}
                                    width={400}
                                    height={250}
                                    style={{ width: '100%', height: 'auto' }}
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="cmp-teaser__content">
                              <h3 className="cmp-teaser__title">
                                <a className="cmp-teaser__title-link">
                                  {caseItem.title}
                                </a>
                              </h3>
                              <div className="cmp-teaser__description" data-mark="jcr:description">
                                <p>
                                  <span className="cmp-text__paragraph-default">
                                    {caseItem.description}
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

                <div className="cmp-card-listing_third-row">
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
