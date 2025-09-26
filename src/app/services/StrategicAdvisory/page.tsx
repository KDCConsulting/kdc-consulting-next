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
  title: "战略咨询服务_科智咨询",
  description: "科智咨询的战略咨询服务通过深入分析企业的内部资源和外部环境，结合行业趋势和市场需求，为企业量身定制战略方案，并在实施过程中提供指导和支持。",
  keywords: "战略咨询服务,企业战略规划,战略咨询,科智咨询",
  openGraph: {
    title: "战略咨询服务_科智咨询",
    description: "科智咨询的战略咨询服务通过深入分析企业的内部资源和外部环境，结合行业趋势和市场需求，为企业量身定制战略方案。",
    type: "website",
  },
}

export default async function StrategicAdvisoryPage() {
  // 获取战略咨询服务数据
  const strategicServices = await getServicesData(ServiceType.STRATEGIC)
  
  // 调试信息
  console.log('Strategic Advisory Services Data:', strategicServices)
  console.log('Number of services:', strategicServices.length)
  
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
                     <ServicesExpertise servicesData={strategicServices} serviceType={ServiceType.STRATEGIC} />

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
