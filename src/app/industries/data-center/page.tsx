import type { Metadata } from "next"
import { DataCenterIntro } from "@/components/sections/DataCenterIntro"
import { DataCenterInsights } from "@/components/sections/DataCenterInsights"
import { DataCenterResources } from "@/components/sections/DataCenterResources"
import { DataCenterCases } from "@/components/sections/DataCenterCases"
import "@/styles/kzgc.css"
import "@/styles/fuwu.css"

export const metadata: Metadata = {
  title: "数据中心 | 行业深度分析",
  description: "AI驱动，数据中心行业乘势而上。科智咨询深度分析数据中心行业发展趋势，提供专业的行业洞察和咨询服务。",
  keywords: "数据中心,IDC,液冷技术,绿色数据中心,边缘计算,AI算力",
  openGraph: {
    title: "数据中心 | 行业深度分析",
    description: "AI驱动，数据中心行业乘势而上。科智咨询深度分析数据中心行业发展趋势，提供专业的行业洞察和咨询服务。",
    type: "website",
  },
}

export default function DataCenterPage() {
  return (
    <div>
      {/* 页面头部 - 全宽 */}
      <div className="banner hangye" style={{backgroundImage: 'url(https://www.kzconsulting.cn/resource/image/20231206/917136684645089280.jpg)'}}>
        <div className="root responsivegrid">
          <h2>数据中心</h2>
          <p>AI驱动，数据中心行业乘势而上。科智咨询深度分析数据中心行业发展趋势，提供专业的行业洞察和咨询服务。<br />
          数据中心作为数字经济的核心基础设施，正在经历前所未有的变革。AI技术的快速发展为数据中心带来了新的机遇和挑战。</p>
        </div>
      </div>
      <div  className="root responsivegrid">
        
      {/* AI驱动介绍 - 版心限制 */}
      <div className="container responsivegrid">
        <div className="cmp-container">
          <DataCenterIntro />
        </div>
      </div>

      {/* 洞察与观点 - 全宽 */}
      <DataCenterInsights />

      {/* 资源与能力 - 全宽 */}
      <DataCenterResources />

      {/* 成功案例 - 全宽 */}
      <DataCenterCases />
      </div>
    </div>
  )
}
