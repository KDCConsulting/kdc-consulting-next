import Image from 'next/image'

export function ValuesSection() {
  const values = [
    {
      icon: '🎯',
      title: '专业',
      titleEn: 'Professional',
      description: '我们拥有深厚的行业积累和专业的分析能力，为客户提供高质量的咨询服务。',
      details: [
        '15年+行业经验',
        '50+专业顾问',
        '200+成功案例',
        '95%客户满意度'
      ]
    },
    {
      icon: '💡',
      title: '创新',
      titleEn: 'Innovation',
      description: '持续探索新的服务模式和技术应用，为客户提供前瞻性的解决方案。',
      details: [
        'AI驱动咨询',
        '数据智能分析',
        '创新服务模式',
        '前沿技术应用'
      ]
    },
    {
      icon: '🤝',
      title: '合作',
      titleEn: 'Collaboration',
      description: '与客户建立长期合作关系，共同面对挑战，实现共同发展。',
      details: [
        '长期合作伙伴',
        '深度业务理解',
        '定制化服务',
        '持续价值创造'
      ]
    },
    {
      icon: '📈',
      title: '卓越',
      titleEn: 'Excellence',
      description: '追求卓越的服务质量和项目成果，为客户创造最大价值。',
      details: [
        '严格质量标准',
        '精益项目管理',
        '持续改进优化',
        '超越客户期望'
      ]
    }
  ]

  const principles = [
    {
      title: '客户至上',
      description: '始终以客户需求为中心，提供最适合的解决方案'
    },
    {
      title: '诚信为本',
      description: '坚持诚信经营，建立长期信任的合作关系'
    },
    {
      title: '持续学习',
      description: '保持学习热情，不断提升专业能力和服务水平'
    },
    {
      title: '团队协作',
      description: '发挥团队优势，共同为客户创造更大价值'
    }
  ]

  return (
    <div className="cmp-cmp-container responsivegrid full-width-constraint">
      <div className="cmp-container" style={{ backgroundColor: 'rgb(255,255,255)' }}>
        <div className="values-section ui-vs-top--lg ui-vs-bottom--lg">
          
          {/* 企业价值观 */}
          <div className="company-values">
            <div className="title">
              <div className="cmp-title">
                <h2 className="cmp-title__text">企业价值观</h2>
              </div>
            </div>
            <div className="text">
              <div className="cmp-text">
                <p>我们的价值观指导着我们的行为和决策，是我们企业文化的核心</p>
              </div>
            </div>
            
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-card__icon">
                    {value.icon}
                  </div>
                  
                  <div className="value-card__content">
                    <h3 className="value-card__title">
                      {value.title}
                    </h3>
                    
                    <p className="value-card__title-en">
                      {value.titleEn}
                    </p>
                    
                    <p className="value-card__description">
                      {value.description}
                    </p>
                    
                    <ul className="value-card__details">
                      {value.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 经营理念 */}
          <div className="business-principles">
            <div className="title">
              <div className="cmp-title">
                <h2 className="cmp-title__text">经营理念</h2>
              </div>
            </div>
            
            <div className="principles-grid">
              {principles.map((principle, index) => (
                <div key={index} className="principle-item">
                  <h3 className="principle-title">
                    {principle.title}
                  </h3>
                  <p className="principle-description">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 企业文化 */}
          <div className="company-culture">
            <div className="culture-content">
              <div className="culture-text">
                <div className="title">
                  <div className="cmp-title">
                    <h2 className="cmp-title__text">企业文化</h2>
                  </div>
                </div>
                <div className="text">
                  <div className="cmp-text">
                    <p>
                      我们致力于营造一个开放、包容、创新的工作环境，鼓励员工发挥创造力，
                      追求卓越，与公司共同成长。我们相信，优秀的企业文化是吸引和留住人才的关键，
                      也是为客户提供优质服务的基础。
                    </p>
                    <p>
                      我们重视团队合作，鼓励知识分享，支持员工持续学习和职业发展。
                      通过建立完善的人才培养体系和激励机制，我们为每一位员工提供
                      广阔的发展空间和实现个人价值的机会。
                    </p>
                  </div>
                </div>
              </div>
              <div className="culture-image">
                <Image
                  src="/images/company-culture.jpg"
                  alt="科智咨询企业文化"
                  width={500}
                  height={350}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
