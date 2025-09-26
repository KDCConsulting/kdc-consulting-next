import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "新闻中心_科智咨询",
  description: "新闻中心_科智咨询",
  keywords: "新闻中心_科智咨询,科智咨询-KZ Consulting-数字科技领域专业咨询服务机构,KZ Consulting,数字科技领域专业咨询服务机构",
  openGraph: {
    title: "新闻中心_科智咨询",
    description: "新闻中心_科智咨询",
    type: "website",
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
