'use client'

interface DownloadButtonProps {
  url: string
}

export function DownloadButton({ url }: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = url
    link.download = url.split('/').pop() || 'report.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      className="free-download"
      data-url={url}
      onClick={handleDownload}
    //   style={{
    //     backgroundColor: '#0091ff',
    //     color: 'white',
    //     border: 'none',
    //     padding: '12px 24px',
    //     borderRadius: '4px',
    //     cursor: 'pointer',
    //     fontSize: '16px',
    //     fontFamily: '"SourceHanSansCN"',
    //     fontWeight: '500',
    //     marginTop: '20px',
    //     transition: 'all 0.3s ease',
    //     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    //     position: 'relative',
    //     overflow: 'hidden'
    //   }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#0078d4'
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#0091ff'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
    >
      点击下载报告原文
    </button>
  )
}
