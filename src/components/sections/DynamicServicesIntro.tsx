import Image from 'next/image'
import { StrategicAdvisory } from '@/types/services'

interface DynamicServicesIntroProps {
  serviceData: StrategicAdvisory | null
  fallbackContent?: string
}

export function DynamicServicesIntro({ 
  serviceData, 
  fallbackContent = "我们提供专业的咨询服务，帮助企业实现战略目标。"
}: DynamicServicesIntroProps) {
  const introImage = serviceData?.ServiceIntroductionImage
  const content = serviceData?.ServiceIntroductionContent || []
  const title = serviceData?.ServiceIntroductionTitle || "服务介绍"

  return (
    <div className="container responsivegrid full-width-constraint">
      <div className="cmp-container mainIntr">
        <div className="flex">
          <div className="flex-left">
            <h2>{title}</h2>
            {content.map((paragraph, index) => (
              <p key={index}>
                {paragraph.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </p>
            ))}
          </div>
          <div className="flex-right">
            {introImage && (
              <Image
                src={introImage.url}
                alt={introImage.alternativeText || title}
                width={introImage.width}
                height={introImage.height}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
