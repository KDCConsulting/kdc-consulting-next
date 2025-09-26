import type { Metadata } from "next"
import { AboutBanner } from "@/components/sections/AboutBanner"
import { AboutIntro } from "@/components/sections/AboutIntro"
import { AboutContent } from "@/components/sections/AboutContent"
import { OurWork } from "@/components/sections/OurWork"
import { JoinUs } from "@/components/sections/JoinUs"
import "@/styles/about.css"

export const metadata: Metadata = {
  title: "关于我们_科智咨询",
  description: "科智咨询是科智集团旗下咨询服务品牌，专注于数字科技领域的专业咨询服务机构。",
  keywords: "科智咨询的公司简介",
  openGraph: {
    title: "关于我们_科智咨询",
    description: "科智咨询是科智集团旗下咨询服务品牌，专注于数字科技领域的专业咨询服务机构。",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div>
      {/* Banner区域 - 全宽 */}
      <AboutBanner />

      {/* 我们是谁 - 版心限制 */}
      <div className="container responsivegrid aboutIntr">
      
          <AboutIntro />
      </div>

      {/* 使命愿景价值观 - 全宽 */}
      <AboutContent />

      {/* 我们的咨询工作 - 全宽 */}
      <OurWork />

      {/* 开启无限可能 - 全宽 */}
      <JoinUs />
    </div>
  )
}