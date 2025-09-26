import Image from 'next/image'

export function ContactInfo() {
  const contactMethods = [
    {
      icon: '📞',
      title: '电话咨询',
      description: '直接电话沟通，快速响应您的需求',
      details: [
        '咨询热线：400-123-4567',
        '工作时间：周一至周五 9:00-18:00'
      ]
    },
    {
      icon: '📧',
      title: '邮件联系',
      description: '发送邮件获取详细咨询方案',
      details: [
        '商务合作：business@kzzx.com',
        '媒体联系：media@kzzx.com',
        '一般咨询：info@kzzx.com'
      ]
    },
    {
      icon: '📍',
      title: '公司地址',
      description: '欢迎到访我们的办公地点',
      details: [
        '北京市朝阳区建国门外大街1号',
        '国贸大厦A座2001室',
        '邮编：100020'
      ]
    },
    {
      icon: '💬',
      title: '在线咨询',
      description: '通过在线客服即时沟通',
      details: [
        '微信客服：KZZX_Service',
        'QQ客服：123456789',
        '在线时间：9:00-21:00'
      ]
    }
  ]

  return (
    <div className="cmp-cmp-container responsivegrid full-width-constraint">
      <div className="cmp-container" style={{ backgroundColor: 'rgb(255,255,255)' }}>
        <div className="contact-info-section ui-vs-top--lg ui-vs-bottom--lg">
          
          {/* 联系信息介绍 */}
          <div className="contact-intro">
            <div className="title">
              <div className="cmp-title">
                <h2 className="cmp-title__text">多种联系方式</h2>
              </div>
            </div>
            <div className="text">
              <div className="cmp-text">
                <p>我们提供多种便捷的联系方式，确保能够及时响应您的需求</p>
              </div>
            </div>
          </div>

          {/* 联系方式网格 */}
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method-card">
                <div className="contact-method-card__icon">
                  {method.icon}
                </div>
                
                <div className="contact-method-card__content">
                  <h3 className="contact-method-card__title">
                    {method.title}
                  </h3>
                  
                  <p className="contact-method-card__description">
                    {method.description}
                  </p>
                  
                  <ul className="contact-method-card__details">
                    {method.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* 地图区域 */}
          <div className="contact-map">
            <div className="title">
              <div className="cmp-title">
                <h2 className="cmp-title__text">我们的位置</h2>
              </div>
            </div>
            <div className="map-container">
              <div className="map-placeholder">
                <Image
                  src="/images/map-placeholder.jpg"
                  alt="公司位置地图"
                  width={800}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="map-overlay">
                  <p>📍 北京市朝阳区建国门外大街1号国贸大厦A座2001室</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
