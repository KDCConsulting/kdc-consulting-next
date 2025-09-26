'use client'

import { useState } from 'react'

export function InsightsBanner() {
  const [showSubscribeForm, setShowSubscribeForm] = useState(false)

  const handleSubscribe = () => {
    setShowSubscribeForm(true)
  }

  const handleCloseSubscribe = () => {
    setShowSubscribeForm(false)
  }

  return (
    <>
     <div className="banner kzgc-banner" style={{backgroundImage: 'url(https://www.kzconsulting.cn/static/images/banner-insight.png)'}}>
			<div className="root responsivegrid">
				<h2>订阅“科智洞察”</h2>
				<p style={{textShadow: 'none'}}>立即订阅科智咨询数字科技领域洞察周报，了解最新趋势</p>
				<a href="javascript:void(0)" className="subscribe-btn" id="subscribeBtn" style={{marginBottom: '20px'}} onClick={handleSubscribe}>立即订阅</a>
			</div>
		</div>

      {/* 订阅表单 */}
      {showSubscribeForm && (
        <div className="openFormMask" id="openFormMaskSubscribe" style={{display: 'block'}}>
          <div className="form">
            <h3 style={{marginBottom: '0'}}>订阅&ldquo;科智洞察&rdquo;</h3>
            <p style={{textAlign: 'center', marginBottom: '40px', lineHeight: 2, marginTop: '10px'}}>
              立即订阅科智咨询数字科技领域洞察周报，了解最新趋势
            </p>
            <button className="close" onClick={handleCloseSubscribe}></button>
            
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

            <button className="submit" id="subscribeSubmit">订阅</button>
          </div>
        </div>
      )}
    </>
  )
}
