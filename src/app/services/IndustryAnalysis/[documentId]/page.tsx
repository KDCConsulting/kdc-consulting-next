import type { Metadata } from "next";
import { getServiceByDocumentId, getServicesData } from "@/lib/services-api";
import { ServiceType } from "@/types/services";
import "@/styles/kzgc.css";
import "@/styles/fuwu.css";
import "@/styles/area.css";

interface IndustryAnalysisDetailPageProps {
    params: {
        documentId: string;
    };
}

export async function generateMetadata({
    params,
}: IndustryAnalysisDetailPageProps): Promise<Metadata> {
    const service = await getServiceByDocumentId(
        ServiceType.INDUSTRY,
        params.documentId
    );

    if (!service) {
        return {
            title: "行业研究服务详情_科智咨询",
            description: "科智咨询的行业研究服务详情页面。",
        };
    }

    return {
        title: `${service.channelName}_科智咨询`,
        description:
            service.ServiceContentBriefIntroduction ||
            service.channelDescription ||
            "科智咨询的行业研究服务详情页面。",
        keywords: `${service.channelName},行业研究,科智咨询`,
        openGraph: {
            title: `${service.channelName}_科智咨询`,
            description:
                service.ServiceContentBriefIntroduction ||
                service.channelDescription ||
                "科智咨询的行业研究服务详情页面。",
            type: "website",
        },
    };
}

export default async function IndustryAnalysisDetailPage({
    params,
}: IndustryAnalysisDetailPageProps) {
    // 获取特定服务数据
    const service = await getServiceByDocumentId(
        ServiceType.INDUSTRY,
        params.documentId
    );

    // 获取所有行业研究服务用于推荐阅读
    const allIndustryServices = await getServicesData(ServiceType.INDUSTRY);

    // 调试信息
    console.log("Industry Analysis Detail Service Data:", service);
    console.log("Document ID:", params.documentId);

    if (!service) {
        return (
            <div>
                <div className="container responsivegrid">
                    <div className="cmp-container">
                        <h1>服务未找到</h1>
                        <p>抱歉，您访问的行业研究服务页面不存在。</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Banner区域 - 全宽 */}
            <div
                className="banner"
                style={{
                    backgroundImage: service.channelBanner?.url 
                        ? `url(${service.channelBanner.url})` 
                        : "url(https://www.kzconsulting.cn/resource/image/20240221/944911735553261568.jpg)",
                }}
            >
                <div className="root responsivegrid">
                    <h2 style={{ color: "#fff" }}>{service.channelName}</h2>
                </div>
            </div>

            <div className="root container responsivegrid">
                <div className="cmp-container">
                    <main className="container responsivegrid">
                        <div id="main" className="cmp-container">
                            {/* 服务介绍 - 版心限制 */}
                            <div className="container responsivegrid full-width-constraint ">
                                <div
                                    id="container-855c1cc1e1"
                                    className="cmp-container mainIntr"
                                >
                                    <div className="title cmp-title--section ui-vs-bottom--md">
                                        <div className="cmp-title">
                                            <h2 className="cmp-title__text" style={{ padding: 0 }}>
                                                {service.ServiceIntroductionTitle || service.channelName}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-left">
                                            {service.ServiceIntroductionContent && service.ServiceIntroductionContent.length > 0 ? (
                                                <div>
                                                    {service.ServiceIntroductionContent.map((content, index) => (
                                                        <p key={index}>
                                                            {content.children?.map((child, childIndex) => (
                                                                <span key={childIndex}>{child.text}</span>
                                                            ))}
                                                        </p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p>
                                                    {service.ServiceContentBriefIntroduction || service.channelDescription || '暂无详细描述'}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex-right">
                                            <img
                                                src={service.ServiceIntroductionImage?.url || "https://www.kzconsulting.cn/resource/image/20240221/944967700554186752.jpg"}
                                                alt={service.ServiceIntroductionImage?.alternativeText || service.channelName}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                    {/* 服务专长 - 全宽 */}
                    <div className="container responsivegrid full-width-constraint">
                        <div
                            className="cmp-container"
                            style={{ backgroundColor: "rgb(242,242,242)" }}
                        >
                            <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
                                <div className="cmp-card-listing cmp-card-listing--cta-2-to-1 ">
                                    <div className="cmp-card-listing_first-row ablibity">
                                        <div className="cmp-card-listing_first-row_left-col">
                                            <div className="container responsivegrid">
                                                <div className="cmp-container fuwuyaodian">
                                                    <div className="title cmp-title--section ui-vs-bottom--md">
                                                        <div className="cmp-title">
                                                            <h2 className="cmp-title__text">服务内容</h2>
                                                        </div>
                                                    </div>
                                                    <div className="text ui-vs-bottom--md">
                                                        <p className="fuwu-intr">
                                                            {service.ServiceContentBriefIntroduction || '依托深度的环境分析、行业洞察与企业理解，我们帮助企业在剧烈变动的社会经济环境中制定最优发展战略，并围绕战略实现为企业进行业务与职能规划。'}
                                                        </p>
                                                        <div className="fuwu-flex">
                                                            {service.ServiceContentComponents && service.ServiceContentComponents.length > 0 ? (
                                                                service.ServiceContentComponents.map((component, index) => (
                                                                    <div key={index} className="fuwu-flex-item">
                                                                        <h6>{component.Title}</h6>
                                                                        <p>{component.Description}</p>
                                                                        <div className="after"></div>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                // 默认内容
                                                                <>
                                                                    <div className="fuwu-flex-item">
                                                                        <h6>行业趋势分析</h6>
                                                                        <p>深度分析行业发展趋势，把握市场机遇和挑战。</p>
                                                                        <div className="after"></div>
                                                                    </div>
                                                                    <div className="fuwu-flex-item">
                                                                        <h6>竞争格局研究</h6>
                                                                        <p>全面研究行业竞争格局，识别关键成功因素。</p>
                                                                        <div className="after"></div>
                                                                    </div>
                                                                    <div className="fuwu-flex-item">
                                                                        <h6>政策环境分析</h6>
                                                                        <p>分析相关政策法规，评估对行业发展的影响。</p>
                                                                        <div className="after"></div>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 科智视角 - 全宽 */}
                    <div className="container responsivegrid full-width-constraint ability">
                        <div id="container-414010eaf9" className="cmp-container">
                            <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
                                <div
                                    className="cmp-card-listing 
   cmp-card-listing--cta-2-to-1 "
                                    id="block-capabilities "
                                >
                                    <div className="cmp-card-listing_first-row">
                                        <div className="cmp-card-listing_first-row_left-col">
                                            <div className="container responsivegrid">
                                                <div
                                                    id="container-a1f99f1cc2"
                                                    className="cmp-container fuwujiazhi"
                                                >
                                                    <div className="title cmp-title--section ui-vs-bottom--md">
                                                        <div
                                                            className="cmp-title"
                                                            style={{ marginBottom: 0 }}
                                                        >
                                                            <h2 className="cmp-title__text">
                                                                科智咨询的独到支持
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="fuwu-flex">
                                                            {service.ServiceValuePropositionComponents && service.ServiceValuePropositionComponents.length > 0 ? (
                                                                service.ServiceValuePropositionComponents.map((component, index) => (
                                                                    <div key={index} className="fuwu-flex-item">
                                                                        <h6>{component.Title}</h6>
                                                                        <p>{component.Description}</p>
                                                                        <img
                                                                            src={`https://www.kzconsulting.cn/resource/image/20240802/1004060921712082944.png`}
                                                                            alt={component.Title}
                                                                        />
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                // 默认内容
                                                                <>
                                                                    <div className="fuwu-flex-item">
                                                                        <h6>专业研究团队</h6>
                                                                        <p>拥有丰富行业研究经验的专业团队，确保研究质量。</p>
                                                                        <img
                                                                            src="https://www.kzconsulting.cn/resource/image/20240802/1004060921712082944.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="fuwu-flex-item">
                                                                        <h6>深度数据挖掘</h6>
                                                                        <p>运用先进的数据分析技术，深度挖掘行业信息。</p>
                                                                        <img
                                                                            src="https://www.kzconsulting.cn/resource/image/20240802/1004060976925900800.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="fuwu-flex-item">
                                                                        <h6>前瞻性洞察</h6>
                                                                        <p>基于深度分析，提供前瞻性的行业洞察和建议。</p>
                                                                        <img
                                                                            src="https://www.kzconsulting.cn/resource/image/20240802/1004061003685560320.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 推荐阅读 - 全宽 */}
                    <div className="container responsivegrid full-width-constraint ability">
                        <div id="container-414010eaf9" className="cmp-container">
                            <div className="cardlistingblock cmp-card-layout--3-cards ui-vs-top--lg ui-vs-bottom--bs">
                                <div
                                    className="cmp-card-listing 
cmp-card-listing--cta-2-to-1 "
                                    id="block-capabilities "
                                >
                                    <div className="cmp-card-listing_first-row">
                                        <div className="cmp-card-listing_first-row_left-col">
                                            <div className="container responsivegrid">
                                                <div
                                                    id="container-a1f99f1cc2"
                                                    className="cmp-container"
                                                >
                                                    <div className="title cmp-title--section ui-vs-bottom--md">
                                                        <div
                                                            className="cmp-title"
                                                            style={{ marginBottom: "40px" }}
                                                        >
                                                            <h2 className="cmp-title__text">推荐阅读</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cmp-card-listing_first-row_right-col">
                                            <div className="container responsivegrid">
                                                <div
                                                    id="container-f8bd894c75"
                                                    className="cmp-container"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cmp-card-listing_second-row">
                                        <div className="container responsivegrid">
                                            <div className="cmp-container">
                                                {allIndustryServices
                                                    .filter(s => s.documentId !== service.documentId)
                                                    .slice(0, 4)
                                                    .map((relatedService, index) => (
                                                        <div key={index} className="teaser dcc dcc-title-summary-arrow card has-ellipsis color-block-blue-dark">
                                                            <div className="cmp-teaser">
                                                                <div className="cmp-teaser__content">
                                                                    <h3 className="cmp-teaser__title">
                                                                        <a
                                                                            className="cmp-teaser__title-link"
                                                                            href={`/services/IndustryAnalysis/${relatedService.documentId}`}
                                                                            target="_self"
                                                                        >
                                                                            <span>{relatedService.channelName}</span>
                                                                            <span className="cmp-teaser__arrow-tag">
                                                                                <span className="cmp-teaser__arrow-tag--icon"></span>
                                                                            </span>
                                                                        </a>
                                                                    </h3>
                                                                    <div className="cmp-teaser__description">
                                                                        {relatedService.channelDescription || relatedService.ServiceContentBriefIntroduction || '暂无描述'}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>

                                        <div className="button cmp-card-listing_button cmp-button--text-link cmp-button__cta-arrow--right"></div>
                                    </div>

                                    <div className="cmp-card-listing_third-row ">
                                        <div className="container responsivegrid">
                                            <div
                                                id="container-884e13b789"
                                                className="cmp-container"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
