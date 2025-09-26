import { insightsApi, newsApi } from '@/lib/api'

export default async function ApiTestPage() {
  let insightsData = null
  let newsData = null
  let error = null

  try {
    // 测试洞察API
    const insightsResponse = await insightsApi.getInsights({ pageSize: 3 })
    insightsData = insightsResponse.data

    // 测试新闻API
    const newsResponse = await newsApi.getNews({ pageSize: 3 })
    newsData = newsResponse.data
  } catch (err) {
    error = err instanceof Error ? err.message : '未知错误'
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>API 测试页面</h1>
      
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
        {/* 洞察数据 */}
        <div>
          <h2>洞察数据 ({insightsData?.length || 0} 条)</h2>
          {insightsData ? (
            <div>
              {insightsData.map((insight) => (
                <div key={insight.id} style={{ 
                  border: '1px solid #ddd', 
                  padding: '15px', 
                  marginBottom: '10px',
                  borderRadius: '4px'
                }}>
                  <h3>{insight.title}</h3>
                  <p>{insight.Description || '暂无描述'}</p>
                  <p><strong>Document ID:</strong> {insight.documentId}</p>
                  <p><strong>发布时间:</strong> {new Date(insight.createdAt).toLocaleDateString('zh-CN')}</p>
                  {insight.PcCover && (
                    <img 
                      src={insight.PcCover.url} 
                      alt={insight.title}
                      style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>暂无数据</p>
          )}
        </div>

        {/* 新闻数据 */}
        <div>
          <h2>新闻数据 ({newsData?.length || 0} 条)</h2>
          {newsData ? (
            <div>
              {newsData.map((news) => (
                <div key={news.id} style={{ 
                  border: '1px solid #ddd', 
                  padding: '15px', 
                  marginBottom: '10px',
                  borderRadius: '4px'
                }}>
                  <h3>{news.title}</h3>
                  <p>{news.Description || '暂无描述'}</p>
                  <p><strong>作者:</strong> {news.Author || '未知'}</p>
                  <p><strong>行业:</strong> {news.industrys || '未分类'}</p>
                  <p><strong>发布时间:</strong> {new Date(news.publishedAt).toLocaleDateString('zh-CN')}</p>
                  {news.PcCover && (
                    <img 
                      src={news.PcCover.url} 
                      alt={news.title}
                      style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>暂无数据</p>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#f5f5f5', borderRadius: '4px' }}>
        <h3>API 配置信息：</h3>
        <p><strong>API URL:</strong> https://energized-dawn-75ac41de31.strapiapp.com</p>
        <p><strong>状态:</strong> {error ? '❌ 连接失败' : '✅ 连接成功'}</p>
        <p><strong>测试时间:</strong> {new Date().toLocaleString('zh-CN')}</p>
      </div>
    </div>
  )
}
