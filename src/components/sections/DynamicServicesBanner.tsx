import Image from 'next/image'
import { StrategicAdvisory } from '@/types/services'

interface DynamicServicesBannerProps {
  serviceData: StrategicAdvisory | null
  fallbackTitle?: string
  fallbackDescription?: string
}

export function DynamicServicesBanner({ 
  serviceData, 
  fallbackTitle = "专业服务",
  fallbackDescription = "为您提供专业的咨询服务"
}: DynamicServicesBannerProps) {
  const bannerImage = serviceData?.channelBanner
  const title = serviceData?.ServiceIntroductionTitle || fallbackTitle
  const description = serviceData?.ServiceContentBriefIntroduction || fallbackDescription

  return (
    <div className="container responsivegrid full-width-constraint">
      <div className="cmp-container banner">
        <div className="banner-content">
          {bannerImage && (
            <div className="banner-image">
              <Image
                src={bannerImage.url}
                alt={bannerImage.alternativeText || title}
                width={bannerImage.width}
                height={bannerImage.height}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </div>
          )}
          <div className="banner-overlay">
            <div className="banner-text">
              <h1 className="banner-title">{title}</h1>
              <p className="banner-description">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
