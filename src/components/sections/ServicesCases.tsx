'use client'

import { useEffect } from 'react'

export function ServicesCases() {
  const cases = [
    {
      title: "地区产业规划项目",
      description: "通过深度需求调研、前景测算和对比分析，促使区域建设更加协同高效",
      image: "/images/hangyeanli1.png"
    },
    {
      title: "某世界五百强企业数据中心五年规划",
      description: "结合业务现状与难点，输出切实可行、落地度高的方案，对业务发展起到直接指导的作用",
      image: "/images/hangyeanli2.png"
    },
    {
      title: "保险行业人工智能应用研究",
      description: "通过产品对目标场景的切入、合作模式与竞争优势的建立等途径，为行业技术应用提供了有力支撑",
      image: "/images/hangyeanli3.png"
    },
    {
      title: "公有云市场用户研究",
      description: "明确各行业上云应用的需求现状和趋势、细分行业客户痛点、云平台迁移趋势和竞对研究，对市场扩张提供有力支撑",
      image: "/images/indexanli1.png"
    },
    {
      title: "互联网行业数据中心市场研究",
      description: "通过详实的互联网企业用户需求分析，对客户制定自身发展规划提供精准支撑",
      image: "/images/indexanli2.png"
    },
    {
      title: "海外业务拓展规划",
      description: "通过详实的区域行业和客户研究形成战略定位，最终实现海外落地项目的独立运营",
      image: "/images/indexanli3.png"
    },
    {
      title: "光伏企业战略规划项目",
      description: "通过政策规划、产业链研究和竞争格局研究等指导其产业布局",
      image: "/images/indexanli4.png"
    }
  ]

  useEffect(() => {
    // 动态加载Swiper
    const loadSwiper = async () => {
      if (typeof window !== 'undefined') {
        const { default: Swiper } = await import('swiper')
        const { Navigation, Pagination, Autoplay } = await import('swiper/modules')
        
        new Swiper('.swiper-container', {
          modules: [Navigation, Pagination, Autoplay],
          loop: true,
          speed: 2500,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          slidesPerView: 5,
          centeredSlides: true,
          watchSlidesProgress: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            }
          }
        })
      }
    }

    loadSwiper()
  }, [])

  return (
    <div className="container responsivegrid">



    <div id="container-0f2cb07b88" className="cmp-container">


      <div className="container responsivegrid full-width-constraint">




        <div id="container-69d673454b" className="cmp-container case">
          <div className="title cmp-title--section ui-vs-bottom--md">
            <div className="cmp-title">
              <h2 className="cmp-title__text" style={{ marginBottom: 0 }}>
                成功案例
              </h2>
            </div>


          </div>
          <div className="text ui-vs-bottom--md">
            <div className="cmp-text cmp-consent--verify">
              <p><span className="cmp-text__paragraph-default">汇聚多元智慧，助力持续增长</span>
              </p>
            </div>
          </div>
          <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
    

            <div className="cmp-card-listing 
cmp-card-listing--cta-2-to-1 ">
              <div className="cmp-card-listing_first-row">
                <div className="cmp-card-listing_first-row_left-col">
                  <div className="container responsivegrid">




                    <div id="container-a04bceaf73" className="cmp-container">

                      <div className="title cmp-title--section ui-vs-bottom--md">



                      </div>


                    </div>

                  </div>

                </div>

                <div className="cmp-card-listing_first-row_right-col">

                  <div className="container responsivegrid">




                    <div id="container-b06afecf51" className="cmp-container">



                    </div>

                  </div>

                </div>

              </div>
              <div className="cmp-card-listing_second-row">
                <div className="container responsivegrid">

                  <div className="cmp-container fuwu-third-links">
                      
<div className="container responsivegrid swiperIndex">




<div id="id3" className="cmp-container" style={{backgroundColor: 'rgb(255,255,255)'}}>

<div className="bp-carousel-block ui-vs-top--lg ui-vs-bottom--bs">
  <div className="carousel">

      <div className="container responsivegrid">

          <div className="swiper-container case swiperIndexCase swiper-container-initialized swiper-container-horizontal" style={{transform: 'scale(0.862019) translate(-50%)'}}>
              <div className="swiper-wrapper" style={{transitionDuration: '0ms', transform: 'translate3d(-1488px, 0px, 0px)'}}><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.25)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722365444489216.jpg" alt="保险行业人工智能应用研究" />
                              <h4>保险行业人工智能应用研究</h4>
                              <p>通过产品对目标场景的切入、合作模式与竞争优势的建立等途径，为行业技术应用提供了有力支撑</p>
                          </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.375)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722424441569280.jpg" alt="公有云市场用户研究" />
                              <h4>公有云市场用户研究</h4>
                              <p>明确各行业上云应用的需求现状和趋势、细分行业客户痛点、云平台迁移趋势和竞对研究，对市场扩张提供有力支撑</p>
                          </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.5)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722483736444928.jpg" alt="互联网行业数据中心市场研究" />
                              <h4>互联网行业数据中心市场研究</h4>
                              <p>通过详实的互联网企业用户需求分析，对客户制定自身发展规划提供精准支撑</p>
                          </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.625)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722531954163712.jpg" alt="海外业务拓展规划" />
                              <h4>海外业务拓展规划</h4>
                              <p>通过详实的区域行业和客户研究形成战略定位，最终实现海外落地项目的独立运营</p>
                          </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="6" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.75)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722569119891456.jpg" alt="光伏企业战略规划项目" />
                              <h4>光伏企业战略规划项目</h4>
                              <p>通过政策规划、产业链研究和竞争格局研究等指导其产业布局</p>
                          </div>

                          <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.875)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722235320401920.jpg" alt="地区产业规划项目" />
                              <h4>地区产业规划项目</h4>
                              <p>通过深度需求调研、前景测算和对比分析，促使区域建设更加协同高效</p>
                          </div>

                          <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(1)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722292195164160.jpg" alt="某世界五百强企业数据中心五年规划" />
                              <h4>某世界五百强企业数据中心五年规划</h4>
                              <p>结合业务现状与难点，输出切实可行、落地度高的方案，对业务发展起到直接指导的作用</p>
                          </div>

                          <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="2" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.875)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722365444489216.jpg" alt="保险行业人工智能应用研究" />
                              <h4>保险行业人工智能应用研究</h4>
                              <p>通过产品对目标场景的切入、合作模式与竞争优势的建立等途径，为行业技术应用提供了有力支撑</p>
                          </div>

                          <div className="swiper-slide" data-swiper-slide-index="3" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.75)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722424441569280.jpg" alt="公有云市场用户研究" />
                              <h4>公有云市场用户研究</h4>
                              <p>明确各行业上云应用的需求现状和趋势、细分行业客户痛点、云平台迁移趋势和竞对研究，对市场扩张提供有力支撑</p>
                          </div>

                          <div className="swiper-slide" data-swiper-slide-index="4" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.625)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722483736444928.jpg" alt="互联网行业数据中心市场研究" />
                              <h4>互联网行业数据中心市场研究</h4>
                              <p>通过详实的互联网企业用户需求分析，对客户制定自身发展规划提供精准支撑</p>
                          </div>

                          <div className="swiper-slide" data-swiper-slide-index="5" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.5)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722531954163712.jpg" alt="海外业务拓展规划" />
                              <h4>海外业务拓展规划</h4>
                              <p>通过详实的区域行业和客户研究形成战略定位，最终实现海外落地项目的独立运营</p>
                          </div>

                          <div className="swiper-slide" data-swiper-slide-index="6" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.375)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722569119891456.jpg" alt="光伏企业战略规划项目" />
                              <h4>光伏企业战略规划项目</h4>
                              <p>通过政策规划、产业链研究和竞争格局研究等指导其产业布局</p>
                          </div>


              <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.25)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722235320401920.jpg" alt="地区产业规划项目" />
                              <h4>地区产业规划项目</h4>
                              <p>通过深度需求调研、前景测算和对比分析，促使区域建设更加协同高效</p>
                          </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="1" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0.125)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722292195164160.jpg" alt="某世界五百强企业数据中心五年规划" />
                              <h4>某世界五百强企业数据中心五年规划</h4>
                              <p>结合业务现状与难点，输出切实可行、落地度高的方案，对业务发展起到直接指导的作用</p>
                          </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(0)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722365444489216.jpg" alt="保险行业人工智能应用研究" />
                              <h4>保险行业人工智能应用研究</h4>
                              <p>通过产品对目标场景的切入、合作模式与竞争优势的建立等途径，为行业技术应用提供了有力支撑</p>
                          </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(-0.125)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722424441569280.jpg" alt="公有云市场用户研究" />
                              <h4>公有云市场用户研究</h4>
                              <p>明确各行业上云应用的需求现状和趋势、细分行业客户痛点、云平台迁移趋势和竞对研究，对市场扩张提供有力支撑</p>
                          </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" style={{width: '372px', transitionDuration: '0ms', transform: 'scale(-0.25)'}}>
                                      <img src="https://www.kzconsulting.cn/resource/image/20231208/917722483736444928.jpg" alt="互联网行业数据中心市场研究" />
                              <h4>互联网行业数据中心市场研究</h4>
                              <p>通过详实的互联网企业用户需求分析，对客户制定自身发展规划提供精准支撑</p>
                          </div></div>

              <div className="swiper-pagination"></div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
      </div>

  </div>
</div>


</div>

</div>
                  </div>

                </div>

                <div className="button cmp-card-listing_button cmp-button--text-link cmp-button__cta-arrow--right">

                </div>
              </div>




              <div className="cmp-card-listing_third-row ">
                <div className="container responsivegrid">




                  <div id="container-1f16827fa8" className="cmp-container">



                  </div>

                </div>


              </div>

            </div>
          </div>


        </div>

      </div>


    </div>






  </div>
  )
}
