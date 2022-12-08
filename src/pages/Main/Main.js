import React from 'react';
import ContentCard from './ContentCard';
import './Main.scss';
import { CARD_DATA_BOTTOM, CARD_DATA_TOP } from './CardData';

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
                            <section className="contentCard">
                                <h1 className="title">
                                    선물을 받는 모든 분들을 위해
                                </h1>
                                <div className="content">
                                    <div className="contentTop">
                                        <p>
                                            엄선된 다양한 기프트 중, 받으시는
                                            분의 유형과 성향에 어울리는 선물을
                                            찾아보세요.
                                        </p>
                                    </div>
                                    <div className="contentBottom">
                                        <div className="bottomButton">
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
                {CARD_DATA_TOP.map(cards => {
                    return (
                        <ContentCard
                            key={cards.id}
                            img={cards.img}
                            title={cards.title}
                            contents={cards.contents}
                        />
                    );
                })}

                <h1
                    style={{
                        textAlign: 'center',
                        padding: '5px',
                        marginTop: '5px',
                    }}
                >
                    캐러셀 컴포넌트 추가 예정
                </h1>
                {CARD_DATA_BOTTOM.map(cards => {
                    return (
                        <ContentCard
                            key={cards.id}
                            img={cards.img}
                            title={cards.title}
                            contents={cards.contents}
                        />
                    );
                })}

                <h1
                    style={{
                        textAlign: 'center',
                        padding: '5px',
                        marginTop: '5px',
                    }}
                >
                    캐러셀 컴포넌트 추가 예정
                </h1>
                <div
                    className="mainWrapper"
                    style={{ backgroundColor: '#fffef2' }}
                >
                    <div className="storeContent">
                        <div className="storeTitle">
                            <section className="contentCard">
                                <h1 className="title">스토어 로케이터</h1>
                                <div className="content">
                                    <div className="contentTop">
                                        <p>
                                            매장에서는 이솝 컨설턴트가 고객
                                            여러분을 따뜻하게 맞이하고 기프트
                                            구매를 위한 맞춤형 컨설팅을
                                            제공해드립니다.
                                        </p>
                                    </div>
                                    <div className="contentBottom">
                                        <div className="bottomButton">
                                            가까운 스토어 찾기
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
            </section>
        </div>
    );
};

export default Main;
