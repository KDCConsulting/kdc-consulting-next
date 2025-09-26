import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { documentId: string } }): Promise<Metadata> {
  // 这里可以根据documentId获取新闻标题来动态生成metadata
  // 暂时使用默认值
  return {
    title: "新闻详情_科智咨询",
    description: "科智咨询新闻详情页面",
    keywords: "科智咨询,新闻详情,KZ Consulting",
    openGraph: {
      title: "新闻详情_科智咨询",
      description: "科智咨询新闻详情页面",
      type: "article",
    },
  }
}

export default function NewsDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
