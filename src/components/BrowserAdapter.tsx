'use client'

import { useEffect } from 'react'
import { initBrowserAdaptations } from '@/lib/browser-utils'

/**
 * 浏览器适配组件
 * 负责初始化浏览器能力检测和rem适配
 */
export function BrowserAdapter() {
  useEffect(() => {
    // 页面加载完成后初始化浏览器适配
    initBrowserAdaptations()
  }, [])

  return null
}
