'use client'

import { useState } from 'react'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const serviceOptions = [
    '战略咨询',
    '市场咨询',
    '行业研究',
    '投资咨询',
    '其他服务'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // 这里应该调用实际的API
      await new Promise(resolve => setTimeout(resolve, 2000)) // 模拟API调用
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="cmp-cmp-container responsivegrid full-width-constraint">
      <div className="cmp-container" style={{ backgroundColor: 'rgb(248,248,248)' }}>
        <div className="contact-form-section ui-vs-top--lg ui-vs-bottom--lg">
          
          {/* 表单介绍 */}
          <div className="form-intro">
            <div className="title">
              <div className="cmp-title">
                <h2 className="cmp-title__text">在线咨询</h2>
              </div>
            </div>
            <div className="text">
              <div className="cmp-text">
                <p>填写下方表单，我们将尽快与您联系，为您提供专业的咨询服务</p>
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              
              {/* 基本信息 */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    姓名 <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="请输入您的姓名"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    公司名称
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="请输入您的公司名称"
                  />
                </div>
              </div>

              {/* 联系信息 */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    邮箱 <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="请输入您的邮箱地址"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    联系电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="请输入您的联系电话"
                  />
                </div>
              </div>

              {/* 服务选择 */}
              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  感兴趣的服务
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">请选择您感兴趣的服务</option>
                  {serviceOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* 详细需求 */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  详细需求 <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                  rows={6}
                  placeholder="请详细描述您的需求，我们将为您提供专业的咨询服务"
                />
              </div>

              {/* 提交状态 */}
              {submitStatus === 'success' && (
                <div className="form-message form-message--success">
                  ✅ 提交成功！我们将在24小时内与您联系。
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-message form-message--error">
                  ❌ 提交失败，请稍后重试或直接联系我们。
                </div>
              )}

              {/* 提交按钮 */}
              <div className="form-actions">
                <button
                  type="submit"
                  className="cmp-button cmp-button--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '提交中...' : '提交咨询'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
