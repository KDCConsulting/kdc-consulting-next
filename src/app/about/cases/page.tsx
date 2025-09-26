import type { Metadata } from "next"
import { CasesCarousel } from "@/components/sections/CasesCarousel"
import { DataCenterCases } from "@/components/sections/DataCenterCases"
import "@/styles/index.css"
import "@/styles/about.css"

export const metadata: Metadata = {
  title: "成功案例_科智咨询",
  description: "科智咨询在数字科技领域积累了丰富的成功案例，为客户提供专业的咨询服务。",
  keywords: "科智咨询成功案例,数字科技案例,咨询服务案例",
  openGraph: {
    title: "成功案例_科智咨询",
    description: "科智咨询在数字科技领域积累了丰富的成功案例，为客户提供专业的咨询服务。",
    type: "website",
  },
}

export default function CasesPage() {
  // 成功案例数据
  const caseItems = [
    {
      title: '保险行业人工智能应用研究',
      description: '通过产品对目标场景的切入、合作模式与竞争优势的建立等途径，为行业技术应用提供了有力支撑',
      image: '/images/indexanli3.png'
    },
    {
      title: '公有云市场用户研究',
      description: '明确各行业上云应用的需求现状和趋势、细分行业客户痛点、云平台迁移趋势和竞对研究，对市场扩张提供有力支撑',
      image: '/images/indexanli4.png'
    },
    {
      title: '互联网行业数据中心市场研究',
      description: '通过详实的互联网企业用户需求分析，对客户制定自身发展规划提供精准支撑',
      image: '/images/indexanli5.png'
    },
    {
      title: '地区产业规划项目',
      description: '通过深度需求调研、前景测算和对比分析，促使区域建设更加协同高效',
      image: '/images/indexanli1.png'
    },
    {
      title: '某世界五百强企业数据中心五年规划',
      description: '结合业务现状与难点，输出切实可行、落地度高的方案，对业务发展起到直接指导的作用',
      image: '/images/indexanli2.png'
    },
    {
      title: '金融科技数字化转型咨询',
      description: '为大型银行提供数字化转型战略规划，涵盖技术架构、业务流程和组织变革',
      image: '/images/indexanli3.png'
    }
  ]

  return (
    <div>
      {/* 成功案例Banner - 全宽 */}
      <div className="banner about2">
    <div className="root responsivegrid">

      <h2>数字科技领域专业咨询服务机构</h2>
      <p style={{ fontSize: 20 }}>
        助力企业科学决策，推动数字产业发展
      </p>
    </div>
  </div>
  <div className=" swiperIndex">



{/* <div className="cmp-container" style={{ backgroundColor: "rgb(255,255,255)", marginBottom: "40px" }}>

  <div className="bp-carousel-block ui-vs-bottom--bs">
    <div className="carousel">
      <div className="container responsivegrid">
        <div className="bp-alert-cards ">
          <div id="" className="bp-alert-cards__outline tuandui bp-alertcard--animate"  style={{textAlign:'center',maxWidth:'1200px',margin:'0 auto'}}>

            <h3 className="">
              成功案例</h3>
            <div className="bp-alert-cards__description">
              汇聚多元智慧，助力持续增长
            </div>
          </div>

        </div>


      </div>

    </div>
  </div>


</div> */}

</div>
      {/* 案例轮播 - 全宽 */}
      <CasesCarousel items={caseItems} />

    </div>
  )
}
