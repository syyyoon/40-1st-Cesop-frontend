import React from 'react';
import './ContentCard.scss';

const ContentCard = props => {
    const { img, title, contents } = props;
    return (
        <div className="wrapper">
            <div className="banner">
                <img className="leftImage" src={img} alt="cardImg" />
            </div>
            <div className="leftContent">
                <div className="contentTitle">
                    <section className="contentCard">
                        <h1 className="title">{title}</h1>
                        <div className="content">
                            <div className="contentTop">
                                <p>{contents.text}</p>
                            </div>
                            <div className="contentBottom">
                                <a className="contentMore">{contents.more}</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;
