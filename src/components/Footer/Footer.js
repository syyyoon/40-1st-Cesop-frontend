import React from 'react';
import { FOOTER_DATA } from './footerData';
import FooterSection from './FooterSection';
import './Footer.scss';
import '../../styles/mixin.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footerBlock">
                    {FOOTER_DATA.map(data => (
                        <FooterSection
                            key={data.id}
                            title={data.title}
                            content={data.content}
                        />
                    ))}
                </div>
                <div className="footerBanner">
                    <span>© Cesop</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
