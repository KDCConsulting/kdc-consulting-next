'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  // 判断当前路径是否匹配导航项
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    // 特殊处理：报告页面应该高亮Insights
    if (pathname.startsWith('/report/') && href === '/insights') {
      return true
    }
    return pathname.startsWith(href)
  }

  // 判断子菜单是否应该显示
  const isSubMenuActive = (parentHref: string) => {
    return pathname.startsWith(parentHref)
  }
  return (
    <header className="experiencefragment full-width">
      <div id="header" className="cmp-experiencefragment cmp-experiencefragment--global-header">
        <div id="container-73c44530cc" className="cmp-container">
          <div className="globalheader has-tooltip">
            <div className="cmp-global-header" id="globalheader-ac27550f15">
              <nav aria-label="global">
                <div className="cmp-global-header__navbar-container ">
                  <div className="cmp-global-header__primary-nav mainNav">
                    <div className="cmp-global-header__menu">
                    </div>

                    <div className="cmp-global-header__logo">
                      <Link href="/">
                        <img src="https://www.kzconsulting.cn/static/images/logo.png" alt="科智观察" />
                      </Link>
                    </div>
                    <div className="cmp-global-header__content" role="toolbar">
                      <ul className="cmp-global-header__nav-menu">
                        <li className={`cmp-global-header__nav-menu-item ${isActive('/insights') ? 'active' : ''}`}>
                          <Link href="/insights" className="cmp-global-header__nav-menu-label-button openLink">
                            Insights
                          </Link>
                        </li>

                        <li className={`cmp-global-header__nav-menu-item ${isActive('/services') ? 'active' : ''}`}>
                          <button className="cmp-global-header__nav-menu-label-button " type="button">Capabilities</button>
                          <div className={`cmp-global-header__nav-menu-item-content miniNavList ${isSubMenuActive('/services') ? 'cmp-global-header__nav-menu-item-content--active' : ''}`}>
                            <ul className="">
                              <li role="none">
                                <Link href="/services/StrategicAdvisory">Strategic Advisory</Link>
                              </li>
                              <li role="none">
                                <Link href="/services/MarketIntelligence">Market Intelligence</Link>
                              </li>
                              <li role="none">
                                <Link href="/services/IndustryAnalysis">Industry Analysis</Link>
                              </li>
                              <li role="none">
                                <Link href="/services/InvestmentConsulting">Investment Consulting</Link>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li className={`cmp-global-header__nav-menu-item hangye ${isActive('/industries') ? 'active' : ''}`}>
                          <button className="cmp-global-header__nav-menu-label-button navBtn" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Industries">Industries</button>

                          <div className={`cmp-global-header__nav-menu-item-content ${isSubMenuActive('/industries') ? 'cmp-global-header__nav-menu-item-content--active' : ''}`} style={{ maxHeight: "661px" }}>
                            <div className="xfpage page basicpage">
                              <div id="container-41d78751fd" className="cmp-container">
                                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                  <div className="navcontainer container responsivegrid aem-GridColumn aem-GridColumn--default--12" style={{maxWidth: 'fit-content'}} >
                                    <div className="cmp-global-header__drawer">
                                      <div className="cmp-global-header__drawer-content">
                                        <div className="cmp-global-header__drawer-one-column">
                                          <div className="cmp-global-header__group-link-list">
                                            <div className="responsivegrid">
                                              <div className="flex">
                                                <div style={{width: '15%'}}>
                                                  <p className="cmp-global-header__title-link-list__menu-label lingyu" style={{fontSize: '24px', marginTop: '-7px'}}>
                                                    Digital</p>
                                                </div>
                                                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 " style={{width: '90%'}}>
                                                  <div className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12">
                                                    <div className="cmp-global-header__title-link-list">
                                                      <div className="cmp-global-header__title-link-list__menu">
                                                        <p className="cmp-global-header__title-link-list__menu-label">
                                                          Digital Infrastructure</p>
                                                        <div className="cmp-global-header__title-link-list__content">
                                                          <ul className="cmp-global-header__inner-link-list" role="menu" aria-label="Industries">
                                                            <li role="none">
                                                              <Link href="/industries/data-center" aria-label="Data Center">Data Center</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries/5g" aria-label="5G">5G</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Semiconductor">Semiconductor</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Compute-Network Integration">Compute-Network Integration</Link>
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12">
                                                    <div className="cmp-global-header__title-link-list">
                                                      <div className="cmp-global-header__title-link-list__menu">
                                                        <p className="cmp-global-header__title-link-list__menu-label">
                                                          Digital Technology</p>
                                                        <div className="cmp-global-header__title-link-list__content">
                                                          <ul className="cmp-global-header__inner-link-list" role="menu" aria-label="Industries">
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Cloud Computing">Cloud Computing</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="AI">AI</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Blockchain">Blockchain</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Big Data">Big Data</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="IIoT">IIoT</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="IoT">IoT</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="AR/VR">AR/VR</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Edge Computing">Edge Computing</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Privacy Computing">Privacy Computing</Link>
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12">
                                                    <div className="cmp-global-header__title-link-list">
                                                      <div className="cmp-global-header__title-link-list__menu">
                                                        <p className="cmp-global-header__title-link-list__menu-label">
                                                          Digital Application</p>
                                                        <div className="cmp-global-header__title-link-list__content">
                                                          <ul className="cmp-global-header__inner-link-list" role="menu" aria-label="Industries">
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Fintech">Fintech</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Smart Healthcare">Smart Healthcare</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Smart Transportation">Smart Transportation</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Digital Media">Digital Media</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Self-Driving">Self-Driving</Link>
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flex" style={{}}>
                                                <div style={{width: '15%'}}>
                                                  <p className="cmp-global-header__title-link-list__menu-label lingyu" style={{fontSize: '24px', marginTop: '25px'}}>
                                                    Other</p>
                                                </div>
                                                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 " style={{width: '90%'}}>
                                                  <div className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12">
                                                    <div className="cmp-global-header__title-link-list">
                                                      <div className="cmp-global-header__title-link-list__menu">
                                                        <p className="cmp-global-header__title-link-list__menu-label">
                                                        </p>
                                                        <div className="cmp-global-header__title-link-list__content">
                                                          <ul className="cmp-global-header__inner-link-list" role="menu" aria-label="Industries">
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Energy Storage">Energy Storage</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Photovoltaics">Photovoltaics</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="Industrial Robots">Industrial Robots</Link>
                                                            </li>
                                                            <li role="none">
                                                              <Link href="/industries" aria-label="UAV">UAV</Link>
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* End One Container */}
                                      </div>
                                    </div>
                                    {/* end:  */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className={`cmp-global-header__nav-menu-item ${isActive('/news') ? 'active' : ''}`}>
                          <Link href="/news" className="cmp-global-header__nav-menu-label-button openLink">
                            News
                          </Link>
                        </li>

                        <li className={`cmp-global-header__nav-menu-item ${isActive('/about') ? 'active' : ''}`}>
                          <Link href="/about" className="cmp-global-header__nav-menu-label-button openLink">
                            About KDC
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="cmp-global-header__menu-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}