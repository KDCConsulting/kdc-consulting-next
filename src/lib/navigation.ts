// 导航配置常量
export interface NavigationItem {
  name: string
  nameEn: string
  href: string
  description: string
  children?: NavigationItem[]
}

export const navigation: NavigationItem[] = [
  {
    name: '科智洞察',
    nameEn: 'Insights',
    href: '/insights',
    description: '行业洞察与趋势分析'
  },
  {
    name: '服务',
    nameEn: 'Capabilities',
    href: '/services',
    description: '全方位咨询服务',
    children: [
      { 
        name: '战略咨询', 
        nameEn: 'Strategic Advisory', 
        href: '/services/strategic-advisory',
        description: '企业战略规划与咨询'
      },
      { 
        name: '市场咨询', 
        nameEn: 'Market Intelligence', 
        href: '/services/market-intelligence',
        description: '市场研究与分析'
      },
      { 
        name: '行业研究', 
        nameEn: 'Industry Analysis', 
        href: '/services/industry-analysis',
        description: '深度行业研究'
      },
      { 
        name: '投资咨询', 
        nameEn: 'Investment Consulting', 
        href: '/services/investment-consulting',
        description: '投资决策支持'
      }
    ]
  },
  {
    name: '行业',
    nameEn: 'Industries',
    href: '/industries',
    description: '深度行业分析',
    children: [
      {
        name: '数字基础设施',
        nameEn: 'Digital Infrastructure',
        href: '#',
        description: '数字基础设施相关行业',
        children: [
          { 
            name: '数据中心', 
            nameEn: 'Data Center', 
            href: '/industries/data-center',
            description: '数据中心建设与运营'
          },
          { 
            name: '5G网络', 
            nameEn: '5G', 
            href: '/industries/5g',
            description: '5G网络技术与应用'
          },
          { 
            name: '半导体', 
            nameEn: 'Semiconductor', 
            href: '/industries/semiconductor',
            description: '半导体产业发展'
          },
          { 
            name: '算网一体化', 
            nameEn: 'Compute-Network Integration', 
            href: '/industries/compute-network-integration',
            description: '算力网络融合发展'
          }
        ]
      },
      {
        name: '数字技术',
        nameEn: 'Digital Technology',
        href: '#',
        description: '数字技术相关行业',
        children: [
          { 
            name: '云计算', 
            nameEn: 'Cloud Computing', 
            href: '/industries/cloud-computing',
            description: '云计算技术与服务'
          },
          { 
            name: '人工智能', 
            nameEn: 'AI', 
            href: '/industries/ai',
            description: '人工智能技术应用'
          },
          { 
            name: '区块链', 
            nameEn: 'Blockchain', 
            href: '/industries/blockchain',
            description: '区块链技术发展'
          },
          { 
            name: '大数据', 
            nameEn: 'Big Data', 
            href: '/industries/big-data',
            description: '大数据技术与应用'
          },
          { 
            name: '工业互联网', 
            nameEn: 'IIoT', 
            href: '/industries/iiot',
            description: '工业互联网平台'
          },
          { 
            name: '物联网', 
            nameEn: 'IoT', 
            href: '/industries/iot',
            description: '物联网技术应用'
          },
          { 
            name: 'AR/VR', 
            nameEn: 'AR/VR', 
            href: '/industries/ar-vr',
            description: '增强现实与虚拟现实'
          },
          { 
            name: '边缘计算', 
            nameEn: 'Edge Computing', 
            href: '/industries/edge-computing',
            description: '边缘计算技术'
          },
          { 
            name: '隐私计算', 
            nameEn: 'Privacy Computing', 
            href: '/industries/privacy-computing',
            description: '隐私计算技术'
          }
        ]
      },
      {
        name: '数字应用',
        nameEn: 'Digital Application',
        href: '#',
        description: '数字技术应用行业',
        children: [
          { 
            name: '金融科技', 
            nameEn: 'Fintech', 
            href: '/industries/fintech',
            description: '金融科技创新'
          },
          { 
            name: '智慧医疗', 
            nameEn: 'Smart Healthcare', 
            href: '/industries/smart-healthcare',
            description: '智慧医疗解决方案'
          },
          { 
            name: '智慧交通', 
            nameEn: 'Smart Transportation', 
            href: '/industries/smart-transportation',
            description: '智慧交通系统'
          },
          { 
            name: '数字媒体', 
            nameEn: 'Digital Media', 
            href: '/industries/digital-media',
            description: '数字媒体与内容'
          },
          { 
            name: '自动驾驶', 
            nameEn: 'Self-Driving', 
            href: '/industries/self-driving',
            description: '自动驾驶技术'
          },
          { 
            name: '储能', 
            nameEn: 'Energy Storage', 
            href: '/industries/energy-storage',
            description: '储能技术发展'
          },
          { 
            name: '光伏', 
            nameEn: 'Photovoltaics', 
            href: '/industries/photovoltaics',
            description: '光伏产业发展'
          },
          { 
            name: '工业机器人', 
            nameEn: 'Industrial Robots', 
            href: '/industries/industrial-robots',
            description: '工业机器人应用'
          },
          { 
            name: '无人机', 
            nameEn: 'UAV', 
            href: '/industries/uav',
            description: '无人机技术应用'
          }
        ]
      }
    ]
  },
  {
    name: '新闻中心',
    nameEn: 'News',
    href: '/news',
    description: '最新动态与资讯'
  },
  {
    name: '联系我们',
    nameEn: 'Contact',
    href: '/contact',
    description: '联系我们'
  },
  {
    name: '关于我们',
    nameEn: 'About KDC',
    href: '/about',
    description: '了解科智咨询',
    children: [
      { 
        name: '公司简介', 
        nameEn: 'Company', 
        href: '/about/company',
        description: '企业介绍与发展历程'
      },
      { 
        name: '团队介绍', 
        nameEn: 'Team', 
        href: '/about/team',
        description: '核心团队展示'
      },
      { 
        name: '成功案例', 
        nameEn: 'Cases', 
        href: '/about/cases',
        description: '项目成功案例'
      },
      { 
        name: '合作伙伴', 
        nameEn: 'Partners', 
        href: '/about/partners',
        description: '合作伙伴展示'
      },
      { 
        name: '加入我们', 
        nameEn: 'Join Us', 
        href: '/about/join-us',
        description: '招聘信息与加入方式'
      }
    ]
  }
]

// 获取所有路由路径的辅助函数
export function getAllRoutes(nav: NavigationItem[] = navigation): string[] {
  const routes: string[] = []
  
  for (const item of nav) {
    routes.push(item.href)
    if (item.children) {
      routes.push(...getAllRoutes(item.children))
    }
  }
  
  return routes
}

// 根据路径查找导航项的辅助函数
export function findNavigationItem(path: string, nav: NavigationItem[] = navigation): NavigationItem | null {
  for (const item of nav) {
    if (item.href === path) {
      return item
    }
    if (item.children) {
      const found = findNavigationItem(path, item.children)
      if (found) return found
    }
  }
  return null
}

// 获取面包屑导航的辅助函数
export function getBreadcrumbs(path: string, nav: NavigationItem[] = navigation): NavigationItem[] {
  const breadcrumbs: NavigationItem[] = []
  
  function findPath(currentNav: NavigationItem[], targetPath: string, currentBreadcrumbs: NavigationItem[]): boolean {
    for (const item of currentNav) {
      const newBreadcrumbs = [...currentBreadcrumbs, item]
      
      if (item.href === targetPath) {
        breadcrumbs.push(...newBreadcrumbs)
        return true
      }
      
      if (item.children && findPath(item.children, targetPath, newBreadcrumbs)) {
        return true
      }
    }
    return false
  }
  
  findPath(nav, path, [])
  return breadcrumbs
}

// 获取顶级导航项（不包含子项）
export function getTopLevelNavigation(): NavigationItem[] {
  return navigation.map(item => ({
    ...item,
    children: undefined
  }))
}

// 获取移动端导航项（只显示一级和二级）
export function getMobileNavigation(): NavigationItem[] {
  return navigation.map(item => ({
    ...item,
    children: item.children?.map(child => ({
      ...child,
      children: undefined
    }))
  }))
}
