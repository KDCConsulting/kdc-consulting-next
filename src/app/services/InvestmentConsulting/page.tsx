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
  title: "投资咨询服务_科智咨询",
  description: "科智咨询的投资咨询服务为投资机构和企业提供专业的投资决策支持，包括投资机会评估、尽职调查、风险评估和投资组合优化等服务。",
  keywords: "投资咨询服务,投资决策,尽职调查,风险评估,科智咨询",
  openGraph: {
    title: "投资咨询服务_科智咨询",
    description: "科智咨询的投资咨询服务为投资机构和企业提供专业的投资决策支持，包括投资机会评估、尽职调查、风险评估和投资组合优化等服务。",
    type: "website",
  },
}

export default async function InvestmentConsultingPage() {
  // 获取投资咨询服务数据
  const investmentServices = await getServicesData(ServiceType.INVESTMENT)
  
  // 调试信息
  console.log('Investment Consulting Services Data:', investmentServices)
  console.log('Number of services:', investmentServices.length)
  
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
              <ServicesExpertise servicesData={investmentServices} serviceType={ServiceType.INVESTMENT} />

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
