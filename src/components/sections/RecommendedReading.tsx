'use client'

import { useEffect } from 'react'

export function RecommendedReading() {
  useEffect(() => {
    // 动态导入Swiper
    const initSwiper = async () => {
      const { default: Swiper } = await import('swiper')
      const { Navigation, Pagination } = await import('swiper/modules')
      
      new Swiper('.mySwiper', {
        modules: [Navigation, Pagination],
        grabCursor: true,
        slidesPerView: 3,
      })
    }
    
    initSwiper()
  }, [])

  const recommendedNews = [
    {
      id: '1',
      title: '科智咨询助力APEC研究项目成果落地',
      image: '/images/recommended-1.jpg',
      href: '/news/1'
    },
    {
      id: '2', 
      title: '科智咨询深度参与"华为数据中心碳索思享会"',
      image: '/images/recommended-2.jpg',
      href: '/news/2'
    },
    {
      id: '3',
      title: '科智咨询携手中国信通院撰写《数字中国产业洞察》报告',
      image: '/images/recommended-3.jpg',
      href: '/news/3'
    }
  ]

  return (
				
    <div className="container responsivegrid" style={{ margin: "0 auto" }}>



			<div
				id="id3"
				className="cmp-container newsSwiper"
				style={{ backgroundColor: "rgb(255,255,255)" }}
			>
				<div className="container responsivegrid">
					<div className="cmp-container">
						<div className="title">
							<div className="cmp-title">
								<h2
									className="cmp-title__text"
									style={{
										width: "1170px",
										margin: "35px auto",
										paddingLeft: "20px",
										fontSize: "40px"
									}}
								>
									推荐阅读
								</h2>
							</div>
						</div>
					</div>

				</div>

				<div className="swiper mySwiper swiper-container-initialized swiper-container-horizontal" style={{ cursor: "grab" }}>
					<div className="swiper-wrapper" style={{ transform: "translate3d(0px, 0px, 0px)" }}>

								<div className="swiper-slide swiper-slide-active" style={{ width: "400px" }}>
									<a className="newsContent" href="/newsKzzx/917059769481560064.html">
										<img src="https://www.kzconsulting.cn/resource/image/20231208/917729075508805632.jpg" />
										<div className="mark">
											<h4>科智咨询助力APEC研究项目成果落地</h4>
											<button>阅读更多</button>
										</div>
									</a>
								</div>
								<div className="swiper-slide swiper-slide-next" style={{ width: "400px" }}>
									<a className="newsContent" href="/newsKzzx/917061198216691712.html">
										<img src="https://www.kzconsulting.cn/resource/image/20231208/917728982219096064.jpg" />
										<div className="mark">
											<h4>科智咨询深度参与“华为数据中心碳索思享会”</h4>
											<button>阅读更多</button>
										</div>
									</a>
								</div>
								<div className="swiper-slide" style={{ width: "400px" }}>
									<a className="newsContent" href="/newsKzzx/917059301716000768.html">
										<img src="https://www.kzconsulting.cn/resource/image/20231206/917059117007241216.png" />
										<div className="mark">
											<h4>科智咨询携手中国信通院撰写《数字中国产业洞察》报告</h4>
											<button>阅读更多</button>
										</div>
									</a>
								</div>
						
					</div>
				<span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>


			</div>

		</div>
  )
}