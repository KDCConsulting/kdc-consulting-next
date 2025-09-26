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
  title: "市场咨询服务_科智咨询",
  description: "科智咨询的市场咨询服务是针对企业战略和业务规划下协助企业达成商业目标的咨询服务，包括营销诊断、标杆研究、客户研究和市场监测等。",
  keywords: "市场咨询服务,市场研究,客户研究,市场监测,科智咨询",
  openGraph: {
    title: "市场咨询服务_科智咨询",
    description: "科智咨询的市场咨询服务是针对企业战略和业务规划下协助企业达成商业目标的咨询服务，包括营销诊断、标杆研究、客户研究和市场监测等。",
    type: "website",
  },
}

export default async function MarketIntelligencePage() {
  // 获取市场咨询服务数据
  const marketServices = await getServicesData(ServiceType.MARKET)
  
  // 调试信息
  console.log('Market Intelligence Services Data:', marketServices)
  console.log('Number of services:', marketServices.length)
  
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
              <ServicesExpertise servicesData={marketServices} serviceType={ServiceType.MARKET} />

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
