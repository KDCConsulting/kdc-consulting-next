import Link from 'next/link'

export function OurWork() {
  return (
    <div className="container responsivegrid ourJob">
      <div className="flex w1200">
        <div className="flex-left ">
          <h3>我们的咨询工作</h3>
          <div className="flex-3">
            <div className="flex-item">
              <h4>研究能力</h4>
              <p>二十载专业积累 赋能千行百业</p>
              <Link
                className="cmp-teaser__action-link"
                href="/about/company"
              >
                点击了解
              </Link>
            </div>
            <div className="flex-item">
              <h4>合作客户</h4>
              <p>累计服务两千余家政企客户</p>
              <Link
                className="cmp-teaser__action-link"
                href="/about/partners"
              >
                点击了解
              </Link>
            </div>
            <div className="flex-item">
              <h4>成功案例</h4>
              <p>汇聚多元智慧，助力持续增长</p>
              <Link
                className="cmp-teaser__action-link"
                href="/about/cases"
              >
                点击了解
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-right">
          <img src="https://www.kzconsulting.cn/static/images/u26.png" alt="" />
        </div>
      </div>
    </div>
  );
}
