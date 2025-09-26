import type { Metadata } from "next"
import { TeamSection } from "@/components/sections/TeamSection"
import { OurWork } from "@/components/sections/OurWork"
import "@/styles/about.css"
import "@/styles/qiuzhi.css"

export const metadata: Metadata = {
  title: "团队介绍_科智咨询",
  description: "科智咨询拥有专业的咨询团队，具备丰富的行业经验和深厚的专业能力。",
  keywords: "科智咨询团队,专业咨询师,行业专家",
  openGraph: {
    title: "团队介绍_科智咨询",
    description: "科智咨询拥有专业的咨询团队，具备丰富的行业经验和深厚的专业能力。",
    type: "website",
  },
}

export default function TeamPage() {
  return (
    <div>
      {/* 团队介绍Banner - 全宽 */}
      <div className="banner about2">
      <div className="root responsivegrid">

        <h2>数字科技领域专业咨询服务机构</h2>
        <p style={{ fontSize: "20px" }}>
          助力企业科学决策，推动数字产业发展
        </p>
      </div>
    </div>

      {/* 核心团队 - 全宽 */}
      <TeamSection />

    </div>
  )
}
