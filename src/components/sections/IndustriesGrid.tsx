import Link from 'next/link'
import Image from 'next/image'

interface IndustryItem {
  id: string
  name: string
  nameEn: string
  description: string
  image: string
  href: string
  category: string
  marketSize: string
  growthRate: string
  keyTrends: string[]
}

export function IndustriesGrid() {
  const industries: IndustryItem[] = [
    {
      id: 'data-center',
      name: '数据中心',
      nameEn: 'Data Center',
      description: '数据中心作为数字经济的核心基础设施，正在经历快速发展和转型升级。',
      image: '/images/industry-data-center.jpg',
      href: '/industries/data-center',
      category: '数字基础设施',
      marketSize: '2000亿元',
      growthRate: '15%',
      keyTrends: ['液冷技术普及', '绿色数据中心', '边缘计算', 'AI算力需求']
    },
    {
      id: '5g',
      name: '5G网络',
      nameEn: '5G Network',
      description: '5G技术正在重塑通信行业，为各行各业带来新的发展机遇。',
      image: '/images/industry-5g.jpg',
      href: '/industries/5g',
      category: '数字基础设施',
      marketSize: '1500亿元',
      growthRate: '25%',
      keyTrends: ['5G应用场景拓展', '网络切片技术', '毫米波应用', '工业互联网']
    },
    {
      id: 'cloud-computing',
      name: '云计算',
      nameEn: 'Cloud Computing',
      description: '云计算已成为企业数字化转型的重要支撑，市场持续快速增长。',
      image: '/images/industry-cloud.jpg',
      href: '/industries/cloud-computing',
      category: '数字技术',
      marketSize: '3000亿元',
      growthRate: '20%',
      keyTrends: ['混合云普及', '云原生技术', '多云管理', '边缘云发展']
    },
    {
      id: 'ai',
      name: '人工智能',
      nameEn: 'Artificial Intelligence',
      description: 'AI技术正在各个行业深度应用，推动产业智能化升级。',
      image: '/images/industry-ai.jpg',
      href: '/industries/ai',
      category: '数字技术',
      marketSize: '2500亿元',
      growthRate: '30%',
      keyTrends: ['大模型应用', 'AI芯片发展', '智能驾驶', 'AI+医疗']
    },
    {
      id: 'big-data',
      name: '大数据',
      nameEn: 'Big Data',
      description: '大数据技术为企业决策提供重要支撑，应用场景不断拓展。',
      image: '/images/industry-bigdata.jpg',
      href: '/industries/big-data',
      category: '数字技术',
      marketSize: '1800亿元',
      growthRate: '18%',
      keyTrends: ['实时数据处理', '数据湖架构', '隐私计算', '数据治理']
    },
    {
      id: 'iot',
      name: '物联网',
      nameEn: 'Internet of Things',
      description: '物联网连接万物，为智慧城市和工业4.0提供技术基础。',
      image: '/images/industry-iot.jpg',
      href: '/industries/iot',
      category: '数字技术',
      marketSize: '1200亿元',
      growthRate: '22%',
      keyTrends: ['5G+IoT融合', '边缘智能', '工业物联网', '智慧城市']
    },
    {
      id: 'blockchain',
      name: '区块链',
      nameEn: 'Blockchain',
      description: '区块链技术为数字经济提供信任机制，应用场景日益丰富。',
      image: '/images/industry-blockchain.jpg',
      href: '/industries/blockchain',
      category: '数字技术',
      marketSize: '800亿元',
      growthRate: '35%',
      keyTrends: ['联盟链应用', 'DeFi发展', 'NFT市场', 'Web3.0']
    },
    {
      id: 'fintech',
      name: '金融科技',
      nameEn: 'Fintech',
      description: '金融科技正在重塑金融服务模式，提升金融效率和用户体验。',
      image: '/images/industry-fintech.jpg',
      href: '/industries/fintech',
      category: '数字应用',
      marketSize: '2200亿元',
      growthRate: '28%',
      keyTrends: ['数字支付', '开放银行', '智能投顾', '数字货币']
    },
    {
      id: 'smart-healthcare',
      name: '智慧医疗',
      nameEn: 'Smart Healthcare',
      description: '数字技术正在变革医疗服务模式，提升医疗效率和质量。',
      image: '/images/industry-healthcare.jpg',
      href: '/industries/smart-healthcare',
      category: '数字应用',
      marketSize: '1500亿元',
      growthRate: '24%',
      keyTrends: ['远程医疗', 'AI诊断', '医疗大数据', '数字疗法']
    }
  ]

  // 按分类分组
  const industriesByCategory = industries.reduce((acc, industry) => {
    if (!acc[industry.category]) {
      acc[industry.category] = []
    }
    acc[industry.category].push(industry)
    return acc
  }, {} as Record<string, IndustryItem[]>)

  return (
    <div className="cmp-cmp-container responsivegrid full-width-constraint">
      <div className="cmp-container" style={{ backgroundColor: 'rgb(255,255,255)' }}>
        <div className="industries-section ui-vs-top--lg ui-vs-bottom--lg">
          
          {/* 行业介绍 */}
          <div className="industries-intro">
            <div className="title">
              <div className="cmp-title">
                <h2 className="cmp-title__text">专注行业</h2>
              </div>
            </div>
            <div className="text">
              <div className="cmp-text">
                <p>我们专注于数字科技领域的深度行业分析，为投资决策和战略规划提供专业支撑</p>
              </div>
            </div>
          </div>

          {/* 按分类展示行业 */}
          {Object.entries(industriesByCategory).map(([category, categoryIndustries]) => (
            <div key={category} className="industry-category">
              <div className="category-header">
                <h3 className="category-title">{category}</h3>
                <p className="category-description">
                  {category === '数字基础设施' && '数字经济发展的基础支撑'}
                  {category === '数字技术' && '推动数字化转型的核心技术'}
                  {category === '数字应用' && '数字技术在垂直行业的应用'}
                </p>
              </div>
              
              <div className="industries-grid">
                {categoryIndustries.map((industry) => (
                  <div key={industry.id} className="industry-card">
                    <div className="industry-card__image">
                      <Link href={industry.href}>
                        <Image
                          src={industry.image}
                          alt={industry.name}
                          width={400}
                          height={250}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Link>
                      <div className="industry-card__category">
                        {industry.category}
                      </div>
                    </div>
                    
                    <div className="industry-card__content">
                      <h4 className="industry-card__title">
                        <Link href={industry.href}>
                          {industry.name}
                        </Link>
                      </h4>
                      
                      <p className="industry-card__title-en">
                        {industry.nameEn}
                      </p>
                      
                      <p className="industry-card__description">
                        {industry.description}
                      </p>
                      
                      <div className="industry-card__stats">
                        <div className="stat-item">
                          <span className="stat-label">市场规模</span>
                          <span className="stat-value">{industry.marketSize}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">增长率</span>
                          <span className="stat-value">{industry.growthRate}</span>
                        </div>
                      </div>
                      
                      <div className="industry-card__trends">
                        <h5>关键趋势：</h5>
                        <ul>
                          {industry.keyTrends.map((trend, index) => (
                            <li key={index}>{trend}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link href={industry.href} className="industry-card__link">
                        深入了解 →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
