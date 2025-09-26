'use client'

import { useEffect, useRef } from 'react'

interface CaseItem {
  title: string
  description: string
  image: string
}

interface CasesCarouselProps {
  items: CaseItem[]
}

export function CasesCarousel({ items }: CasesCarouselProps) {
  const swiperRef = useRef<any>(null) // eslint-disable-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<HTMLDivElement>(null)

  // 调试信息
  console.log('CasesCarousel items:', items)

  useEffect(() => {
    // 动态导入Swiper
    const initSwiper = async () => {
      const { Swiper } = await import('swiper')
      const { Autoplay } = await import('swiper/modules')
      
      if (containerRef.current && items && items.length > 0) {
        swiperRef.current = new Swiper(containerRef.current, {
          modules: [Autoplay],
          loop: true,
          speed: 2500,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          slidesPerView: 5,
          centeredSlides: true,
          watchSlidesProgress: true,
          spaceBetween: 20,
          on: {
            setTranslate: function(swiper: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
              const slides = swiper.slides
              for (let i = 0; i < slides.length; i++) {
                const slide = slides[i]
                const progress = slide.progress
                
                // 清除之前的样式
                slide.style.opacity = ''
                slide.style.background = ''
                slide.style.transform = ''
                
                // 缩放效果
                slide.style.transform = 'scale(' + (1 - Math.abs(progress) / 8) + ')'
              }
            },
            setTransition: function(swiper: any, transition: number) { // eslint-disable-line @typescript-eslint/no-explicit-any
              for (let i = 0; i < swiper.slides.length; i++) {
                const slide = swiper.slides[i]
                slide.style.transition = transition + 'ms'
              }
            },
          },
        })
      }
    }

    // 延迟初始化，确保DOM已渲染
    const timer = setTimeout(() => {
      initSwiper()
    }, 100)

    return () => {
      clearTimeout(timer)
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true)
      }
    }
  }, [items])

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop()
    }
  }

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start()
    }
  }

  // 如果没有items数据，显示调试信息
  if (!items || items.length === 0) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', border: '2px solid red' }}>
        <h2>CasesCarousel 调试信息</h2>
        <p>没有成功案例数据</p>
        <p>items: {JSON.stringify(items)}</p>
      </div>
    )
  }

  return (
    <div className="container responsivegrid swiperIndex">
      <div id="id3" className="cmp-container" style={{backgroundColor: 'rgb(255,255,255)'}}>
        <div className="bp-carousel-block ui-vs-top--lg ui-vs-bottom--bs">
          <div className="carousel">
            <div className="container responsivegrid">
              <div className="cmp-cascading-block_first-row">
                <div className="title">
                  <div className="cmp-title">
                    <h2 className="cmp-title__text">成功案例</h2>
                  </div>
                </div>
                <div className="text">
                  <div className="cmp-text cmp-consent--verify">
                    <p style={{textAlign: 'center'}}>汇聚多元智慧，助力持续增长</p>
                  </div>
                </div>
              </div>
              
              <div 
                ref={containerRef}
                className="swiper-container case swiperIndexCase" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="swiper-wrapper">
                  {items.map((item, index) => (
                    <div key={index} className="swiper-slide">
                      <img src={item.image} alt={item.title} />
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}