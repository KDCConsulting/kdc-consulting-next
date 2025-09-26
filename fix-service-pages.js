const fs = require('fs');
const path = require('path');

// 需要修复的服务页面
const servicePages = [
  'src/app/services/IndustryAnalysis/[documentId]/page.tsx',
  'src/app/services/MarketIntelligence/[documentId]/page.tsx',
  'src/app/services/StrategicAdvisory/[documentId]/page.tsx'
];

// 服务类型映射
const serviceTypeMap = {
  'IndustryAnalysis': 'INDUSTRY_ANALYSIS',
  'MarketIntelligence': 'MARKET_INTELLIGENCE', 
  'StrategicAdvisory': 'STRATEGIC_ADVISORY'
};

function fixServicePage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 提取服务类型
    const serviceType = path.basename(path.dirname(path.dirname(filePath)));
    const serviceTypeEnum = serviceTypeMap[serviceType];
    
    if (!serviceTypeEnum) {
      console.error(`❌ 未知服务类型: ${serviceType}`);
      return;
    }
    
    // 修复接口定义
    content = content.replace(
      /interface \w+DetailPageProps \{\s*params: Promise<\{\s*documentId: string;\s*\}\s*$/m,
      `interface ${serviceType}DetailPageProps {
    params: Promise<{
        documentId: string;
    }>;`
    );
    
    // 修复 generateStaticParams 中的服务类型
    content = content.replace(
      /const response = await getServicesData\(ServiceType\.INVESTMENT\);/g,
      `const response = await getServicesData(ServiceType.${serviceTypeEnum});`
    );
    
    // 修复 generateMetadata 中的服务类型
    content = content.replace(
      /const service = await getServiceByDocumentId\(\s*ServiceType\.INVESTMENT,/g,
      `const service = await getServiceByDocumentId(
        ServiceType.${serviceTypeEnum},`
    );
    
    // 修复页面组件中的服务类型
    content = content.replace(
      /const service = await getServiceByDocumentId\(\s*ServiceType\.INVESTMENT,/g,
      `const service = await getServiceByDocumentId(
        ServiceType.${serviceTypeEnum},`
    );
    
    // 修复获取所有服务数据的调用
    content = content.replace(
      /const allInvestmentServices = await getServicesData\(ServiceType\.INVESTMENT\);/g,
      `const all${serviceType}Services = await getServicesData(ServiceType.${serviceTypeEnum});`
    );
    
    // 修复变量名
    content = content.replace(
      /allInvestmentServices/g,
      `all${serviceType}Services`
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ 已修复: ${filePath}`);
  } catch (error) {
    console.error(`❌ 修复失败: ${filePath}`, error.message);
  }
}

// 执行修复
servicePages.forEach(fixServicePage);
console.log('🎉 所有服务页面已修复！');
