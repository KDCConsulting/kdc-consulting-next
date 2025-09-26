'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface Slide {
  title: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
}

interface HeroCarouselProps {
  slides: Slide[]
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const swiperRef = useRef<SwiperRef>(null)

  // 调试信息
  console.log('HeroCarousel slides:', slides)

  // 如果没有slides数据，显示调试信息
  if (!slides || slides.length === 0) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', border: '2px solid red' }}>
        <h2>HeroCarousel 调试信息</h2>
        <p>没有轮播图数据</p>
        <p>slides: {JSON.stringify(slides)}</p>
      </div>
    )
  }

  return (
    <div className="container responsivegrid full-width">
      <div
        id="container-9ba5c8379d"
        className="cmp-container"
        style={{ backgroundColor: "rgb(255,255,255)" }}
      >
        <div className="bptopmarqueecarouselblock carousel panelcontainer">
          <div className="container full-width">
            <div className="top-marquee cmp-top-marquee--carousel">
              <div id="carousel-banner" className="cmp-carousel" role="group" aria-live="polite" aria-roledescription="carousel" data-cmp-autoplay="" data-cmp-delay="10000" data-cmp-autopause-disabled="" data-cmp-data-layer='{"bptopmarqueecarouselblock-banner":{"@type":"cio-sites/components/blocks/brand-purpose/bptopmarqueecarouselblocks/bptopmarqueecarouselblock","analytics-engagement":"true","analytics-link-type":"nav/paginate","analytics-module-name":"bp-top-marquee-carousel-block","analytics-template-zone":"hero"}}' data-placeholder-text="false">
                <div className="cmp-carousel__content" aria-atomic="false" aria-live="off">
                  <Swiper
                    ref={swiperRef}
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                      bulletClass: 'cmp-carousel__indicator',
                      bulletActiveClass: 'cmp-carousel__indicator--active',
                    }}
                    loop={true}
                    className="cmp-carousel__wrapper"
                  >
                    {slides.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <div 
                          id={`carousel-banner-item-${index}-tabpanel`} 
                          className="cmp-carousel__item" 
                          role="tabpanel" 
                          aria-labelledby={`carousel-banner-item-${index}`} 
                          aria-roledescription="slide" 
                          data-cmp-data-layer={`{"carousel-banner-item-${index}-tabpanel":{"analytics-engagement":"true","analytics-template-zone":"hero","xdm:linkURL":"","analytics-link-type":"nav/paginate","analytics-link-name":"marquee-slide-${index + 1}","analytics-module-name":"marquee-slide-${index + 1}"}}`} 
                          aria-label={`第 ${index + 1} 张幻灯片，共 ${slides.length} 张`} 
                          data-cmp-hook-carousel="item"
                        >
                          <div className="bptopmarqueecarouselslide videoanimation cmp-top-marquee-dark">
                            <div className="cmp-video-hero cmp-video-hero--left-focus" id={`bptopmarqueecarouselslide-${index}`} data-cmp-data-layer={`{"bptopmarqueecarouselslide-${index}":{"@type":"cio-sites/components/blocks/brand-purpose/bptopmarqueecarouselblocks/bptopmarqueecarouselslide","analytics-engagement":"true","analytics-link-type":"nav/paginate","analytics-module-name":"bptopmarqueecarouselslide-${index + 1}","analytics-template-zone":"hero"}}`}>
                              <div className="cmp-video-hero__content-container">
                                <div className="cmp-video-hero__content">
                                  <div className="cmp-video-hero__content-wrap">
                                    <div className="title ui-animate ui-animate--up ui-animate--play">
                                      <div id={`title-${index}`} className="cmp-title" data-mark-type="cio-sites/components/title">
                                        <h1 className="cmp-title__text">{slide.title}</h1>
                                      </div>
                                    </div>

                                    <div className="text ui-animate ui-animate--up ui-animate--play">
                                      <div data-cmp-data-layer={`{"text-${index}":{"@type":"cio-sites/components/text","analytics-module-name":"text-${index + 1}"}}`} id={`text-${index}`} className="cmp-text cmp-consent--verify" data-mark-type="cio-sites/components/text">
                                        <p><b>{slide.description}</b></p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="button cmp-button--text-brand-link cmp-button--centered cmp-button--animation cmp-button--animation-active cmp-button--animation-active-text">
                                    <Link 
                                      id={`button-${index}`} 
                                      aria-label={`${slide.buttonText}: ${slide.title}`} 
                                      data-cmp-clickable="" 
                                      data-cmp-data-layer={`{"herovideo-button-${index}":{"@type":"cio-sites/components/button","xdm:linkURL":"${slide.buttonLink}","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"${slide.buttonText}","analytics-module-name":"button-${index + 1}"}}`} 
                                      data-prefiltersearch-enabled="false" 
                                      target="_self" 
                                      href={slide.buttonLink} 
                                      className="cmp-button"
                                    >
                                      <span className="cmp-button__text">{slide.buttonText}</span>
                                    </Link>
                                  </div>
                                </div>
                              </div>

                              <div className="cmp-video-hero__video-container">
                                <video
                                  className="cmp-video-hero__video"
                                  muted
                                  autoPlay
                                  loop
                                  playsInline
                                  preload="auto"
                                  poster=""
                                >
                                  <source src={slide.image} type="video/mp4" />
                                </video>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}