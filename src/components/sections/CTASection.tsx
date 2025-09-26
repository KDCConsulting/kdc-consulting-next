'use client'

import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  subDescription: string
  buttonText: string
  buttonLink: string
}

export function CTASection({ title, description, subDescription, buttonText, buttonLink }: CTASectionProps) {
  return (
    <div className="container responsivegrid full-width joinUs">




      <div id="id3" className="cmp-container ">

        <h2>开启无限可能</h2>
        <p>你需要不断探索真知，解决复杂问题，直面重大挑战</p>
        <p>
          加入科智咨询，遇见全新自我，创造卓越价值</p>
        <div className="learnMore">
          <a href="https://www.kzconsulting.cn/recruit/index.html">
            <span className="cmp-button__text">了解更多</span>
          </a>


        </div>
      </div>

    </div>
  )
}