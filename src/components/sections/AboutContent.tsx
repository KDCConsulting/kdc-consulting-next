import Link from "next/link";

export function AboutContent() {
  return (
    <div className="container responsivegrid aboutContent">
    <div className="flex w1200 flex-3">
      <div className="flex-item">
       
        <h4>使命和愿景</h4><span>Mission and Vision</span>
        <p>
          助力企业科学决策，推动数字产业发展<br />
          打造数字科技领域高端智库
        </p>
       
      </div>
      <div className="flex-item">
        <h4>理念</h4><span>value</span>
        <p>
          精心&nbsp;&nbsp;&nbsp;&nbsp;精致&nbsp;&nbsp;&nbsp;&nbsp;精准&nbsp;&nbsp;&nbsp;&nbsp;精深
        </p>
     
      </div>
      <div className="flex-item">
        <h4>顾问团队</h4><span>Advisory team</span>
        <p>
          二十载专业积累  赋能千行百业
        </p>
        <Link className="cmp-teaser__action-link" target="_self" href="/about/team">点击了解</Link>
      </div>

    </div>
  </div>
  )
}
