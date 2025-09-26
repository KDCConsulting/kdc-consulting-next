'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface FocusItem {
  title: string
  description: string
  image: string
  link: string
}

interface FocusSectionProps {
  items: FocusItem[]
}

export function FocusSection({ items }: FocusSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // 监听所有卡片元素
    const cards = sectionRef.current?.querySelectorAll('.cascadingcard')
    cards?.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      cards?.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  return (
    <div className="container responsivegrid full-width-constraint">
      <div id="id1" className="cmp-container" style={{backgroundColor: 'rgb(255,255,255)'}}>
        <div className="cascading-block parallax-block ui-vs-top--lg ui-vs-bottom--lg" data-parallax-order="0">
          <div id="cascadingblock-3a30250432" className="cmp-cascading-block cmp-cascading-block--4-cards cmp-cascading-block--sm-2-cards cmp-cascading-block--xs-1-card cmp-cascading-block--animate">

            <div className="cmp-cascading-block_first-row cmp-cascading-block--animate_first-row">
              <div className="title">
                <div className="cmp-title">
                  <h2 className="cmp-title__text">聚焦前沿</h2>
                </div>
              </div>

              <div className="text">
                <div className="cmp-text cmp-consent--verify">
                  <p>洞悉产业趋势，缔造卓越价值</p>
                </div>
              </div>
            </div>

            <div className="cmp-cascading-block_second-row cmp-cascading-block--animate_second-row">
              {items.map((item, index) => (
                <div key={index} className="cascadingcard teaser cmp-bp-card-container">
                  <div id="custom-ipad-style" className={`cmp-cascadingcard ${index === 2 ? 'cmp-cascadingcard--active' : ''}`}>
                    <div className="cmp-cascadingcard_image-placeholder" style={{height: '293px'}}>
                      <div className="cmp-image">
                        <Link className="cmp-image__link" href={item.link}>
                          <Image 
                            src={item.image} 
                            alt={item.title}
                            width={400}
                            height={293}
                            className="cmp-image__image"
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                          />
                        </Link>
                      </div>
                    </div>

                    <div className="cmp-cascadingcard_text-content">
                      <h2 className="cmp-teaser__title">
                        <Link className="cmp-teaser__title-link" href={item.link} target="_blank">
                          {item.title}
                        </Link>
                      </h2>

                      <div className="cmp-cascadingcard_description">
                        <p>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="cmp-cascadingcard_cta-btn cmp-cascadingcard_cta-btn--mobile" style={{top: '293px'}}>
                    <span>探索</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="cmp-cascading-block_third-row cmp-cascading-block--animate_third-row">
              <div className="button has-tooltip cmp-button--text-brand-link cmp-button--right cmp-button--animation cmp-button--animation-active">
                <Link className="cmp-button" href="/insights">
                  <span className="cmp-button__text">更多洞察</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}