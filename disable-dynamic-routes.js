const fs = require('fs');
const path = require('path');

// 需要禁用的动态路由
const dynamicRoutes = [
  'src/app/services/InvestmentConsulting/[documentId]/page.tsx',
  'src/app/services/IndustryAnalysis/[documentId]/page.tsx',
  'src/app/services/MarketIntelligence/[documentId]/page.tsx',
  'src/app/services/StrategicAdvisory/[documentId]/page.tsx',
  'src/app/insights/[documentId]/page.tsx',
  'src/app/news/[documentId]/page.tsx',
  'src/app/report/[documentId]/page.tsx'
];

function disableDynamicRoute(filePath) {
  try {
    // 重命名文件以禁用
    const newPath = filePath.replace('.tsx', '.tsx.disabled');
    if (fs.existsSync(filePath)) {
      fs.renameSync(filePath, newPath);
      console.log(`✅ 已禁用: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ 禁用失败: ${filePath}`, error.message);
  }
}

// 执行禁用
dynamicRoutes.forEach(disableDynamicRoute);
console.log('🎉 所有动态路由已禁用！');
