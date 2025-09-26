const fs = require('fs');
const path = require('path');

// 需要恢复的文件列表
const filesToRestore = [
  'src/app/news/[documentId]/page.tsx.disabled',
  'src/app/report/[documentId]/page.tsx.disabled',
  'src/app/services/IndustryAnalysis/[documentId]/page.tsx.disabled',
  'src/app/services/InvestmentConsulting/[documentId]/page.tsx.disabled',
  'src/app/services/MarketIntelligence/[documentId]/page.tsx.disabled',
  'src/app/services/StrategicAdvisory/[documentId]/page.tsx.disabled'
];

function restoreFile(filePath) {
  try {
    const newPath = filePath.replace('.disabled', '');
    
    // 读取 .disabled 文件内容
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 写入新文件
    fs.writeFileSync(newPath, content);
    
    // 删除 .disabled 文件
    fs.unlinkSync(filePath);
    
    console.log(`✅ 已恢复: ${newPath}`);
  } catch (error) {
    console.error(`❌ 恢复失败: ${filePath}`, error.message);
  }
}

// 执行恢复
filesToRestore.forEach(restoreFile);
console.log('🎉 所有动态路由已恢复！');
