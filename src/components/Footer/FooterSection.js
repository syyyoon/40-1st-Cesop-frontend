import React from 'react';
import './Footer.scss';

const FooterSection = props => {
    const { title, content } = props;
    return (
        <section className="footerSection">
            <h3 className="footerTitle">{title}</h3>
            <div className="footerBlockLine" />
            <ul className="footerUl">
                {content.map(list => {
                    return <li key={list.id}>{list.text}</li>;
                })}
            </ul>
        </section>
    );
};

export default FooterSection;
