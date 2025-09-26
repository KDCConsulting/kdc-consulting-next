import { z } from 'zod'

// 联系表单验证
export const contactFormSchema = z.object({
  name: z.string().min(1, '请输入姓名').max(50, '姓名不能超过50个字符'),
  phone: z.string().min(1, '请输入联系电话').regex(
    /^1[3-9]\d{9}$|^(\d{3,4}-?)?\d{7,8}$/,
    '请输入正确的联系电话'
  ),
  email: z.string().min(1, '请输入邮箱').email('请输入正确的邮箱'),
  company: z.string().max(100, '公司名称不能超过100个字符').optional(),
  message: z.string().max(500, '需求描述不能超过500个字符').optional(),
})

// 订阅表单验证
export const newsletterFormSchema = z.object({
  email: z.string().min(1, '请输入邮箱').email('请输入正确的邮箱'),
})

// 搜索表单验证
export const searchFormSchema = z.object({
  query: z.string().min(1, '请输入搜索关键词').max(100, '搜索关键词不能超过100个字符'),
  category: z.string().optional(),
  type: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type NewsletterFormData = z.infer<typeof newsletterFormSchema>
export type SearchFormData = z.infer<typeof searchFormSchema>
