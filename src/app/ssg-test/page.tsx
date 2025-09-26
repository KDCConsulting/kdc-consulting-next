import { insightsApi, newsApi } from '@/lib/api'
import { homepageApi } from '@/lib/homepage-api'

export const revalidate = 600 // 10分钟重新验证

export default async function SSGTestPage() {
  const buildTime = new Date().toISOString()
  
  // 获取数据以测试SSG
  let insightsData = null
  let newsData = null
  let homepageData = null
  let errors = []

  try {
    const [insights, news, homepage] = await Promise.all([
      insightsApi.getInsights({ pageSize: 3 }),
      newsApi.getNews({ pageSize: 3 }),
      homepageApi.getAllHomepageData()
    ])
    
    insightsData = insights
    newsData = news
    homepageData = homepage
  } catch (error) {
    errors.push(error instanceof Error ? error.message : 'Unknown error')
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>SSG 静态生成测试页面</h1>
      
      <div style={{ 
        background: '#f0f9ff', 
        padding: '15px', 
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #0ea5e9'
      }}>
        <h2>📊 构建信息</h2>
        <p><strong>构建时间:</strong> {buildTime}</p>
        <p><strong>重新验证时间:</strong> 10分钟</p>
        <p><strong>页面类型:</strong> 静态生成 (SSG)</p>
        <p><strong>缓存策略:</strong> 增量静态再生 (ISR)</p>
      </div>

      {errors.length > 0 && (
        <div style={{ 
          background: '#fef2f2', 
          padding: '15px', 
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #ef4444'
        }}>
          <h3>❌ 错误信息</h3>
          {errors.map((error, index) => (
            <p key={index} style={{ color: '#dc2626' }}>{error}</p>
          ))}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
        {/* 洞察数据 */}
        <div>
          <h2>洞察数据 ({insightsData?.data?.length || 0} 条)</h2>
          {(insightsData?.data?.length || 0) > 0 ? (
            <div>
              {insightsData?.data?.slice(0, 3).map((insight) => (
                <div key={insight.id} style={{ 
                  border: '1px solid #ddd', 
                  padding: '10px', 
                  marginBottom: '10px',
                  borderRadius: '4px'
                }}>
                  <h4>{insight.title}</h4>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {new Date(insight.publishedAt).toLocaleDateString('zh-CN')}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>暂无数据</p>
          )}
        </div>

        {/* 新闻数据 */}
        <div>
          <h2>新闻数据 ({newsData?.data?.length || 0} 条)</h2>
          {(newsData?.data?.length || 0) > 0 ? (
            <div>
              {newsData?.data?.slice(0, 3).map((news) => (
                <div key={news.id} style={{ 
                  border: '1px solid #ddd', 
                  padding: '10px', 
                  marginBottom: '10px',
                  borderRadius: '4px'
                }}>
                  <h4>{news.title}</h4>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {new Date(news.publishedAt).toLocaleDateString('zh-CN')}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>暂无数据</p>
          )}
        </div>

        {/* 首页数据 */}
        <div>
          <h2>首页数据</h2>
          <div style={{ 
            border: '1px solid #ddd', 
            padding: '10px', 
            borderRadius: '4px'
          }}>
            <p><strong>轮播图:</strong> {homepageData?.bannerSlides?.length || 0} 条</p>
            <p><strong>案例:</strong> {homepageData?.bannerCases?.length || 0} 条</p>
            <p><strong>状态:</strong> {homepageData ? '✅ 正常' : '❌ 异常'}</p>
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        background: '#f8fafc', 
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        <h3>🔧 测试功能</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4>重新验证API</h4>
            <p>访问 <code>/api/revalidate</code> 查看API状态</p>
            <p>使用POST请求手动触发重新验证</p>
          </div>
          <div>
            <h4>定时任务</h4>
            <p>运行 <code>npm run scheduler</code> 启动定时任务</p>
            <p>运行 <code>npm run revalidate</code> 手动重新编译</p>
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        background: '#fef3c7', 
        borderRadius: '8px',
        border: '1px solid #f59e0b'
      }}>
        <h4>💡 说明</h4>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li>此页面在构建时预渲染为静态HTML</li>
          <li>每10分钟自动重新验证和更新内容</li>
          <li>数据来自Strapi API，支持增量更新</li>
          <li>支持手动触发重新验证</li>
        </ul>
      </div>
    </div>
  )
}
