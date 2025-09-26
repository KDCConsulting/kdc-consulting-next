import { StrategicAdvisory } from '@/types/services'

interface DynamicServicesValuePropositionProps {
  serviceData: StrategicAdvisory | null
  fallbackTitle?: string
}

export function DynamicServicesValueProposition({ 
  serviceData,
  fallbackTitle = "科智咨询的独到支持"
}: DynamicServicesValuePropositionProps) {
  const valueProps = serviceData?.ServiceValuePropositionComponents || []
  const title = serviceData?.ServiceValuePropositionTitle || fallbackTitle
  const description = serviceData?.ServiceValuePropositionBriefIntroduction

  return (
    <div className="container responsivegrid full-width-constraint">
      <div className="cmp-container kzsj" style={{backgroundColor: 'rgb(242,242,242)'}}>
        <div className="fourcellblock ui-vs-top--lg ui-vs-bottom--bs">
          <div className="cmp-fourcellblock">
            <div className="cmp-four-cell">
              <div className="cmp-four-cell__first-row cmp-four-cell__first-row--2-1 cmp-four-cell__first-row--cta-row">
                <div className="cmp-four-cell__first-col">
                  <div className="container responsivegrid">
                    <div className="cmp-container">
                      <div className="title cmp-title--section ui-vs-bottom--md">
                        <div className="cmp-title">
                          <h1 className="cmp-title__text">{title}</h1>
                        </div>
                      </div>
                      {description && (
                        <div className="text ui-vs-bottom--md">
                          <div className="cmp-text cmp-consent--verify">
                            <p>{description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmp-four-cell__second-row cmp-four-cell__second-row--2-1-inline">
                <div className="cmp-four-cell__first-col" style={{flexBasis: 'auto'}}>
                  <div className="container responsivegrid">
                    <div className="cmp-container">
                      <div className="value-proposition-grid">
                        {valueProps.map((prop, index) => (
                          <div key={prop.id} className="value-prop-item">
                            <h3>{prop.Title}</h3>
                            <p>{prop.Description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmp-four-cell__second-row cmp-four-cell__second-row--cta-mobile-row">
                <div className="cmp-four-cell__first-col cmp-four-cell__cta-btn">
                  <div className="button cmp-button--text-link cmp-button__cta-arrow--right">
                  </div>
                </div>
                <div className="cmp-four-cell__second-col"></div>
              </div>
              <div className="cmp-four-cell__third-row cmp-four-cell__fullwidth">
                <div className="cmp-four-cell__first-col">
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
    </div>
  )
}
