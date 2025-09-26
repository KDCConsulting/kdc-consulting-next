import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { ContactForm } from "@/components/sections/ContactForm"
import { ContactInfo } from "@/components/sections/ContactInfo"

export const metadata: Metadata = {
  title: "联系我们 | 科智咨询",
  description: "联系科智咨询，获取专业的数字科技咨询服务。我们提供战略咨询、市场研究、行业分析等全方位服务。",
  keywords: "联系我们,科智咨询,咨询服务,战略咨询,市场研究",
  openGraph: {
    title: "联系我们 | 科智咨询",
    description: "联系科智咨询，获取专业的数字科技咨询服务。我们提供战略咨询、市场研究、行业分析等全方位服务。",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main>
      {/* 页面头部 */}
      <HeroSection
        title="联系我们"
        subtitle="专业咨询"
        description="我们期待与您合作，为您提供专业的数字科技咨询服务"
        backgroundImage="/images/contact-hero.jpg"
      />

      {/* 联系信息 */}
      <ContactInfo />

      {/* 联系表单 */}
      <ContactForm />
    </main>
  )
}
