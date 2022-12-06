import React from 'react';
import { FOOTER_DATA_TOP, FOOTER_DATE_BOTTOM } from './FooterData';
import FooterSection from './FooterSection';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footerBlock">
                    <section className="footerCommunication">
                        <h3>이솝 커뮤니케이션</h3>
                        <div className="footerBlockLine" />
                        <div className="footerMessage">
                            제품, 서비스, 스토어, 이벤트, 문화적 관심사 등
                            다양한 소식을 받아보실 수 있도록 이솝 이메일을
                            구독하세요.
                        </div>
                    </section>
                    {FOOTER_DATA_TOP.map(data => (
                        <FooterSection
                            key={data.id}
                            title={data.title}
                            content={data.content}
                        />
                    ))}
                    <section className="footerCommunication">
                        <h3>지속가능성</h3>
                        <div className="footerBlockLine" />
                        <div className="footerMessage">
                            이솝은 비콥 인증을 획득한 브랜드이며, PETA로부터
                            비건 인증을 받은 브랜드입니다.
                        </div>
                    </section>
                    {FOOTER_DATE_BOTTOM.map(data => (
                        <FooterSection
                            key={data.id}
                            title={data.title}
                            content={data.content}
                        />
                    ))}
                    <section className="footerSection">
                        <h3>주의</h3>
                        <div className="footerBlockLine" />
                        <div className="footerMessage">
                            상호 : 씨솝코리아 | 주소 : 서울시 강남구 테헤란로
                            427 위워크 타워(위워크 선릉 2호점) | 대표자 : Cesop
                        </div>
                    </section>
                </div>
                <div className="footerBanner">
                    <span>© Cesop</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
