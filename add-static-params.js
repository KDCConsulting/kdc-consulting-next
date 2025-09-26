const fs = require('fs');
const path = require('path');

// 需要添加 generateStaticParams 的文件
const serviceFiles = [
  'src/app/services/InvestmentConsulting/[documentId]/page.tsx',
  'src/app/services/IndustryAnalysis/[documentId]/page.tsx',
  'src/app/services/MarketIntelligence/[documentId]/page.tsx',
  'src/app/services/StrategicAdvisory/[documentId]/page.tsx'
];

function addGenerateStaticParams(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 检查是否已经有 generateStaticParams
    if (content.includes('generateStaticParams')) {
      console.log(`✅ ${filePath} 已有 generateStaticParams`);
      return;
    }
    
    // 在接口定义后添加 generateStaticParams
    const interfaceMatch = content.match(/interface \w+ \{[^}]+\}/);
    if (interfaceMatch) {
      const insertPoint = interfaceMatch.index + interfaceMatch[0].length;
      const beforeInsert = content.substring(0, insertPoint);
      const afterInsert = content.substring(insertPoint);
      
      const generateStaticParamsCode = `

// 生成静态参数
export async function generateStaticParams() {
  try {
    const response = await getServicesData(ServiceType.INVESTMENT);
    return response.map((service) => ({
      documentId: service.documentId,
    }))
  } catch (error) {
    console.error('生成静态参数失败:', error);
    return [];
  }
}`;
      
      content = beforeInsert + generateStaticParamsCode + afterInsert;
      fs.writeFileSync(filePath, content);
      console.log(`✅ 已添加 generateStaticParams 到 ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ 处理失败: ${filePath}`, error.message);
  }
}

// 执行添加
serviceFiles.forEach(addGenerateStaticParams);
console.log('🎉 所有服务页面已添加 generateStaticParams！');
