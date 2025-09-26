import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { IndustriesGrid } from "@/components/sections/IndustriesGrid"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "行业分析 | 深度行业洞察",
  description: "科智咨询专注于数字科技领域的深度行业分析，涵盖数据中心、云计算、人工智能、物联网等多个前沿技术领域。",
  keywords: "行业分析,数字科技,数据中心,云计算,人工智能,物联网,区块链",
  openGraph: {
    title: "行业分析 | 深度行业洞察",
    description: "科智咨询专注于数字科技领域的深度行业分析，涵盖数据中心、云计算、人工智能、物联网等多个前沿技术领域。",
    type: "website",
  },
}

export default function IndustriesPage() {
  return (
    <main>
      {/* 页面头部 */}
      <HeroSection
        title="行业分析"
        subtitle="深度洞察"
        description="专注于数字科技领域的深度行业分析，为您提供专业的行业洞察"
        backgroundImage="/images/industries-hero.jpg"
      />

      {/* 行业网格 */}
      <IndustriesGrid />

      {/* 行动号召 */}
      <CTASection
        title="需要行业分析服务？"
        description="联系我们，获取专业的行业分析报告和咨询服务"
        subDescription="专业团队为您提供深度行业洞察"
        buttonText="立即咨询"
        buttonLink="/contact"
      />
    </main>
  )
}