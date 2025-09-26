// Cloudflare Workers 脚本 - 处理静态文件
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 处理根路径
    if (url.pathname === '/') {
      url.pathname = '/index.html';
    }
    
    // 处理其他路径，添加 .html 扩展名（如果需要）
    if (!url.pathname.includes('.') && !url.pathname.endsWith('/')) {
      url.pathname += '/index.html';
    }
    
    // 从 ASSETS 绑定获取文件
    try {
      const file = await env.ASSETS.fetch(new Request(url.toString()));
      
      if (file.status === 404) {
        // 如果文件不存在，尝试返回 404.html
        const notFoundUrl = new URL('/404.html', url);
        const notFoundFile = await env.ASSETS.fetch(new Request(notFoundUrl.toString()));
        
        if (notFoundFile.status === 200) {
          return new Response(notFoundFile.body, {
            status: 404,
            headers: notFoundFile.headers
          });
        }
        
        return new Response('Not Found', { status: 404 });
      }
      
      return file;
    } catch (error) {
      return new Response('Internal Server Error', { status: 500 });
    }
  }
};
