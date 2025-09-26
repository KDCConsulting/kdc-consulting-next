import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

// 重新验证密钥（用于安全验证）
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'your-secret-key'

// 静态导出模式下禁用动态功能
export const dynamic = 'force-static'
export const revalidate = false

export async function POST(request: NextRequest) {
  try {
    // 验证请求
    const secret = request.nextUrl.searchParams.get('secret')
    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { path, tag } = body

    // 重新验证特定路径
    if (path) {
      revalidatePath(path)
      console.log(`重新验证路径: ${path}`)
    }

    // 重新验证特定标签
    if (tag) {
      revalidateTag(tag)
      console.log(`重新验证标签: ${tag}`)
    }

    // 如果没有指定路径或标签，重新验证所有页面
    if (!path && !tag) {
      // 重新验证主要页面
      const pagesToRevalidate = [
        '/',
        '/insights',
        '/news',
        '/about',
        '/services',
        '/contact'
      ]

      for (const page of pagesToRevalidate) {
        revalidatePath(page)
        console.log(`重新验证页面: ${page}`)
      }

      // 重新验证标签
      revalidateTag('insights')
      revalidateTag('news')
      revalidateTag('banner-slides')
      revalidateTag('banner-cases')
    }

    return NextResponse.json({
      message: '重新验证成功',
      timestamp: new Date().toISOString(),
      revalidated: {
        path: path || 'all pages',
        tag: tag || 'all tags'
      }
    })

  } catch (error) {
    console.error('重新验证失败:', error)
    return NextResponse.json(
      { 
        message: '重新验证失败',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// 获取重新验证状态
export async function GET() {
  return NextResponse.json({
    message: '重新验证API运行中',
    timestamp: new Date().toISOString(),
    revalidateTime: process.env.NEXT_PUBLIC_REVALIDATE_TIME || '600',
    status: 'active'
  })
}
