import React from 'react';
import ContentCard from './ContentCard';
import './Main.scss';

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
                            <ContentCard
                                title="선물을 받는 모든 분들을 위해"
                                info="엄선된 다양한 기프트 중, 받으시는 분의 유형과 성향에
                                어울리는 선물을 찾아보세요."
                                more="기프트 가이드 보기"
                            />
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

                <div className="wrapper">
                    <div className="banner">
                        <img
                            className="leftImage"
                            src="../../images/main2.png"
                            alt="main2"
                        />
                    </div>
                    <div className="leftContent">
                        <div className="contentTitle">
                            <ContentCard
                                title="장소의 시학"
                                info="전 세계에 있는 주요 이솝 스토어 네 곳의 건축과 주변의 분위기를 담은 이솝의 디자인 유산에서 영감을 받아 탄생한 새로운 기프트 키트 컬렉션."
                                more="시즈널 기프트 키트 보기"
                            />
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="incenseContent">
                        <div className="contentTitle">
                            <ContentCard
                                title="홈 케어를 위한 기프트—인센스"
                                info="섬세하고 은은하게 퍼지는 향기가 집이나 편안하게 머무는 장소에 평온한 안식을 선사합니다."
                                more="인센스 보기"
                            />
                        </div>
                    </div>
                    <div className="mainBanner">
                        <img
                            className="bannerImage"
                            src="../../images/main3.png"
                            alt="main3"
                        />
                    </div>
                </div>

                <div className="wrapper">
                    <div className="banner">
                        <img
                            className="leftImage"
                            src="../../images/main4.png"
                            alt="main2"
                        />
                    </div>
                    <div className="leftContent">
                        <div className="contentTitle">
                            <ContentCard
                                title="향수"
                                info="휠, 테싯, 마라케시 인텐스, 로즈—우디에서 플로럴에 이르기까지 밤과 낮에 모두 어울리는 현대적인 작품들"
                                more="향수 보기"
                            />
                        </div>
                    </div>
                </div>
                {/*임시 컴포넌트*/}
                <h1
                    style={{
                        textAlign: 'center',
                        padding: '5px',
                        marginTop: '5px',
                    }}
                >
                    캐러셀 컴포넌트 추가 예정
                </h1>

                <div className="wrapper">
                    <div className="incenseContent">
                        <div className="contentTitle">
                            <ContentCard
                                title="다양한 지원 모드"
                                info="타인을 위한 선물이든 자신에게 건네는 선물이든 이솝에서는 1:1 채팅 상담, 이메일, 전화 상담 등 다양한 채널을 통해 컨설팅과 지원을 받을 수 있습니다."
                                more="이솝 서비스 살펴보기"
                            />
                        </div>
                    </div>
                    <div className="mainBanner">
                        <img
                            className="bannerImage"
                            src="../../images/main5.jpg"
                            alt="main5"
                        />
                    </div>
                </div>
                {/*임시 컴포넌트*/}
                <h1
                    style={{
                        textAlign: 'center',
                        padding: '5px',
                        marginTop: '5px',
                    }}
                >
                    캐러셀 컴포넌트 추가 예정
                </h1>
                {/*임시 컴포넌트*/}
                <h1
                    style={{
                        textAlign: 'center',
                        padding: '5px',
                        marginTop: '5px',
                    }}
                >
                    사진 캐러셀 컴포넌트 추가 예정
                </h1>
            </section>
        </div>
    );
};

export default Main;
