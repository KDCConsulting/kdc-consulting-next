import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "科智洞察_科智咨询",
  description: "科智洞察_科智咨询",
  keywords: "科智洞察_科智咨询,科智咨询-KZ Consulting-数字科技领域专业咨询服务机构,KZ Consulting,数字科技领域专业咨询服务机构",
  openGraph: {
    title: "科智洞察_科智咨询",
    description: "科智洞察_科智咨询",
    type: "website",
  },
}

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
