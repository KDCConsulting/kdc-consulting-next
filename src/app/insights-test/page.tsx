'use client'

import { useEffect, useState } from 'react'
import { insightsApi, type Insight } from '@/lib/api'

export default function InsightsTestPage() {
  const [insights, setInsights] = useState<Insight[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true)
        const response = await insightsApi.getInsights({
          pageSize: 10,
          sort: 'SortOrder:asc,createdAt:desc'
        })
        setInsights(response.data || [])
        setError(null)
      } catch (err) {
        console.error('获取洞察数据失败:', err)
        setError(err instanceof Error ? err.message : '获取数据失败')
      } finally {
        setLoading(false)
      }
    }

    fetchInsights()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">洞察数据测试</h1>
        <div className="text-center">加载中...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">洞察数据测试</h1>
        <div className="text-red-500">错误: {error}</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">洞察数据测试</h1>
      <div className="mb-4">
        <p>成功获取 {insights.length} 条洞察数据</p>
      </div>
      
      <div className="grid gap-4">
        {insights.map((insight) => (
          <div key={insight.id} className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{insight.title}</h2>
            <div className="text-sm text-gray-600 mb-2">
              <p>ID: {insight.id}</p>
              <p>Document ID: {insight.documentId}</p>
              <p>作者: {insight.Author || '未知'}</p>
              <p>行业: {insight.industrys || '未分类'}</p>
              <p>来源: {insight.Source || '未知'}</p>
              <p>排序: {insight.SortOrder || '未设置'}</p>
            </div>
            {insight.Subtitle && (
              <p className="text-sm text-gray-700 mb-2">副标题: {insight.Subtitle}</p>
            )}
            {insight.Description && (
              <p className="text-sm text-gray-600 mb-2">描述: {insight.Description}</p>
            )}
            {insight.PcCover && (
              <div className="text-sm text-gray-500">
                <p>封面图片: {insight.PcCover.name}</p>
                <p>图片URL: {insight.PcCover.url}</p>
              </div>
            )}
            <div className="text-xs text-gray-400 mt-2">
              <p>创建时间: {new Date(insight.createdAt).toLocaleString()}</p>
              <p>更新时间: {new Date(insight.updatedAt).toLocaleString()}</p>
              <p>发布时间: {new Date(insight.publishedAt).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
