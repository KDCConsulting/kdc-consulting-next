'use client'

import { useState } from 'react'

export function SubscribeForm() {
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = () => {
    setShowForm(true)
  }

  const handleCloseSubscribe = () => {
    setShowForm(false)
    // 清空表单和错误信息
    const inputs = document.querySelectorAll('#openFormMaskSubscribe input[type="text"]')
    inputs.forEach(input => (input as HTMLInputElement).value = '')
    const errors = document.querySelectorAll('#openFormMaskSubscribe .error')
    errors.forEach(error => (error as HTMLElement).style.display = 'none')
    const formItems = document.querySelectorAll('#openFormMaskSubscribe .formItem')
    formItems.forEach(item => item.classList.remove('error'))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return

    // 表单验证
    const email = (document.querySelector('input[name="Email"]') as HTMLInputElement)?.value.trim()
    const firstname = (document.querySelector('input[name="Firstname"]') as HTMLInputElement)?.value.trim()
    const lastname = (document.querySelector('input[name="Lastname"]') as HTMLInputElement)?.value.trim()

    let isValid = true

    // 验证邮箱
    if (!email) {
      document.getElementById('formItemEmailSubscribe')?.classList.add('error')
      document.querySelector('#formItemEmailSubscribe .error')?.setAttribute('style', 'display: block')
      isValid = false
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (!emailPattern.test(email)) {
        document.getElementById('formItemEmailSubscribe')?.classList.add('error')
        const errorElement = document.querySelector('#formItemEmailSubscribe .error') as HTMLElement
        if (errorElement) {
          errorElement.textContent = '请输入有效的电邮地址'
          errorElement.style.display = 'block'
        }
        isValid = false
      } else {
        document.getElementById('formItemEmailSubscribe')?.classList.remove('error')
        document.querySelector('#formItemEmailSubscribe .error')?.setAttribute('style', 'display: none')
      }
    }

    // 验证名字
    if (!firstname) {
      document.getElementById('formItemFirstnameSubscribe')?.classList.add('error')
      document.querySelector('#formItemFirstnameSubscribe .error')?.setAttribute('style', 'display: block')
      isValid = false
    } else {
      document.getElementById('formItemFirstnameSubscribe')?.classList.remove('error')
      document.querySelector('#formItemFirstnameSubscribe .error')?.setAttribute('style', 'display: none')
    }

    // 验证姓氏
    if (!lastname) {
      document.getElementById('formItemLastnameSubscribe')?.classList.add('error')
      document.querySelector('#formItemLastnameSubscribe .error')?.setAttribute('style', 'display: block')
      isValid = false
    } else {
      document.getElementById('formItemLastnameSubscribe')?.classList.remove('error')
      document.querySelector('#formItemLastnameSubscribe .error')?.setAttribute('style', 'display: none')
    }

    if (!isValid) return

    try {
      setIsSubmitting(true)
      
      // 收集表单数据
      const formData = {
        Email: email,
        Firstname: firstname,
        Lastname: lastname,
        ExtraComment: ''
      }

      // 创建表单并提交
      const form = document.createElement('form')
      form.method = 'post'
      form.action = 'https://links.edm.kzconsulting.cn/Subscription/Add/30927/3'
      form.acceptCharset = 'UTF-8'
      form.style.display = 'none'

      // 添加表单字段
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = value
        form.appendChild(input)
      })

      // 将表单添加到body并提交
      document.body.appendChild(form)
      form.submit()

      // 设置超时重置状态
      setTimeout(() => {
        setIsSubmitting(false)
      }, 10000)

    } catch (error) {
      console.error('表单提交出错:', error)
      setIsSubmitting(false)
      alert('订阅失败，请稍后重试')
    }
  }

  return (
    <>
      <a 
        href="javascript:void(0)" 
        className="subscribe-btn" 
        id="subscribeBtn" 
        style={{marginBottom: '20px'}} 
        onClick={handleSubscribe}
      >
        立即订阅
      </a>

      {/* 订阅表单 */}
      {showForm && (
        <div className="openFormMask" id="openFormMaskSubscribe" style={{display: 'block'}}>
          <div className="form">
            <h3 style={{marginBottom: '0'}}>订阅"科智洞察"</h3>
            <p style={{textAlign: 'center', marginBottom: '40px', lineHeight: 2, marginTop: '10px'}}>
              立即订阅科智咨询数字科技领域洞察周报，了解最新趋势
            </p>
            <button className="close" onClick={handleCloseSubscribe}></button>
            
            <form onSubmit={handleSubmit}>
              <div className="formItem require" id="formItemEmailSubscribe">
                <label htmlFor="">电邮：</label>
                <input type="text" name="Email" placeholder="请输入电邮地址" />
                <span className="error">请输入电邮地址</span>
              </div>

              <div className="formItem require" id="formItemFirstnameSubscribe">
                <label htmlFor="">名字：</label>
                <input type="text" name="Firstname" placeholder="请输入名字" />
                <span className="error">请输入名字</span>
              </div>
              
              <div className="formItem require" id="formItemLastnameSubscribe">
                <label htmlFor="">姓氏：</label>
                <input type="text" name="Lastname" placeholder="请输入姓氏" />
                <span className="error">请输入姓氏</span>
              </div>

              <div className="formItem">
                <input type="hidden" name="ExtraComment" value="" />
              </div>

              <button 
                type="submit" 
                className="submit" 
                id="subscribeSubmit"
                disabled={isSubmitting}
              >
                {isSubmitting ? '提交中...' : '订阅'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
