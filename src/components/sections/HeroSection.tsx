import Image from 'next/image'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  className?: string
}

export function HeroSection({ 
  title, 
  subtitle, 
  description, 
  backgroundImage,
  className = ''
}: HeroSectionProps) {
  return (
    <section className={`hero-section ${className}`}>
      {backgroundImage && (
        <div className="hero-section__background">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="hero-section__overlay"></div>
        </div>
      )}
      
      <div className="hero-section__content">
        <div className="cmp-cmp-container responsivegrid full-width-constraint">
          <div className="hero-section__text">
            {subtitle && (
              <p className="hero-section__subtitle">{subtitle}</p>
            )}
            <h1 className="hero-section__title">{title}</h1>
            {description && (
              <p className="hero-section__description">{description}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
