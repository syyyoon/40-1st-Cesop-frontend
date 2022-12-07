import React from 'react';
import './ContentCard.scss';

const ContentCard = ({ title, info, more }) => {
    return (
        <section className="contentCard">
            <h1>{title}</h1>
            <div className="content">
                <div className="contentTop">
                    <p>{info}</p>
                </div>
                <div className="contentBottom">
                    <a>{more}</a>
                </div>
            </div>
        </section>
    );
};

export default ContentCard;
