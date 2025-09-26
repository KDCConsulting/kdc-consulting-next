// 组件相关类型定义

export interface NavigationItem {
  name: string
  nameEn: string
  href: string
  description: string
  children?: NavigationItem[]
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
  title?: string
  description?: string
  image?: string
  href?: string
  children?: React.ReactNode
  className?: string
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface CarouselProps {
  slides: CarouselSlide[]
  autoplay?: boolean
  delay?: number
  className?: string
}

export interface CarouselSlide {
  id: string
  title: string
  description: string
  image: string
  link?: string
}

export interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  fill?: boolean
  sizes?: string
}
