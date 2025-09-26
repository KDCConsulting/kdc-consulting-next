import { StrategicAdvisory } from '@/types/services'

interface DynamicServicesExpertiseProps {
  serviceData: StrategicAdvisory | null
  fallbackTitle?: string
  fallbackDescription?: string
}

export function DynamicServicesExpertise({ 
  serviceData,
  fallbackTitle = "服务专长",
  fallbackDescription = "帮助客户绘制和实施制胜战略，为客户把握机遇并交付既定成果。"
}: DynamicServicesExpertiseProps) {
  const contentComponents = serviceData?.ServiceContentComponents || []
  const title = serviceData?.ServiceContentTitle || fallbackTitle
  const description = serviceData?.ServiceContentBriefIntroduction || fallbackDescription

  return (
    <div className="container responsivegrid full-width-constraint">
      <div className="cmp-container zxfw" style={{backgroundColor: 'rgb(255,255,255)'}}>
        <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
          <div className="cmp-card-listing cmp-card-listing--cta-2-to-1">
            <div className="cmp-card-listing_first-row">
              <div className="cmp-card-listing_first-row_left-col">
                <div className="container responsivegrid">
                  <div className="cmp-container">
                    <div className="title cmp-title--section ui-vs-bottom--md">
                      <div className="cmp-title">
                        <h2 className="cmp-title__text">{title}</h2>
                      </div>
                    </div>
                    <div className="text ui-vs-bottom--md">
                      <div className="cmp-text cmp-consent--verify">
                        <p><span className="cmp-text__paragraph-default">{description}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cmp-card-listing_first-row_right-col">
                  <div className="container responsivegrid">
                    <div className="cmp-container">
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmp-card-listing_second-row">
                <div className="container responsivegrid">
                  <div className="cmp-container">
                    {contentComponents.map((component, index) => (
                      <div key={component.id} className="teaser dcc dcc-title-summary-arrow card has-ellipsis color-block-blue-dark">
                        <div className="cmp-teaser" style={{border: 'none'}}>
                          <div className="cmp-teaser__content">
                            <h3 className="cmp-teaser__title">
                              <span>{component.Title}</span>
                              <span className="cmp-teaser__arrow-tag">
                                <span className="cmp-teaser__arrow-tag--icon"></span>
                              </span>
                            </h3>
                            <div className="cmp-teaser__description">
                              {component.Description}
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
                  <div className="cmp-container">
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
