'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 记录错误到控制台
    console.error('新闻详情页面错误:', error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            新闻未找到
          </h2>
          <p className="text-gray-500 mb-8">
            抱歉，您访问的新闻页面不存在或已被删除。
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors mr-4"
          >
            重试
          </button>
          
          <Link
            href="/news"
            className="inline-block bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            返回新闻列表
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          <p>如果问题持续存在，请联系我们的技术支持团队。</p>
        </div>
      </div>
    </div>
  )
}
