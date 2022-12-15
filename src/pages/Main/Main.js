import React, { useState } from 'react';
import ContentCard from './ContentCard';
import MainCarousel from './Carousel/MainCarousel';
import { CARD_DATA, CARD_DATA_SERVICE } from './cardData';
import './Main.scss';
import '../../styles/mixin.scss';
import SignUp from '../SignUp/SignUp';

const Main = () => {
    return (
        <div className="main">
            <section className="mainSection">
                <div className="mainWrapper">
                    <div className="mainContent">
                        <img
                            className="logoImage"
                            src="../../images/logo.png"
                            alt="logo"
                        />
                        <div className="contentTitle">
                            <section className="contentBox">
                                <h1 className="title">
                                    선물을 받는 모든 분들을 위해
                                </h1>
                                <div className="content">
                                    <div className="contentText">
                                        <p>
                                            엄선된 다양한 기프트 중, 받으시는
                                            분의 유형과 성향에 어울리는 선물을
                                            찾아보세요.
                                        </p>
                                    </div>
                                    <div className="contentButton">
                                        <div className="contentMore">
                                            기프트 가이드 보기
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="mainBanner">
                        <img
                            className="bannerImage"
                            src="../../images/main1.png"
                            alt="main1"
                        />
                    </div>
                </div>
                {CARD_DATA.map(cards => {
                    return (
                        <ContentCard
                            key={cards.id}
                            img={cards.img}
                            title={cards.title}
                            contents={cards.contents}
                        />
                    );
                })}
                {/* TODO : 캐러셀 컴포넌트 추가 예정 */}
                {CARD_DATA_SERVICE.map(cards => {
                    return (
                        <ContentCard
                            key={cards.id}
                            img={cards.img}
                            title={cards.title}
                            contents={cards.contents}
                        />
                    );
                })}

                <div className="storeWrapper">
                    <div className="storeContent">
                        <div className="storeTitle">
                            <section className="storeCard">
                                <h1 className="title">스토어 로케이터</h1>
                                <div className="content">
                                    <div className="contentText">
                                        <p>
                                            매장에서는 씨솝 컨설턴트가 고객
                                            여러분을 따뜻하게 맞이하고 기프트
                                            구매를 위한 맞춤형 컨설팅을
                                            제공해드립니다.
                                        </p>
                                    </div>
                                    <div className="contentButton">
                                        <div className="contentMore">
                                            가까운 스토어 찾기
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="storeBanner">
                        <MainCarousel />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;
