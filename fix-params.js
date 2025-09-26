const fs = require('fs');
const path = require('path');

// 需要修复的文件列表
const filesToFix = [
  'src/app/services/InvestmentConsulting/[documentId]/page.tsx',
  'src/app/services/IndustryAnalysis/[documentId]/page.tsx',
  'src/app/services/MarketIntelligence/[documentId]/page.tsx',
  'src/app/services/StrategicAdvisory/[documentId]/page.tsx',
  'src/app/news/[documentId]/layout.tsx'
];

function fixParamsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 修复 generateMetadata 函数中的 params 使用
    content = content.replace(
      /params\.documentId/g,
      'const { documentId } = await params'
    );
    
    // 修复页面组件中的 params 使用
    content = content.replace(
      /export default async function \w+\(\{ params \}: \w+\) \{/g,
      (match) => {
        return match + '\n  const { documentId } = await params';
      }
    );
    
    // 修复 generateMetadata 函数
    content = content.replace(
      /export async function generateMetadata\(\{[\s\S]*?params[\s\S]*?\}: \w+\): Promise<Metadata> \{/g,
      (match) => {
        return match.replace(
          /params\.documentId/g,
          'const { documentId } = await params'
        );
      }
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ 修复完成: ${filePath}`);
  } catch (error) {
    console.error(`❌ 修复失败: ${filePath}`, error.message);
  }
}

// 执行修复
filesToFix.forEach(fixParamsInFile);
console.log('🎉 所有文件修复完成！');
