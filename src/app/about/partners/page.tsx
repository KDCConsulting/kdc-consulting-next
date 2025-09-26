import type { Metadata } from "next"
import "@/styles/about.css"

export const metadata: Metadata = {
  title: "合作伙伴_科智咨询",
  description: "科智咨询与众多知名企业和机构建立了良好的合作关系，共同推动数字科技发展。",
  keywords: "科智咨询合作伙伴,战略合作,数字科技合作",
  openGraph: {
    title: "合作伙伴_科智咨询",
    description: "科智咨询与众多知名企业和机构建立了良好的合作关系，共同推动数字科技发展。",
    type: "website",
  },
}

export default function PartnersPage() {
  // 合作伙伴数据
  const partners = [
    {
      name: "中国信息通信研究院",
      logo: "/images/partner1.png",
      description: "在数字科技领域开展深度合作研究"
    },
    {
      name: "亚太经合组织",
      logo: "/images/partner2.png", 
      description: "共同推进远程医疗发展研究项目"
    },
    {
      name: "中国IDC产业联盟",
      logo: "/images/partner3.png",
      description: "深度参与数据中心产业标准制定"
    },
    {
      name: "清华大学",
      logo: "/images/partner4.png",
      description: "产学研合作，推动技术创新"
    },
    {
      name: "华为技术有限公司",
      logo: "/images/partner5.png",
      description: "在5G和云计算领域深度合作"
    },
    {
      name: "阿里巴巴集团",
      logo: "/images/partner6.png",
      description: "共同探索数字化转型解决方案"
    }
  ]

  return (
    <div>
      {/* 合作伙伴Banner - 全宽 */}
      <div className="banner about2">
      <div className="root responsivegrid">

        <h2>数字科技领域专业咨询服务机构</h2>
        <p style={{ fontSize: 20 }}>
          助力企业科学决策，推动数字产业发展
        </p>
      </div>
    </div>

      {/* 合作伙伴介绍 - 版心限制 */}
      <main className="container responsivegrid root">




<div id="main" className="cmp-container">




  <div className="container responsivegrid">




    <div  className="cmp-container">

      <div className="bp-alert-cards ">
        <div id="" className="bp-alert-cards__outline kehu bp-alertcard--animate">

          <h3 className="">
            合作客户</h3>
          <div className="bp-alert-cards__description">
       累计服务两千余家政企客户
          </div>
          <img src="https://www.kzconsulting.cn/static/images/huobanlogo.jpg" alt=""  />


    
        </div>





      </div>


    </div>

  </div>

</div>

</main>
    </div>
  )
}
