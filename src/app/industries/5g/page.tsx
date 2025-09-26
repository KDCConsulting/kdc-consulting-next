import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { industriesChannelsApi, type IndustryChannel } from '@/lib/api'
import "@/styles/kzgc.css"
import "@/styles/fuwu.css"

// 获取5G行业详情数据
async function getIndustryDetail(): Promise<IndustryChannel | null> {
  try {
    console.log('开始获取5G行业详情数据...')
    
    // 首先尝试根据documentId直接获取
    console.log('尝试根据documentId获取5G数据...')
    try {
      const responseById = await industriesChannelsApi.getIndustryChannelByDocumentId('b044ubv8tqy5o23vm8hmzrvu')
      console.log('根据documentId获取结果:', responseById)
      
      if (responseById.data && responseById.data.length > 0) {
        console.log('找到5G数据(通过documentId):', responseById.data[0])
        return responseById.data[0]
      }
    } catch (error) {
      console.log('根据documentId获取失败:', error)
    }
    
    // 尝试根据channelName获取
    console.log('尝试根据channelName获取5G数据...')
    try {
      const responseByName = await industriesChannelsApi.getIndustryChannelByTitle('5G')
      console.log('根据channelName获取结果:', responseByName)
      
      if (responseByName.data && responseByName.data.length > 0) {
        console.log('找到5G数据(通过channelName):', responseByName.data[0])
        return responseByName.data[0]
      }
    } catch (error) {
      console.log('根据channelName获取失败:', error)
    }
    
    // 测试直接API调用
    console.log('测试直接API调用...')
    try {
      const directResponse = await fetch('https://energized-dawn-75ac41de31.strapiapp.com/api/industries-channels?populate=*', {
        headers: {
          'Authorization': `Bearer eb4477ce3f84462840281742ee5af41b9f30d671b7b8e13140eb3ae24eddef6f91f40612434fa6e9009fb476f5cb642725f5caa7e9ca364444a5c2c114a6c9ff853b9d3a5c6a5734021a1b350141610b9df36aff704bba0d1fb8e724ccaf3ac2addc95e2a0c4cb7db4be2f0690cb72eb186c812984cb239c2c968c03007fef9f`,
          'Content-Type': 'application/json',
        }
      })
      const directData = await directResponse.json()
      console.log('直接API调用结果:', directData)
      
      if (directData.data && directData.data.length > 0) {
        const fiveGData = directData.data.find((item: IndustryChannel) => 
          item.channelName === '5G' || item.documentId === 'b044ubv8tqy5o23vm8hmzrvu'
        )
        if (fiveGData) {
          console.log('直接API调用找到5G数据:', fiveGData)
          return fiveGData
        }
      }
    } catch (error) {
      console.log('直接API调用失败:', error)
    }
    
    // 最后尝试获取所有数据
    console.log('获取所有industries-channels数据...')
    const allResponse = await industriesChannelsApi.getIndustriesChannels({ pageSize: 100 })
    console.log('API响应:', allResponse)
    
    if (allResponse.data && allResponse.data.length > 0) {
      console.log('找到数据条数:', allResponse.data.length)
      console.log('所有数据标题:', allResponse.data.map(item => item.channelName))
      
      // 查找5G数据 - 根据channelName或documentId
      const fiveGData = allResponse.data.find(item => 
        item.channelName.toLowerCase().includes('5g') || 
        item.channelName.includes('5G') ||
        item.documentId === 'b044ubv8tqy5o23vm8hmzrvu'
      )
      
      if (fiveGData) {
        console.log('找到5G数据(通过搜索):', fiveGData)
        return fiveGData
      }
    }
    
    console.log('未找到5G数据，返回默认数据')
    // 返回默认的5G数据
    return {
      id: 1,
      documentId: '5g-default',
      channelName: '5G',
      channelDescription: [
        {
          type: 'paragraph',
          children: [
            {
              text: '5G，即第五代移动通信技术，以超高速度、大容量、低延迟等特点为社会经济带来巨大变革，成为数字信息基础设施的创新引擎。5G不仅进一步提升个人用户的移动互联网体验，更与实体经济融合，部分应用场景加速规模落地。全球5G行业正迎来爆发式增长，中国5G发展驶入快车道，行业前景广阔，引领创新发展。',
              type: 'text'
            }
          ]
        }
      ],
      industryIntroductionTitle: '5G动能亟待释放',
      industryIntroductionContent: [
        {
          type: 'paragraph',
          children: [
            {
              text: '5G为汽车行业带来发展机遇，助力智能驾驶、智能网联汽车等领域的突破。加快数据中心产业升级优化，高速率低时延促进数据价值释放。而在传统行业层面，5G技术结合大数据、云计算，有效提升制造业数字化转型和自动化生产效率，培育数字发展新动能。',
              type: 'text'
            }
          ]
        }
      ],
      ResourcesandCapabilitiesTitle: '洞察与观点',
      ResourcesandCapabilitiesBriefIntroduction: undefined,
      channelBanner: {
        id: 1,
        documentId: 'banner-default',
        name: 'banner-5g.jpg',
        alternativeText: '5G Banner',
        caption: undefined,
        width: 1920,
        height: 350,
        formats: {},
        hash: 'default',
        ext: '.jpg',
        mime: 'image/jpeg',
        size: 100,
        url: '/images/banner-5g.jpg',
        previewUrl: undefined,
        provider: 'local',
        provider_metadata: undefined,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      industryIntroductionImage: {
        id: 2,
        documentId: 'intro-default',
        name: '5g-industry-image.jpg',
        alternativeText: '5G Industry Image',
        caption: undefined,
        width: 480,
        height: 270,
        formats: {},
        hash: 'default',
        ext: '.jpg',
        mime: 'image/jpeg',
        size: 50,
        url: '/images/5g-industry-image.jpg',
        previewUrl: undefined,
        provider: 'local',
        provider_metadata: undefined,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      ResourcesandCapabilitiesComponents: [
        {
          id: 1,
          Title: '1',
          Description: '项目案例',
          Symbol: '+',
          Number: '200'
        },
        {
          id: 2,
          Title: '2',
          Description: '位专家资源',
          Symbol: '+',
          Number: '3000'
        },
        {
          id: 3,
          Title: '3',
          Description: '精准把握不同行业的潜力空间',
          Symbol: undefined,
          Number: '5G'
        }
      ],
      SuccessfulCasesComponents: [
        {
          id: 1,
          Title: '5G技术工业领域应用市场研究',
          Description: '通过对5G技术在工业领域的需求和发展趋势进行分析，预测市场前景，为企业提供投资和发展决策支持'
        },
        {
          id: 2,
          Title: '中国5G商业化行业应用项目研究',
          Description: '深入研究中国5G商业化行业应用项目的基本情况和商业前景，结合市场需求和竞争情况，评估项目的可行性和投资价值'
        },
        {
          id: 3,
          Title: '运营商5G建设规划',
          Description: '针对5G基础设施核心连接与平台建设建设解决方案的整体规划'
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString()
    }
  } catch (error) {
    console.error('获取5G行业详情失败:', error)
    return null
  }
}

// 生成页面元数据
export async function generateMetadata(): Promise<Metadata> {
  const industry = await getIndustryDetail()
  
  if (!industry) {
    return {
      title: '5G行业咨询服务_科智咨询',
      description: '科智咨询在5G在各行业的应用场景中具有深度研究经验，积累了海内外200+项目案例。'
    }
  }

  return {
    title: `${industry.channelName}_科智咨询`,
    description: renderContent(industry.channelDescription) || '科智咨询在5G在各行业的应用场景中具有深度研究经验，积累了海内外200+项目案例。'
  }
}

// 渲染富文本内容
function renderContent(content: unknown): string {
  if (!content) return ''
  
  if (typeof content === 'string') {
    return content
  }
  
  if (Array.isArray(content)) {
    return content.map(item => {
      if (typeof item === 'object' && item !== null && 'type' in item) {
        const typedItem = item as { 
          type: string
          children?: Array<{ text?: string; type?: string }> 
        }
        
        if (typedItem.children) {
          const text = typedItem.children.map(child => child.text || '').join('')
          
          // 根据类型添加HTML标签
          if (typedItem.type === 'paragraph') {
            return `<p>${text}</p>`
          } else if (typedItem.type === 'heading') {
            return `<h3>${text}</h3>`
          } else if (typedItem.type === 'list') {
            return `<ul><li>${text}</li></ul>`
          } else {
            return text
          }
        }
      }
      return String(item)
    }).join('')
  }
  
  return String(content)
}

export default async function Industry5GPage() {
  const industry = await getIndustryDetail()
  
  console.log('页面渲染 - industry数据:', industry)
  
  if (!industry) {
    console.log('未找到industry数据，显示404页面')
    notFound()
  }

  // 获取banner图片URL
  const bannerImageUrl = industry.channelBanner?.url || '/images/banner-5g.jpg'
  
  console.log('使用industry数据渲染页面:', {
    channelName: industry.channelName,
    industryIntroductionTitle: industry.industryIntroductionTitle,
    channelDescription: industry.channelDescription,
    industryIntroductionContent: industry.industryIntroductionContent
  })

  return (
    <div>
      <div className="banner hangye" style={{backgroundImage: `url(${bannerImageUrl})`}}>
        <div className="root responsivegrid">
          <h2>{industry.channelName}</h2>
          <p dangerouslySetInnerHTML={{ 
            __html: renderContent(industry.channelDescription) || 
            '5G，即第五代移动通信技术，以超高速度、大容量、低延迟等特点为社会经济带来巨大变革，成为数字信息基础设施的创新引擎。<br />5G不仅进一步提升个人用户的移动互联网体验，更与实体经济融合，部分应用场景加速规模落地。全球5G行业正迎来爆发式增长，中国5G发展驶入快车道，行业前景广阔，引领创新发展。'
          }} />
        </div>
      </div>

      <div className="root container responsivegrid">
        <div className="cmp-container">
          <main className="container responsivegrid">
            <div id="main" className="cmp-container">
              <div className="container responsivegrid full-width-constraint">
                <div id="container-855c1cc1e1" className="cmp-container mainIntr">
                  <div className="flex">
                    <div className="flex-left">
                      <h2>{industry.industryIntroductionTitle || '5G动能亟待释放'}</h2>
                      <p dangerouslySetInnerHTML={{ 
                        __html: renderContent(industry.industryIntroductionContent) || 
                        '5G为汽车行业带来发展机遇，助力智能驾驶、智能网联汽车等领域的突破。加快数据中心产业升级优化，高速率低时延促进数据价值释放。而在传统行业层面，5G技术结合大数据、云计算，有效提升制造业数字化转型和自动化生产效率，培育数字发展新动能。'
                      }} />
                    </div>
                    <div className="flex-right">
                      <img 
                        src={industry.industryIntroductionImage?.url || '/images/5g-industry-image.jpg'} 
                        alt={industry.channelName} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="container responsivegrid full-width-constraint">
                <div id="container-a94e95ebcc" className="cmp-container kzsj" style={{backgroundColor: 'rgb(242,242,242)'}}>
                  <div className="fourcellblock ui-vs-top--lg ui-vs-bottom--bs">
                    <div className="cmp-fourcellblock">
                      <div className="cmp-four-cell">
                        <div className="cmp-four-cell__first-row cmp-four-cell__first-row--2-1 cmp-four-cell__first-row--cta-row">
                          <div className="cmp-four-cell__first-col">
                            <div className="container responsivegrid">
                              <div id="container-aee795ba9c" className="cmp-container">
                                <div className="title cmp-title--section ui-vs-bottom--md" style={{}}>
                                  <div className="cmp-title">
                                    <h1 className="cmp-title__text">{industry.ResourcesandCapabilitiesTitle || '洞察与观点'}</h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cmp-four-cell__second-row cmp-four-cell__second-row--2-1-inline">
                          <div className="cmp-four-cell__first-col" style={{flexBasis: 'auto'}}>
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

              <div className="container responsivegrid full-width-constraint">
                <div className="cmp-container">
                  <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
                    <div className="cmp-card-listing cmp-card-listing--cta-2-to-1">
                      <div className="cmp-card-listing_first-row">
                        <div className="cmp-card-listing_first-row_left-col">
                          <div className="container responsivegrid">
                            <div id="container-a1f99f1cc2" className="cmp-container">
                              <div className="title cmp-title--section ui-vs-bottom--md">
                                <div id="title-e8d5457303" className="cmp-title">
                                  <h2 className="cmp-title__text">资源与能力</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cmp-card-listing_second-row">
                        <div className="container responsivegrid">
                          <div id="container-cd920cd207" className="cmp-container">
                            <div className=" ziyuan" style={{padding: '0 15px'}}>
                              {/* 空的ziyuan div用于样式 */}
                            </div>
                            <div className="flex ziyuan">
                              {industry.ResourcesandCapabilitiesComponents.map((component, index) => (
                                <div key={component.id || index} className="flexItem">
                                  <h3>
                                    {component.Number}
                                    {component.Symbol && <span>{component.Symbol}</span>}
                                  </h3>
                                  <p style={{wordBreak: 'keep-all'}}>{component.Description}</p>
                              </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="button cmp-card-listing_button cmp-button--text-link cmp-button__cta-arrow--right">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container responsivegrid">
                <div id="container-0f2cb07b88" className="cmp-container">
                  <div className="container responsivegrid full-width-constraint">
                    <div id="container-69d673454b" className="cmp-container case">
                      <div className="title cmp-title--section ui-vs-bottom--md">
                        <div className="cmp-title">
                          <h2 className="cmp-title__text">成功案例</h2>
                        </div>
                      </div>
                      <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
                        <div className="cmp-card-listing cmp-card-listing--cta-2-to-1">
                          <div className="cmp-card-listing_first-row">
                            <div className="cmp-card-listing_first-row_left-col">
                              <div className="container responsivegrid">
                                <div id="container-a04bceaf73" className="cmp-container">
                                  <div className="title cmp-title--section ui-vs-bottom--md">
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cmp-card-listing_first-row_right-col">
                              <div className="container responsivegrid">
                                <div id="container-b06afecf51" className="cmp-container">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cmp-card-listing_second-row">
                            <div className="container responsivegrid">
                              <div id="container-8a0b23ed68" className="cmp-container newsList">
                                {industry.SuccessfulCasesComponents.map((caseItem, index) => {
                                  // 优先使用API返回的图片，否则使用默认图片
                                  const caseImages = [
                                    '/images/indexanli1.png',
                                    '/images/indexanli2.png', 
                                    '/images/indexanli3.png'
                                  ]
                                  const imageSrc = caseItem.Image?.url || caseImages[index] || '/images/indexanli1.png'
                                  
                                  return (
                                    <div key={caseItem.id || index} className="teaser dcc dcc-imagefoldtag card has-ellipsis has-tooltip">
                                  <div className="cmp-teaser">
                                    <div className="cmp-teaser__image">
                                      <div className="cmp-image" itemScope>
                                            <a 
                                              className="cmp-image__link" 
                                              target="_self" 
                                              href={caseItem.Link || "javascript:;"}
                                            >
                                              <img 
                                                src={imageSrc} 
                                                alt={caseItem.Image?.alternativeText || caseItem.Title} 
                                              />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="cmp-teaser__content">
                                      <h3 className="cmp-teaser__title">
                                            <a 
                                              className="cmp-teaser__title-link" 
                                              href={caseItem.Link || "javascript:;"}
                                            >
                                              {caseItem.Title}
                                            </a>
                                      </h3>
                                          {caseItem.Category && (
                                            <div className="cmp-teaser__category">
                                              <span className="category-tag">{caseItem.Category}</span>
                                      </div>
                                          )}
                                      <div className="cmp-teaser__description" data-mark="jcr:description">
                                        <p>
                                              <span className="cmp-text__paragraph-default">{caseItem.Description}</span>
                                        </p>
                                      </div>
                                          {caseItem.Tags && caseItem.Tags.length > 0 && (
                                            <div className="cmp-teaser__tags">
                                              {caseItem.Tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="tag">{tag}</span>
                                              ))}
                                    </div>
                                          )}
                                </div>
                                      </div>
                                    </div>
                                  )
                                })}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* 客户端脚本 */}
      <Script id="industry-page-script" strategy="afterInteractive">
        {`
          // 等待jQuery加载完成
          function waitForJQuery(callback) {
            if (typeof window.$ !== 'undefined') {
              callback();
            } else {
              setTimeout(() => waitForJQuery(callback), 100);
            }
          }
          
          waitForJQuery(function() {
            // 添加导航菜单激活状态
            const navItems = document.querySelectorAll('.cmp-global-header__nav-menu .cmp-global-header__nav-menu-item');
            if (navItems.length > 2) {
              navItems[2].classList.add('active');
            }

            // 添加Swiper缩放适配
            const adaptSwiperScale = () => {
              const swiperWidth = 2080;
              const documentWidth = window.innerWidth;
              if (documentWidth < 1800) {
                const swiperElements = document.querySelectorAll('.swiperIndexCase');
                swiperElements.forEach((element) => {
                  if (element && element.offsetParent !== null) {
                    element.style.transform = 'scale(' + documentWidth/swiperWidth + ') translate(-50%)';
                  }
                });
              }
            }

            // 初始化
            adaptSwiperScale();
            window.addEventListener('resize', adaptSwiperScale);
          });
        `}
      </Script>

      {/* 添加样式 */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .cmp-teaser__category {
            margin-bottom: 8px;
          }
          .category-tag {
            display: inline-block;
            background-color: #0091ff;
            color: white;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
          }
          .cmp-teaser__tags {
            margin-top: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
          }
          .tag {
            display: inline-block;
            background-color: #f0f0f0;
            color: #666;
            padding: 2px 6px;
            border-radius: 8px;
            font-size: 11px;
          }
        `
      }} />
    </div>
  )
}
