'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

interface NewsItem {
  title: string
  image: string
  link: string
}

interface NewsCarouselProps {
  items: NewsItem[]
}

export function NewsCarousel({ items }: NewsCarouselProps) {
  const swiperRef = useRef<SwiperRef>(null)

  return (
    <div className="container responsivegrid">
      <div id="id3" className="cmp-container newsSwiper" style={{backgroundColor: 'rgb(255,255,255)', paddingTop: '2em'}}>
        <div className="container responsivegrid">
          <div className="cmp-container">
            <div className="title">
              <div id="bpcarouselblock-a8e444e382-title" className="cmp-title">
                <h2 className="cmp-title__text" style={{marginBottom: '40px'}}>新闻动态</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-container" style={{ position: 'relative' }}>
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={3}
            loop={true}
            grabCursor={true}
            navigation={{
              nextEl: '.news-swiper-button-next',
              prevEl: '.news-swiper-button-prev',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <Link className="newsContent" href={item.link} style={{display: 'block'}}>
                  <Image 
                    src={item.image} 
                    alt="新闻图片" 
                    width={400} 
                    height={250}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className="mark">
                    <h4>{item.title}</h4>
                    <button>阅读更多</button>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 自定义导航按钮 */}
          <div className="news-swiper-button-prev swiper-button-prev" 
               style={{
                 position: 'absolute',
                 left: '10px',
                 top: '50%',
                 transform: 'translateY(-50%)',
                 zIndex: 10,
                 width: '44px',
                 height: '44px',
                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
                 borderRadius: '50%',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 cursor: 'pointer',
                 color: 'white',
                 fontSize: '18px',
                 fontWeight: 'bold'
               }}
               onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            ‹
          </div>
          
          <div className="news-swiper-button-next swiper-button-next" 
               style={{
                 position: 'absolute',
                 right: '10px',
                 top: '50%',
                 transform: 'translateY(-50%)',
                 zIndex: 10,
                 width: '44px',
                 height: '44px',
                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
                 borderRadius: '50%',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 cursor: 'pointer',
                 color: 'white',
                 fontSize: '18px',
                 fontWeight: 'bold'
               }}
               onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            ›
          </div>
        </div>
      </div>
    </div>
  )
}