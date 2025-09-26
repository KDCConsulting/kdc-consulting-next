import Image from 'next/image'

export function DataCenterIntro() {
  return (
    <div className="cmp-cmp-container responsivegrid full-width-constraint">
      <div className="cmp-container mainIntr">
        <div className="flex">
          <div className="flex-left">
            <h2 style={{ paddingTop: 0 }}>AI驱动，数据中心行业乘势而上</h2>
            <p>
              2023年人工智能掀起行业变革与投资狂热浪潮，技术创新及商业化应用加速形成产业合力。AI技术推动下，算力多元化趋势凸显，智能算力将成为加速数据中心行业发展中坚力量。同时，产业链各方也正积极拥抱新机遇新变革，助力数据中心行业开启高质量发展新时代。
            </p>
          </div>
          <div className="flex-right">
            <Image 
              src="/images/20231017-094421.png" 
              alt="数据中心AI驱动发展"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
