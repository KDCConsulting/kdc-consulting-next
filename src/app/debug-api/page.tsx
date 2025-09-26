import { homepageApi } from '@/lib/homepage-api'

export default async function DebugApiPage() {
  let homepageData
  let error: string | null = null

  try {
    homepageData = await homepageApi.getAllHomepageData()
  } catch (err) {
    error = err instanceof Error ? err.message : '未知错误'
    console.error('API调试错误:', err)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>API调试页面</h1>
      
      {error && (
        <div style={{ color: 'red', marginBottom: '20px' }}>
          <h2>错误信息:</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <h2>首页数据:</h2>
        <pre style={{ background: '#f5f5f5', padding: '10px', overflow: 'auto' }}>
          {JSON.stringify(homepageData, null, 2)}
        </pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>轮播图数据 ({homepageData?.bannerSlides?.length || 0} 条):</h2>
        {(homepageData?.bannerSlides?.length || 0) > 0 ? (
          <div>
            {homepageData?.bannerSlides?.map((slide, index) => (
              <div key={index} style={{ 
                border: '1px solid #ddd', 
                padding: '10px', 
                marginBottom: '10px',
                borderRadius: '4px'
              }}>
                <h3>Slide {index + 1}</h3>
                <p><strong>Title:</strong> {slide.Title}</p>
                <p><strong>Description:</strong> {slide.Description}</p>
                <p><strong>Image URL:</strong> {slide.Image?.url}</p>
                <p><strong>Link:</strong> {slide.Link}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'red' }}>没有轮播图数据</p>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>成功案例数据 ({homepageData?.indexCases?.length || 0} 条):</h2>
        {(homepageData?.indexCases?.length || 0) > 0 ? (
          <div>
            {homepageData?.indexCases?.map((caseItem, index) => (
              <div key={index} style={{ 
                border: '1px solid #ddd', 
                padding: '10px', 
                marginBottom: '10px',
                borderRadius: '4px'
              }}>
                <h3>Case {index + 1}</h3>
                <p><strong>Title:</strong> {caseItem.Title}</p>
                <p><strong>Description:</strong> {caseItem.Description}</p>
                <p><strong>Image URL:</strong> {caseItem.Image?.url}</p>
                <p><strong>Link:</strong> {caseItem.Link}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'red' }}>没有成功案例数据</p>
        )}
      </div>
    </div>
  )
}
