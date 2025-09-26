/**
 * 浏览器能力检测和rem适配工具
 * 从原始HTML中提取并适配到Next.js项目
 */

// 浏览器重定向检测
export function browserRedirect() {
  if (typeof window === 'undefined') return

  const sUserAgent = navigator.userAgent.toLowerCase()
  const bIsIpad = sUserAgent.match(/ipad/i) !== null
  const bIsIphoneOs = sUserAgent.match(/iphone os/i) !== null
  const bIsMidp = sUserAgent.match(/midp/i) !== null
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) !== null
  const bIsUc = sUserAgent.match(/ucweb/i) !== null
  const bIsAndroid = sUserAgent.match(/android/i) !== null
  const bIsCE = sUserAgent.match(/windows ce/i) !== null
  const bIsWM = sUserAgent.match(/windows mobile/i) !== null
  
  const isMobile = bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM
  
  if (isMobile) {
    // 移动端重定向到移动版页面
    window.location.href = '/mobile'
  }
  
  console.log('PC端访问:', !isMobile)
  return !isMobile
}

// rem适配函数（已完全禁用）
export function remAdaptation() {
  // rem适配功能已完全禁用，避免影响页面布局
  // 如果需要启用，请手动取消注释以下代码
  return
}

// Swiper缩放适配（保留功能但谨慎使用）
export function swiperScaleAdaptation() {
  if (typeof window === 'undefined') return

  const adaptSwiperScale = () => {
    const swiperWidth = 2080
    const documentWidth = window.innerWidth
    
    // 只在特定条件下应用缩放，避免影响其他元素
    if (documentWidth < 1800) {
      const scale = documentWidth / swiperWidth
      const swiperElements = document.querySelectorAll('.swiperIndexCase')
      
      // 确保只对特定的Swiper元素应用缩放
      if (swiperElements.length > 0) {
        swiperElements.forEach((element: Element) => {
          const htmlElement = element as HTMLElement
          // 添加条件检查，确保元素存在且可见
          if (htmlElement && htmlElement.offsetParent !== null) {
            htmlElement.style.transform = `scale(${scale}) translate(-50%)`
          }
        })
      }
    }
  }

  // 延迟初始化，确保DOM已加载
  setTimeout(() => {
    adaptSwiperScale()
  }, 100)
  
  // 监听窗口大小变化
  window.addEventListener('resize', adaptSwiperScale)
  
  console.log('Swiper缩放适配功能已启用，仅影响.swiperIndexCase元素')
}

// 初始化所有适配功能
export function initBrowserAdaptations() {
  if (typeof window === 'undefined') return

  // 浏览器重定向检测
  browserRedirect()
  
  // Swiper缩放适配（谨慎使用）
  swiperScaleAdaptation()
  
  console.log('浏览器适配功能已初始化：重定向检测✓，Swiper适配✓')
}

// 页面加载完成后初始化
export function initOnPageLoad() {
  if (typeof window === 'undefined') return

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBrowserAdaptations)
  } else {
    initBrowserAdaptations()
  }
}
