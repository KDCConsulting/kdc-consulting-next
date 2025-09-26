import Image from 'next/image'

export function CompanyIntro() {
  const milestones = [
    {
      year: '2020',
      title: '公司成立',
      description: '科智咨询正式成立，专注于数字科技领域咨询服务'
    },
    {
      year: '2021',
      title: '业务拓展',
      description: '服务范围扩展至战略咨询、市场研究、行业分析等领域'
    },
    {
      year: '2022',
      title: '团队壮大',
      description: '核心团队扩充至50+人，服务能力显著提升'
    },
    {
      year: '2023',
      title: '行业认可',
      description: '荣获"年度最佳咨询机构"等多项行业奖项'
    },
    {
      year: '2024',
      title: '持续创新',
      description: '推出AI驱动的咨询服务，引领行业数字化转型'
    }
  ]

  const achievements = [
    {
      number: '200+',
      label: '服务客户',
      description: '为200多家企业提供专业咨询服务'
    },
    {
      number: '500+',
      label: '完成项目',
      description: '成功完成500多个咨询项目'
    },
    {
      number: '95%',
      label: '客户满意度',
      description: '客户满意度达到95%以上'
    },
    {
      number: '50+',
      label: '专业团队',
      description: '拥有50多名专业咨询顾问'
    }
  ]

  return (
    <main className="container responsivegrid">




					<div id="main" className="cmp-container">

						<div className="container responsivegrid">
							<div id="研究能力" className="cmp-container">

                <div className="bp-alert-cards ">
                  <div id="" className="bp-alert-cards__outline tuandui bp-alertcard--animate">

                    <h3 className="">
                      研究能力</h3>
                    <div className="bp-alert-cards__description">
											二十载专业积累  赋能千行百业
                    </div>
                  </div>





                </div>


              </div>



							<div className="cmp-container nlBox">

								<div className="cmp-bp-data-stat parallax-block color-block-purple color-border-gray ui-vs-top--lg ui-vs-bottom--lg" data-parallax-order="0">
									<div className="cmp-bp-data-stat__second-row">
										<div className="cmp-bp-data-stat-card-list">
											<div className="cmp-bp-data-stat-card">

												<div className="cmp-bp-data-stat-card__title">300+</div>
												<div className="cmp-bp-data-stat-card__description cmp-bp-data-stat-border">
													<p>年均项目交付</p>
												</div>
											</div>

											<div className="cmp-bp-data-stat-card">

												<div className="cmp-bp-data-stat-card__title">100+</div>
												<div className="cmp-bp-data-stat-card__description cmp-bp-data-stat-border">
													<p>产业报告和白皮书</p>
												</div>
											</div>

											<div className="cmp-bp-data-stat-card last-card">

												<div className="cmp-bp-data-stat-card__title">20</div>
												<div className="cmp-bp-data-stat-card__description cmp-bp-data-stat-border">
													<p>载研究积累</p>
												</div>
											</div>


										</div>

										<div className="cmp-bp-data-stat-image-section">

											<div className="cmp-bp-data-stat-gradient">
												<div></div>
											</div>
											<div className="cmp-bp-data-stat-image">

												<div className="cmp-image ">
														<img src="https://www.kzconsulting.cn/static/images/nengli.png" className="cmp-image__image" />





												</div>



											</div>
										</div>

										<div className="cmp-bp-data-stat-card-list">
											<div className="cmp-bp-data-stat-card">

												<div className="cmp-bp-data-stat-card__title">2000+</div>
												<div className="cmp-bp-data-stat-card__description cmp-bp-data-stat-border">
													<p>数字科技领域专家</p>
												</div>
											</div>

											<div className="cmp-bp-data-stat-card">

												<div className="cmp-bp-data-stat-card__title">80000+</div>
												<div className="cmp-bp-data-stat-card__description cmp-bp-data-stat-border">
													<p>行业数据库</p>
												</div>
											</div>



										</div>
									</div>

								</div>


							</div>

						</div>


					</div>

				</main>
  )
}
