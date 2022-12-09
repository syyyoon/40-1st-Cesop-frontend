import React from 'react';
import './ContentCard.scss';
import '../../styles/mixin.scss';

const ContentCard = props => {
    const { img, title, contents } = props;
    return (
        <div className="contentCard">
            <div className="banner">
                <img className="leftImage" src={img} alt="cardImg" />
            </div>
            <div className="contentWrapper">
                <div className="contentTitle">
                    <section className="contentBox">
                        <h1 className="title">{title}</h1>
                        <div className="content">
                            <div className="contentText">
                                <p>{contents.text}</p>
                            </div>
                            <div className="contentButton">
                                <div className="contentMore">
                                    {contents.more}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;
