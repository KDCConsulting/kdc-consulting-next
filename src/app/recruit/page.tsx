import type { Metadata } from "next"
import { RecruitBanner } from "@/components/sections/RecruitBanner"
import { RecruitIntro } from "@/components/sections/RecruitIntro"
import { RecruitRequirements } from "@/components/sections/RecruitRequirements"
import { RecruitApply } from "@/components/sections/RecruitApply"
import "@/styles/qiuzhi.css"

export const metadata: Metadata = {
  title: "加入我们_科智咨询",
  description: "科智咨询对分析师的期许和相关招聘要求",
  keywords: "科智咨询招聘页面",
  openGraph: {
    title: "加入我们_科智咨询",
    description: "科智咨询对分析师的期许和相关招聘要求",
    type: "website",
  },
}

export default function RecruitPage() {
  return (
    <div>
      {/* Banner区域 - 全宽 */}
      <RecruitBanner />

      {/* 公司介绍 - 版心限制 */}

          <RecruitIntro />

      {/* 招聘要求 - 全宽 */}
      <RecruitRequirements />

      {/* 立即投递 - 版心限制 */}
      
          <RecruitApply />
    </div>
  )
}
