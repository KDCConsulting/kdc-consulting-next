import { homepageApi } from '@/lib/homepage-api'

export default async function HomepageTestPage() {
  let homepageData = null
  let error = null

  try {
    homepageData = await homepageApi.getAllHomepageData()
  } catch (err) {
    error = err instanceof Error ? err.message : '未知错误'
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>首页 API 测试页面</h1>
      
      {error && (
        <div style={{ 
          background: '#ffebee', 
          color: '#c62828', 
          padding: '15px', 
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <h3>错误信息：</h3>
          <p>{error}</p>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* 轮播图数据 (banner-swipers) */}
        <div>
          <h2>轮播图数据 ({homepageData?.bannerSlides?.length || 0} 条)</h2>
          {(homepageData?.bannerSlides?.length || 0) > 0 ? (
            <div>
              {homepageData?.bannerSlides?.map((slide) => (
                <div key={slide.id} style={{ 
                  border: '1px solid #ddd', 
                  padding: '15px', 
                  marginBottom: '10px',
                  borderRadius: '4px'
                }}>
                  <h3>{slide.Title}</h3>
                  <p>{slide.Description}</p>
                  <p><strong>备注:</strong> {slide.Remark || '无'}</p>
                  <p><strong>链接:</strong> {slide.Link || '无'}</p>
                  {slide.Image && (
                    <img 
                      src={slide.Image.url} 
                      alt={slide.Title}
                      style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>暂无轮播图数据</p>
          )}
        </div>

        {/* 聚焦内容数据 (insights) */}
        <div>
          <h2>聚焦内容数据 (来自insights)</h2>
          <p><strong>说明:</strong> 首页聚焦内容自动使用insights栏目排序最高的3篇文章</p>
          <p><strong>API路径:</strong> /api/insights?populate=*&pagination[pageSize]=3&sort=publishedAt:desc</p>
          <p><strong>注意:</strong> 此数据在首页组件中直接获取，不在此测试页面显示</p>
        </div>

        {/* 新闻数据 (newses) */}
        <div>
          <h2>新闻数据 (来自newses)</h2>
          <p><strong>说明:</strong> 首页新闻自动使用newses栏目最新的5篇文章</p>
          <p><strong>API路径:</strong> /api/newses?populate=*&pagination[pageSize]=5&sort=publishedAt:desc</p>
          <p><strong>注意:</strong> 此数据在首页组件中直接获取，不在此测试页面显示</p>
        </div>

        {/* 案例数据 (banner-cases) */}
        <div>
          <h2>案例数据 ({homepageData?.bannerCases?.length || 0} 条)</h2>
          {(homepageData?.bannerCases?.length || 0) > 0 ? (
            <div>
              {homepageData?.bannerCases?.map((item) => (
                <div key={item.id} style={{ 
                  border: '1px solid #ddd', 
                  padding: '15px', 
                  marginBottom: '10px',
                  borderRadius: '4px'
                }}>
                  <h3>{item.attributes.title}</h3>
                  <p>{item.attributes.description}</p>
                  <p><strong>排序:</strong> {item.attributes.sortOrder}</p>
                  {item.attributes.image?.data?.attributes && (
                    <img 
                      src={item.attributes.image.data.attributes.url} 
                      alt={item.attributes.title}
                      style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>暂无案例数据</p>
          )}
        </div>

        {/* 报告数据 */}
        <div>
          <h2>报告数据</h2>
          <p><strong>说明:</strong> 使用默认静态数据，无需API配置</p>
          <div style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            borderRadius: '4px',
            background: '#f9f9f9'
          }}>
            <h4>主报告</h4>
            <p><strong>标题:</strong> 中国数据中心产业可持续发展白皮书</p>
            <p><strong>链接:</strong> /insights/whitepaper</p>
          </div>
        </div>

        {/* CTA数据 */}
        <div>
          <h2>CTA数据</h2>
          <p><strong>说明:</strong> 使用默认静态数据，无需API配置</p>
          <div style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            borderRadius: '4px',
            background: '#f9f9f9'
          }}>
            <h4>联系我们</h4>
            <p><strong>描述:</strong> 专业咨询，助力您的数字化转型</p>
            <p><strong>副描述:</strong> 我们拥有丰富的行业经验和专业团队</p>
            <p><strong>按钮文字:</strong> 立即咨询</p>
            <p><strong>按钮链接:</strong> /contact</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#f5f5f5', borderRadius: '4px' }}>
        <h3>API 配置信息：</h3>
        <p><strong>API URL:</strong> https://energized-dawn-75ac41de31.strapiapp.com</p>
        <p><strong>状态:</strong> {error ? '❌ 连接失败' : '✅ 连接成功'}</p>
        <p><strong>测试时间:</strong> {new Date().toLocaleString('zh-CN')}</p>
        <p><strong>说明:</strong> 如果首页API没有数据，系统会自动使用洞察和新闻API作为备选数据源</p>
      </div>
    </div>
  )
}



