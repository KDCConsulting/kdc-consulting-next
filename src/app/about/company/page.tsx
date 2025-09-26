import type { Metadata } from "next"
import { CompanyIntro } from "@/components/sections/CompanyIntro"
import { ValuesSection } from "@/components/sections/ValuesSection"
import { TeamSection } from "@/components/sections/TeamSection"
import "@/styles/about.css"
import "@/styles/qiuzhi.css"
export const metadata: Metadata = {
  title: "公司简介_科智咨询",
  description: "科智咨询是科智集团旗下咨询服务品牌，专注于数字科技领域的专业咨询服务机构。",
  keywords: "科智咨询公司简介,科智集团,数字科技咨询",
  openGraph: {
    title: "公司简介_科智咨询",
    description: "科智咨询是科智集团旗下咨询服务品牌，专注于数字科技领域的专业咨询服务机构。",
    type: "website",
  },
}

export default function CompanyPage() {
  return (
    <div>
      {/* 公司简介Banner - 全宽 */}
      <div className="banner about2">
			<div className="root responsivegrid">

				<h2>数字科技领域专业咨询服务机构</h2>
				<p style={{ fontSize: "20px" }}>
					助力企业科学决策，推动数字产业发展
				</p>
			</div>
		</div>

      {/* 公司介绍内容 - 版心限制 */}
      
          <CompanyIntro />
    </div>
  )
}
