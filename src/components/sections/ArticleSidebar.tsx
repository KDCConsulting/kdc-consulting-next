interface AuthorInfo {
  name: string
  title: string
  email: string
  avatar: string
}

interface ArticleSidebarProps {
  authors?: AuthorInfo[]
}

export function ArticleSidebar({ authors = [] }: ArticleSidebarProps) {
  // 默认作者信息，与HTML中的内容完全一致
  const defaultAuthors: AuthorInfo[] = [
    {
      name: "嘎嘎嘎",
      title: "古文",
      email: "asschhj@qq.com",
      avatar: "/images/banner-1.png"
    },
    {
      name: "嘎嘎嘎",
      title: "古文", 
      email: "asschhj@qq.com",
      avatar: "/images/banner-1.png"
    }
  ]

  const authorList = authors.length > 0 ? authors : defaultAuthors

  return (
    <div className="flex-right">
      {authorList.map((author, index) => (
        <div key={index} className="flex-item">
          <img src={author.avatar} alt={author.name} />
          <div className="intr">
            <h4>{author.name} <span>{author.title}</span></h4>
            <p>{author.email}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
