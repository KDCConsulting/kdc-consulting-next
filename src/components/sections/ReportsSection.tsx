'use client'

import Link from 'next/link'
import Image from 'next/image'

interface MainReport {
  title: string
  description: string
  link: string
}

interface SideReport {
  title: string
  description: string
  image: string
  link: string
}

interface ReportsSectionProps {
  mainReport: MainReport
  sideReports: SideReport[]
}

export function ReportsSection({ mainReport, sideReports }: ReportsSectionProps) {
  return (
    <div className="container responsivegrid full-width newsIndex">
    
       <div className="cmp-cascading-block_first-row">
         <div className="title">
           <div className="cmp-title">
             <h2 className="cmp-title__text">精选报告</h2>
           </div>
         </div>
 
         <div className="text">
           <div className="cmp-text cmp-consent--verify">
             <p style={{textAlign: 'center'}}>解密内在规律，塑造全局优势</p>
           </div>
         </div>
 
       </div>
 
       <div className="w">
         <div className="flex">
           <div className="flex-left">
             <div className="news-item">
               <div style={{maxWidth: '512px'}}>
                 <h3>{mainReport.title}</h3>
                 <p>{mainReport.description}</p>
                 <Link href={mainReport.link} className="underlineAni">
                   <span>阅读更多</span>
                 </Link>
               </div>
             </div>
           </div>
           <div className="flex-right">
             {sideReports.map((report, index) => (
               <div key={index} className="news-item">
                 <div className="news-item-img">
                   <img 
                     src={report.image} 
                     alt={report.title} 
                     className="newsItemLeft" 
                   />
                 </div>
                 <div className="newsItemRight">
                   <h3>{report.title}</h3>
                   <p>{report.description}</p>
                   <Link href={report.link} className="underlineAni">
                     <span>阅读更多</span>
                   </Link>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
 
     </div>
  )
}