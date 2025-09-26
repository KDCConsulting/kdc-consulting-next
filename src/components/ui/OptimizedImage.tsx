import Image from 'next/image'
import { OptimizedImageProps } from '@/types/components'
import { IMAGE_CONFIG } from '@/lib/constants'

export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props
}: OptimizedImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        placeholder="blur"
        blurDataURL={IMAGE_CONFIG.placeholder}
        sizes={sizes}
        {...props}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      placeholder="blur"
      blurDataURL={IMAGE_CONFIG.placeholder}
      sizes={sizes}
      {...props}
    />
  )
}
