import React from 'react';
import './ContentCard.scss';
import '../../styles/mixin.scss';

const ContentCard = props => {
    const { img, title, contents } = props;
    return (
        <div className="wrapper">
            <div className="banner">
                <img className="leftImage" src={img} alt="cardImg" />
            </div>
            <div className="contentWrapper">
                <div className="contentTitle">
                    <section className="contentCard">
                        <h1 className="title">{title}</h1>
                        <div className="content">
                            <div className="contentText">
                                <p>{contents.text}</p>
                            </div>
                            <div className="contentButton">
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
