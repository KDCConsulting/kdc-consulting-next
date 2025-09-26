export function Footer() {
  return (
    <footer className="customexperiencefragment experiencefragment full-width">
    <div id="footer" className="cmp-experiencefragment cmp-experiencefragment--global-footer">
  
  
  
      <div id="container-b570229521" className="cmp-container" style={{backgroundColor: '#303030'}}>
  
  
  
        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
  
          <div className="globalfooter has-tooltip aem-GridColumn aem-GridColumn--default--12">
  
            <div className="cmp-global-footer">
              <div className="cmp-global-footer__row">
                <div className="cmp-global-footer__logo">
                  <a href="https://www.kzconsulting.cn">
                    <img className="cmp-global-footer__logo-image" alt="科智咨询" src="https://www.kzconsulting.cn/static/images/logo1.png" />
                  </a>
                  
                  <div className="cmp-global-footer__links">
                    <div className="cmp-global-footer__link-item cmp-global-footer__item--footer">
                      <a href="/about" target="_self" className="cmp-global-footer__link">
                        About KDC
                      </a>
                    </div>
                    |
                    <div className="cmp-global-footer__link-item cmp-global-footer__item--footer">
                      <a href="/news" target="_self" className="cmp-global-footer__link">
                        News
                      </a>
                    </div>
                    |
                    <div className="cmp-global-footer__link-item cmp-global-footer__item--footer">
                      <a href="javascript:openMask();" target="_self" className="cmp-global-footer__link">
                        Submit Request
                      </a>
                    </div>
                    |
                    <div className="cmp-global-footer__link-item cmp-global-footer__item--footer">
                      <a href="/recruit" target="_self" className="cmp-global-footer__link">
                        Join Us
                      </a>
                    </div>
                    {/* <div className="cmp-global-footer__link-item cmp-global-footer__item--footer">
                      <a href="https://www.kzconsulting.cn/insights/index.html" target="_self" className="cmp-global-footer__link">
                        科智观察
                      </a>
                    </div> */}
                    {/* <div className="cmp-global-footer__link-item cmp-global-footer__item--footer">
                      <a href="https://report.kzconsulting.cn/bgh/index.html" target="_self"
                        className="cmp-global-footer__link">
                        报告大厅
                      </a>
                    </div>
                    | */}
                  
                  </div>
                  <div className="cmp-global-footer__links Copyright">
                    <a href="https://beian.miit.gov.cn/" target="_blank" className="cmp-global-footer__link ">
                      COPYRIGHT © 2024. KZ CONSULTING CO., LTD. ALL RIGHTS RESERVED 京ICP备13013182号-14
                    </a>
  
                  </div>
                </div>
  
                <div className="cmp-footer__item ">
                  <img src="https://www.kzconsulting.cn/static/images/footer.png" alt="" />
                  <p>Tel: 13161291179<br />
                    Email: sales@kzconsulting.cn</p>
                </div>
              </div>
  
  
            </div>
  
  
  
  
          </div>
  
  
        </div>
  
      </div>
  
  
    </div>
  
  
    <div className="openFormMask" id="openFormMaskIndex">
      <div className="form">
        <h3>Submit Request</h3>
        <p>We will contact you as soon as possible regarding your consulting needs</p>
        <button className="close"></button>
        <div className="formItem require" id="formItemNameIndex">
          <label htmlFor="">Name:</label>
          <input type="text" name="name" placeholder="Please enter your name" />
          <span className="error">Please enter your name</span>
        </div>

        <div className="formItem require" id="formItemPhoneIndex">
          <label htmlFor="">Phone:</label>
          <input type="text" name="phone" placeholder="Please enter your phone number" />
          <span className="error">Please enter your phone number</span>
        </div>
        <div className="formItem require" id="formItemEmailIndex">
          <label htmlFor="">Email:</label>
          <input type="text" name="phone" placeholder="Please enter your email" />
          <span className="error">Please enter your email</span>
        </div>
        <div className="formItem require" id="formItemCompanyName">
          <label htmlFor="">Company:</label>
          <input type="text" name="CompanyName" placeholder="Please enter your company name" maxLength={200} />
          <span className="error">Please enter your company name</span>

        </div>
        <div className="formItem require" id="formItemTitle">
          <label htmlFor="">Position:</label>
          <input type="text" name="title" placeholder="Please enter your position" maxLength={200} />
          <span className="error">Please enter your position</span>

        </div>
        <div className="formItem require" id="formItemXuqiu">
          <label htmlFor="">Requirements:</label>
          <textarea name="phone" placeholder="Please describe your business requirements" maxLength={300}></textarea>
          {/* <span className="error">请上传简历</span> */}
          <span className="error">Please describe your requirements</span>

        </div>
        <button className="submit">Submit</button>
  
      </div>
    </div>
    {/* <script defer src="https://www.kzconsulting.cn/static/js/jquery-3.5.1.min.js"></script>
    <script>
      $('.close').click(function() {
  
        $('#openFormMaskIndex').fadeOut()
      })
      function openMask() {
        $('.formItem').removeClass('err')
  
        $('#openFormMaskIndex').fadeIn()
      }
      $('.openFormMask .submit').click(function() {
        $('.formItem').removeClass('err')
        let value = $('#formItemNameIndex input').val()
        if (!value) {
          $('#formItemNameIndex').addClass('err')
          return
        }
        value = $('#formItemPhoneIndex input').val()
        if (!value) {
          $('#formItemPhoneIndex').addClass('err')
          return
        }
        value = $('#formItemEmailIndex input').val()
        if (!value) {
          $('#formItemEmailIndex').addClass('err')
          return
  
        }
        value = $('#formItemCompanyName input').val()
        if (!value) {
          $('#formItemCompanyName').addClass('err')
          return
  
        }
        value = $('#formItemTitle input').val()
        if (!value) {
          $('#formItemTitle').addClass('err')
          return
  
        }
        value = $('#formItemXuqiu textarea').val()
        if (!value) {
          $('#formItemXuqiu').addClass('err')
          return
  
        }
        let html = ''
          var formData = {
            name: $("#formItemNameIndex input").val(),
            phone: $("#formItemPhoneIndex input").val(),
            email: $("#formItemEmailIndex input").val(),
            companyName: $("#formItemCompanyName input").val(),
            xuqiu: $("#formItemXuqiu textarea").val(),
            title: $("#formItemTitle input").val(),
          };
          var formApi = 'https://www.kzconsulting.cn/api'
          $.ajax({
              type: "post",
              url: formApi + "/api/smartform/submit/baf171037a294c518e0ad9f0cff33132",
              data: { data: JSON.stringify(formData) },
              headers:{
                Authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjMyNGJmYTMwLTc1ZjItNDViMS1iZjkzLTk3MDQ2MjhmN2QyZSJ9._qp4Ybmc8YyCMZlUUknQyA7PiG8y9yJwEWxIv3f0R9WiZimLMiECT7kjvu0Wv_lt2UAq3Mrr7mvozuB65QA1kg'
              },
              dataType: "json",
              success: function(data) {
                $('#openFormMaskIndex').fadeOut()
                let html = `<div id="toast" style='background-color: rgba(0, 0, 0, 0.4);position: fixed;left: 50%;top: 50%;padding:0 110px ;transform: translate(-50%,-50%);height: 44px;z-index: 9999;font-size: 16px;font-family: "SourceHanSansCN";color: rgb(255, 255, 255);line-height: 44px;text-align: center;'>提交成功，如有回复将第一时间与您取得联系！</div>`
                $('body').append(html);
                setTimeout(function() {
                  $('#toast').remove()
                }, 3000)
              },
              error: function(data) {
                console.log(112333232)
                // alert("提交失败，请稍后重试")
                let html = `<div id="toast" style='background-color: rgba(0, 0, 0, 0.4);position: fixed;left: 50%;top: 50%;padding:0 110px ;transform: translate(-50%,-50%);height: 44px;z-index: 9999;font-size: 16px;font-family: "SourceHanSansCN";color: rgb(255, 255, 255);line-height: 44px;text-align: center;'>提交失败，请稍后重试</div>`
  
                $('body').append(html);
                setTimeout(function() {
                  $('#toast').remove()
                }, 3000)
              }
            });
         
      })
    </script> */}
  </footer>
  )
}
