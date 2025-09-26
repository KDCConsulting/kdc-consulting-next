import { notFound } from 'next/navigation'
import { newsApi } from '@/lib/api'
import '@/styles/index.css'
import '@/styles/newsDetails.css'
import Script from 'next/script'

interface NewsDetailPageProps {
  params: Promise<{
    documentId: string
  }>
}

// 生成静态参数
export async function generateStaticParams(): Promise<{ documentId: string }[]> {
  // 返回一些静态参数，确保构建成功
  return [
    { documentId: 'news-1' },
    { documentId: 'news-2' },
    { documentId: 'news-3' }
  ];
}

// 生成元数据
export async function generateMetadata({ params }: NewsDetailPageProps) {
  try {
    const response = await newsApi.getNewsByDocumentId(params.documentId)
    const news = response.data?.[0]

    if (!news) {
      return {
        title: '新闻详情 - 科智咨询',
        description: '科智咨询专业新闻资讯',
      }
    }

    return {
      title: `${news.title} - 科智咨询`,
      description: news.Description || news.Subtitle || '科智咨询专业新闻资讯',
      keywords: news.industrys ? `${news.industrys},科智咨询,新闻资讯` : '科智咨询,新闻资讯',
    }
  } catch {
    return {
      title: '新闻详情 - 科智咨询',
      description: '科智咨询专业新闻资讯',
    }
  }
}

// 获取新闻详情数据
async function getNewsDetail(documentId: string) {
  try {
    const response = await newsApi.getNewsByDocumentId(documentId)
    return response.data?.[0] || null
  } catch (error) {
    console.error('获取新闻详情失败:', error)
    return null
  }
}

// 渲染富文本内容
function renderContent(content: unknown) {
  if (!content || !Array.isArray(content)) {
    return <p>暂无内容</p>
  }

  return content.map((item: unknown, index: number) => {
    if (typeof item === 'object' && item !== null && 'type' in item && item.type === 'paragraph') {
      const paragraphItem = item as { children?: Array<{ text?: string }> }
      const text = paragraphItem.children
        ?.filter((child) => child.text)
        ?.map((child) => child.text)
        ?.join('') || ''

      if (text.trim()) {
          return (
            <p key={index} className="mb-4">
              {text}
            </p>
          )
        }
      }
      return null
    }).filter(Boolean)
  }

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { documentId } = await params
  const news = await getNewsDetail(params.documentId)

  if (!news) {
    notFound()
  }

  const publishedDate = new Date(news.publishedAt).toLocaleDateString('zh-CN')

  // 获取推荐阅读文章（排除当前文章）
  let recommendedArticles: Array<{
    documentId: string
    title: string
    Description?: string
    Subtitle?: string
  }> = []
  
  try {
    const response = await newsApi.getNews({ 
      pageSize: 4, 
      sort: 'publishedAt:desc' 
    })
    
    // 过滤掉当前文章，取前3篇
    recommendedArticles = response.data
      .filter(article => article.documentId !== params.documentId)
      .slice(0, 3)
      .map(article => ({
        documentId: article.documentId,
        title: article.title,
        Description: article.Description || undefined,
        Subtitle: article.Subtitle
      }))
  } catch (error) {
    console.error('获取推荐文章失败:', error)
    // 使用默认推荐文章
    recommendedArticles = [
      {
        documentId: '1145658887655915520',
        title: '科智咨询亮相中国IDC产业（大湾区）年度大典',
        Description: '科智咨询亮相中国IDC产业（大湾区）年度大典，深度解读港澳大湾区(广东)数据中心产业高质量发展指南'
      },
      {
        documentId: '1139919557683576832',
        title: '科智咨询携手中国信息通信研究院撰写《数字中国产业洞察》报告',
        Description: '科智咨询携手中国信息通信研究院撰写《数字中国产业洞察》报告'
      },
      {
        documentId: '1120287321934004224',
        title: '科智咨询助力亚太经合组织（APEC）地区远程医疗发展研究项目成果落地',
        Description: '科智咨询助力亚太经合组织（APEC）地区远程医疗发展研究项目成果落地'
      }
    ]
  }

  return (
    <div>
      <div className="bg-f2f2f2 article-info">
        <div className="article">
          <h1>{news.title}</h1>
          <div className="sub-title">{news.Subtitle || news.Description || ''}</div>
          <div className="datetime">
            <span style={{marginRight: '10px'}}>本站</span>
            {publishedDate}
          </div>
          </div>
          </div>
      <div>
        <div className="root container responsivegrid">
          <div id="container-7f48ddee19" className="cmp-container">
            <main className="container responsivegrid">
              <div id="main" className="cmp-container">
                <div className="container responsivegrid article" style={{paddingRight: '30px'}}>
                  <a href="javascript:void(0)" className="subscribe-btn" id="subscribeBtn" style={{marginBottom: '20px'}}>立即订阅</a>
                  <div className="flex">
                    {/* 富文本内容渲染 */}
                    <div className="flex-left articleContent">
          {news.Content && Array.isArray(news.Content) ? (
            <div className="space-y-4">
              {renderContent(news.Content)}
            </div>
          ) : (
            <div className="text-gray-600">
              <p>暂无详细内容</p>
            </div>
          )}
        </div>
                    <div className="flex-right">
                      {/* 右侧内容区域 */}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        
        <div className="container responsivegrid full-width-constraint" style={{backgroundColor: '#f6f6f6'}}>
          <div id="container-6c8f1a92a5" className="cmp-container">
            <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs w">
              {/* Card Listing Block */}
              <div className="channel">
                <h3 className="" style={{marginBottom: '35px', textAlign: 'left'}}>推荐阅读</h3>
              </div>

              <div className="cmp-card-listing cmp-card-listing--cta-2-to-1">
                <div className="cmp-card-listing_first-row">
                  <div className="cmp-card-listing_first-row_left-col">
                    <div className="container responsivegrid">
                      <div id="container-b093a47fb4" className="cmp-container">
                        {/* 左侧内容 */}
                      </div>
                    </div>
                  </div>

                  <div className="cmp-card-listing_first-row_right-col">
                    <div className="container responsivegrid">
                      <div id="container-fd11b1ff86" className="cmp-container">
                        {/* 右侧内容 */}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="cmp-card-listing_second-row">
                  <div className="container responsivegrid">
                    <div className="cmp-container">
                      {recommendedArticles.map((article, index) => (
                        <div key={article.documentId || index} className="teaser dcc dcc-title-summary-arrow card has-ellipsis color-block-blue-dark">
                          <div className="cmp-teaser">
                            <div className="cmp-teaser__content">
                              <h3 className="cmp-teaser__title">
                                <a className="cmp-teaser__title-link" href={`/news/${article.documentId}`}>
                                  <span>{article.title}</span>
                                  <span className="cmp-teaser__arrow-tag">
                                    <span className="cmp-teaser__arrow-tag--icon"></span>
                                  </span>
                                </a>
                              </h3>
                              <div className="cmp-teaser__description">
                                {article.Description || article.Subtitle || '暂无描述'}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 外部脚本 */}
        <Script 
          defer 
          src="https://www.kzconsulting.cn/static/css/clientlibs/clientlib-site.lc-e985a608a25834212d757ad0c8caf05e-lc.min.js"
        />
        <Script 
          defer 
          src="https://www.kzconsulting.cn/static/css/clientlibs/clientlib-base.lc-012ae2b1d05e8ff137d70f70afce04c9-lc.min.js"
        />

        {/* 内联脚本 */}
        <Script id="swiper-script" strategy="afterInteractive">
          {`
            // 等待jQuery加载完成
            function waitForJQuery(callback) {
              if (typeof window.$ !== 'undefined') {
                callback();
              } else {
                setTimeout(() => waitForJQuery(callback), 100);
              }
            }
            
            waitForJQuery(function() {
              let swiperWidth = 2080;
              let documentWidth = $(document).width()
              if (documentWidth < 1800) {
                $('.swiperIndexCase').css('transform', 'scale(' + documentWidth / swiperWidth + ') translate(-50%)')
              }
              CQ_Analytics.TestTarget.maxProfileParams = 11;

              if (CQ_Analytics.CCM) {
                if (CQ_Analytics.CCM.areStoresInitialized) {
                  CQ_Analytics.TestTarget.registerMboxUpdateCalls();
                } else {
                  CQ_Analytics.CCM.addListener("storesinitialize", function (e) {
                    CQ_Analytics.TestTarget.registerMboxUpdateCalls();
                  });
                }
              } else {
                // client context not there, still register calls
                CQ_Analytics.TestTarget.registerMboxUpdateCalls();
              }
            });
          `}
        </Script>

        {/* 订阅表单JavaScript */}
        <Script id="subscribe-form-script" strategy="afterInteractive">
          {`
            // 等待jQuery加载完成
            function waitForJQuery(callback) {
              if (typeof window.$ !== 'undefined') {
                callback();
              } else {
                setTimeout(() => waitForJQuery(callback), 100);
              }
            }
            
            waitForJQuery(function() {
              $(document).ready(function() {
              // 点击订阅按钮显示表单
              $('#subscribeBtn').click(function () {
                $('#openFormMaskSubscribe').show();
              });

              // 点击关闭按钮隐藏表单
              $('#openFormMaskSubscribe .close').click(function() {
                $('#openFormMaskSubscribe').hide();
                // 清空表单和错误信息
                $('#openFormMaskSubscribe input[type="text"]').val('');
                $('#openFormMaskSubscribe .error').hide();
                $('#openFormMaskSubscribe .formItem').removeClass('error');
                // 重置提交按钮状态
                $('#subscribeSubmit').text('订阅').prop('disabled', false);
              });

              // 点击遮罩层关闭表单
              $('#openFormMaskSubscribe').click(function(e) {
                if (e.target === this) {
                  $(this).hide();
                  // 清空表单和错误信息
                  $('#openFormMaskSubscribe input[type="text"]').val('');
                  $('#openFormMaskSubscribe .error').hide();
                  $('#openFormMaskSubscribe .formItem').removeClass('error');
                  // 重置提交按钮状态
                  $('#subscribeSubmit').text('订阅').prop('disabled', false);
                }
              });

              // 表单验证函数
              function validateSubscribeForm() {
                var isValid = true;

                // 验证邮箱
                var email = $('#openFormMaskSubscribe input[name="Email"]').val().trim();
                if (email === '') {
                  $('#formItemEmailSubscribe').addClass('error');
                  $('#formItemEmailSubscribe .error').show();
                  isValid = false;
                } else {
                  // 邮箱格式验证
                  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  if (!emailPattern.test(email)) {
                    $('#formItemEmailSubscribe').addClass('error');
                    $('#formItemEmailSubscribe .error').text('请输入有效的电邮地址').show();
                    isValid = false;
                  } else {
                    $('#formItemEmailSubscribe').removeClass('error');
                    $('#formItemEmailSubscribe .error').hide();
                  }
                }

                // 验证名字
                var firstname = $('#openFormMaskSubscribe input[name="Firstname"]').val().trim();
                if (firstname === '') {
                  $('#formItemFirstnameSubscribe').addClass('error');
                  $('#formItemFirstnameSubscribe .error').show();
                  isValid = false;
                } else {
                  $('#formItemFirstnameSubscribe').removeClass('error');
                  $('#formItemFirstnameSubscribe .error').hide();
                }

                // 验证姓氏
                var lastname = $('#openFormMaskSubscribe input[name="Lastname"]').val().trim();
                if (lastname === '') {
                  $('#formItemLastnameSubscribe').addClass('error');
                  $('#formItemLastnameSubscribe .error').show();
                  isValid = false;
                } else {
                  $('#formItemLastnameSubscribe').removeClass('error');
                  $('#formItemLastnameSubscribe .error').hide();
                }

                return isValid;
              }

              // 表单提交
              $('#subscribeSubmit').click(function() {
                var $submitBtn = $(this);

                // 防止重复提交
                if ($submitBtn.prop('disabled')) {
                  return false;
                }

                if (validateSubscribeForm()) {
                  try {
                    // 显示加载状态
                    $submitBtn.text('提交中...').prop('disabled', true);

                    // 收集表单数据
                    var formData = {
                      Email: $('#openFormMaskSubscribe input[name="Email"]').val().trim(),
                      Firstname: $('#openFormMaskSubscribe input[name="Firstname"]').val().trim(),
                      Lastname: $('#openFormMaskSubscribe input[name="Lastname"]').val().trim(),
                      ExtraComment: $('#openFormMaskSubscribe input[name="ExtraComment"]').val()
                    };

                    // 创建表单并提交
                    var form = $('<form method="post" action="https://links.edm.kzconsulting.cn/Subscription/Add/30927/3" accept-charset="UTF-8"></form>');

                    // 添加表单字段
                    $.each(formData, function(key, value) {
                      form.append('<input type="hidden" name="' + key + '" value="' + value + '">');
                    });

                    // 将表单添加到body并提交
                    $('body').append(form);

                    // 添加表单提交事件监听
                    form.on('submit', function() {
                      // 可以在这里添加更多的提交前逻辑
                      console.log('正在提交订阅表单...');
                    });

                    // 设置一个超时重置按钮状态，以防页面没有跳转
                    setTimeout(function() {
                      $submitBtn.text('订阅').prop('disabled', false);
                    }, 10000); // 10秒后重置

                    form.submit();
                  } catch (error) {
                    console.error('表单提交出错:', error);
                    $submitBtn.text('订阅').prop('disabled', false);
                    alert('订阅失败，请稍后重试');
                  }
                }
              });

              // 输入框获得焦点时清除错误状态
              $('#openFormMaskSubscribe input[type="text"]').focus(function() {
                $(this).closest('.formItem').removeClass('error');
                $(this).closest('.formItem').find('.error').hide();
              });

              // 按Enter键提交表单
              $('#openFormMaskSubscribe input[type="text"]').keypress(function(e) {
                if (e.which === 13) { // Enter键
                  $('#subscribeSubmit').click();
                }
              });
              });
            });
          `}
        </Script>

        {/* 订阅表单模板 */}
        <div className="openFormMask" id="openFormMaskSubscribe" style={{display: 'none'}}>
          <div className="form">
            <h3 style={{marginBottom: '0'}}>订阅&ldquo;科智洞察&rdquo;</h3>
            <p style={{textAlign: 'center', marginBottom: '40px', lineHeight: '2', marginTop: '10px'}}>立即订阅科智咨询数字科技领域洞察周报，了解最新趋势</p>
            <button className="close"></button>

            <div className="formItem require" id="formItemEmailSubscribe">
              <label htmlFor="email">电邮：</label>
              <input type="text" name="Email" placeholder="请输入电邮地址" />
              <span className="error">请输入电邮地址</span>
            </div>

            <div className="formItem require" id="formItemFirstnameSubscribe">
              <label htmlFor="firstname">名字：</label>
              <input type="text" name="Firstname" placeholder="请输入名字" />
              <span className="error">请输入名字</span>
            </div>

            <div className="formItem require" id="formItemLastnameSubscribe">
              <label htmlFor="lastname">姓氏：</label>
              <input type="text" name="Lastname" placeholder="请输入姓氏" />
              <span className="error">请输入姓氏</span>
            </div>

            <div className="formItem">
              <input type="hidden" name="ExtraComment" value="" />
            </div>

            <button className="submit" id="subscribeSubmit">订阅</button>
          </div>
        </div>
      </div>
    </div>
  )
}
