import type { Metadata } from "next"
import { ServicesBanner } from "@/components/sections/ServicesBanner"
import { ServicesIntro } from "@/components/sections/ServicesIntro"
import { ServicesExpertise } from "@/components/sections/ServicesExpertise"
import { ServicesInsights } from "@/components/sections/ServicesInsights"
import { ServicesCases } from "@/components/sections/ServicesCases"
import { getServicesData } from "@/lib/services-api"
import { ServiceType } from "@/types/services"
import "@/styles/kzgc.css"
import "@/styles/fuwu.css"

export const metadata: Metadata = {
  title: "行业研究服务_科智咨询",
  description: "科智咨询的行业研究服务通过深度分析行业发展趋势、竞争格局、技术变革等关键因素，为企业提供专业的行业洞察和决策支持。",
  keywords: "行业研究服务,行业分析,市场趋势,竞争分析,科智咨询",
  openGraph: {
    title: "行业研究服务_科智咨询",
    description: "科智咨询的行业研究服务通过深度分析行业发展趋势、竞争格局、技术变革等关键因素，为企业提供专业的行业洞察和决策支持。",
    type: "website",
  },
}

export default async function IndustryAnalysisPage() {
  // 获取行业研究服务数据
  const industryServices = await getServicesData(ServiceType.INDUSTRY)
  
  // 调试信息
  console.log('Industry Analysis Services Data:', industryServices)
  console.log('Number of services:', industryServices.length)
  
  return (
    <div>
      {/* Banner区域 - 全宽 */}
      <ServicesBanner />

      <div className="root container responsivegrid">
        <div className="cmp-container">
          <main className="container responsivegrid">
            <div id="main" className="cmp-container">
              {/* 服务介绍 - 版心限制 */}
              <ServicesIntro />

              {/* 服务专长 - 全宽 */}
              <ServicesExpertise servicesData={industryServices} serviceType={ServiceType.INDUSTRY} />

              {/* 科智视角 - 全宽 */}
              <ServicesInsights />

              {/* 成功案例 - 全宽 */}
              <ServicesCases />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
