import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  description: string;
  image: string;
  expertise: string[];
  experience: string;
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "张明",
      position: "创始人 & CEO",
      department: "管理层",
      description:
        "拥有15年数字科技行业经验，曾在多家知名科技公司担任高级管理职位，深度理解行业发展趋势。",
      image: "/images/team-zhang-ming.jpg",
      expertise: ["战略规划", "数字化转型", "团队管理"],
      experience: "15年",
    },
    {
      id: "2",
      name: "李华",
      position: "首席咨询顾问",
      department: "咨询部",
      description:
        "专注于云计算和人工智能领域研究，为多家企业提供数字化转型咨询服务，项目经验丰富。",
      image: "/images/team-li-hua.jpg",
      expertise: ["云计算", "人工智能", "数字化转型"],
      experience: "12年",
    },
    {
      id: "3",
      name: "王芳",
      position: "市场研究总监",
      department: "研究部",
      description:
        "资深市场研究专家，擅长行业趋势分析和竞争环境研究，为投资决策提供重要支撑。",
      image: "/images/team-wang-fang.jpg",
      expertise: ["市场研究", "行业分析", "投资咨询"],
      experience: "10年",
    },
    {
      id: "4",
      name: "刘强",
      position: "技术总监",
      department: "技术部",
      description:
        "技术专家，深度参与多个大型技术项目，对新兴技术有敏锐的洞察力和前瞻性判断。",
      image: "/images/team-liu-qiang.jpg",
      expertise: ["大数据", "物联网", "区块链"],
      experience: "13年",
    },
    {
      id: "5",
      name: "陈静",
      position: "客户成功总监",
      department: "客户部",
      description:
        "专注于客户关系管理和项目交付，确保每个项目都能为客户创造最大价值。",
      image: "/images/team-chen-jing.jpg",
      expertise: ["客户管理", "项目管理", "业务分析"],
      experience: "8年",
    },
    {
      id: "6",
      name: "赵磊",
      position: "高级咨询顾问",
      department: "咨询部",
      description:
        "专注于金融科技和智慧城市领域，为政府和企业提供专业的咨询服务。",
      image: "/images/team-zhao-lei.jpg",
      expertise: ["金融科技", "智慧城市", "政策研究"],
      experience: "9年",
    },
  ];

  return (
    <main className="container responsivegrid">
      <div id="main" className="cmp-container">
        <div className="container responsivegrid">
          {/* 此处修复了未闭合的div标签，后续内容应确保所有div正确闭合 */}

          <div id="顾问团队" className="cmp-container">
            <div className="bp-alert-cards ">
              <div id="" className="bp-alert-cards__outline tuandui">
                <h3 className="">顾问团队</h3>
                <div className="bp-alert-cards__description">
                  二十载咨询和行业经验
                </div>

                <div className="flex ">
                  <div className="flex-item">
                    <img
                      src="https://www.kzconsulting.cn/resource/image/20231204/916291229140910080.jpg"
                      alt=""
                    />
                    <div className="intr">
                      <h4>黄超</h4>
                      <p>科智集团董事长</p>
                      <span className="tags" style={{ fontWeight: 400 }}>
                        <span>数据中心和云计算领域整合研究</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex-item">
                    <img
                      src="https://www.kzconsulting.cn/resource/image/20231204/916290997732769792.jpg"
                      alt=""
                    />
                    <div className="intr">
                      <h4>钟志祥</h4>
                      <p>咨询专家</p>
                      <span className="tags" style={{ fontWeight: 400 }}>
                        <span>ICT及数据中心领域专家</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex-item">
                    <img
                      src="https://www.kzconsulting.cn/resource/image/20231204/916291190200991744.jpg"
                      alt=""
                    />
                    <div className="intr">
                      <h4>刘源 </h4>
                      <p>科智集团副总裁</p>
                      <span className="tags" style={{ fontWeight: 400 }}>
                        <span>云计算 </span>
                        <span>数据中心 </span>
                        <span>认知计算 </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex-item">
                    <img
                      src="https://www.kzconsulting.cn/resource/image/20231204/916291143560331264.jpg"
                      alt=""
                    />
                    <div className="intr">
                      <h4>张福林 </h4>
                      <p>科智咨询数字基础设施研究事业部咨询总监</p>
                      <span className="tags" style={{ fontWeight: 400 }}>
                        <span>数据中心 </span>
                        <span>ICT </span>
                        <span>工业互联网 </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex-item">
                    <img
                      src="https://www.kzconsulting.cn/resource/image/20231204/916291086467465216.jpg"
                      alt=""
                    />
                    <div className="intr">
                      <h4>弓瑞峰 </h4>
                      <p>科智咨询云网研究事业部咨询总监</p>
                      <span className="tags" style={{ fontWeight: 400 }}>
                        <span>云计算 </span>
                        <span>区块链 </span>
                        <span>人工智能 </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex-item">
                    <img
                      src="https://www.kzconsulting.cn/resource/image/20231204/916291044365041664.jpg"
                      alt=""
                    />
                    <div className="intr">
                      <h4>祝路曼 </h4>
                      <p>科智咨询战略规划业务咨询总监</p>
                      <span className="tags" style={{ fontWeight: 400 }}>
                        <span>人工智能 </span>
                        <span>物联网 </span>
                        <span>智能网联汽车 </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
