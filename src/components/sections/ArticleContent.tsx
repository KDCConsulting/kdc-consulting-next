interface ArticleContentProps {
  title?: string
  publishDate?: string
  content?: string
  featuredImage?: string
}

export function ArticleContent({ 
  title = "这是一个标题",
  publishDate = "2020.02.02",
  content = "",
  featuredImage = "/images/newsdetails.png"
}: ArticleContentProps) {
  // 默认内容，与HTML中的内容完全一致
  const defaultContent = `
    产品与平台开发
    通过综合工程服务，助力企业在数字化时代脱颖而出。
    欢迎访问accenture.com！为了为您提供更相关的体验，我们使用cookie来启用一些网站功能。Cookie收集和存储数据，帮助我们了解您最感兴趣的文章；允许您在社交媒体上轻松分享文章；允许我们根据您的兴趣和地点提供量身定制的内容、工作和广告；并提供许多其他站点优势。根据埃森哲的数据隐私政策，我们通过cookie和其他标识符收集和
  `

  const articleContent = content || defaultContent

  return (
    <div className="cmp-container responsivegrid article" style={{paddingRight: '30px'}}>
      <h1>{title}</h1>
      <div className="datetime">{publishDate}</div>
      <div className="flex">
        <div className="flex-left articleContent">
          <p>{articleContent}</p>
          <p>{articleContent}</p>
          <img src={featuredImage} alt="文章配图" />
          <p>{articleContent}</p>
        </div>
      </div>
    </div>
  )
}
