import React from 'react';
import './DetailProducts.scss';

const DetailProducts = () => {
    return (
        <div className="detailProduct">
            <div className="productDetailHeader">
                <img
                    className="cesopLogo"
                    src="./images/cesop-logo.png"
                    alt="cesop_logo"
                />
                <div className="imageWrapper">
                    <img
                        className="productImage"
                        src="./images/product_image2.jpg"
                        alt="product_image"
                    />
                    <span className="messageOfEcoFrendly">
                        펌프를 장착하지 않은 리필용 제품으로 구매하시면 플라스틱
                        사용을 12g 줄여 환경 영향을 최소화합니다.
                    </span>
                </div>
                <div className="productContent">
                    <nav className="productCategory">바디 & 핸드 • 핸드</nav>
                    <div className="productInfo">
                        <h1 className="productName">
                            레버런스 아로마틱 핸드 밤
                        </h1>
                        <p className="productDescription">
                            포타슘 락테이트를 포함한 에몰리언트 성분이 피부의
                            부드러움과 촉촉함을 유지시켜 주는 핸드 밤
                        </p>
                    </div>
                    <div className="productDetailBody">
                        <div className="productDetailList">
                            <div className="productTerm">
                                <strong>사용감</strong>
                            </div>
                            <div className="productDescription">
                                <p>부드러운, 유분기 없는</p>
                            </div>
                        </div>
                        <div className="productDetailList">
                            <div className="productTerm">
                                <strong>향</strong>
                            </div>
                            <div className="productDescription">
                                <p>우드, 흙내음, 스모키</p>
                            </div>
                        </div>
                        <div className="productDetailList">
                            <div className="productTerm">
                                <strong>주요 성분</strong>
                            </div>
                            <div className="productDescription">
                                <p>
                                    베르가모트오일, 베티버뿌리오일,
                                    비터오렌지잎/잔가지오일
                                </p>
                            </div>
                        </div>
                        <div className="productDetailList">
                            <div className="productTerm">
                                <strong>사이즈</strong>
                            </div>
                            <div className="productDescription">
                                <p>75 mL</p>
                            </div>
                        </div>
                    </div>
                    <button className="buttonAddToCart">
                        카트에 추가하기 - ₩31,000원
                    </button>
                </div>
            </div>
            <section className="messageToCustomer">
                <aside className="message">
                    <div className="freeService">
                        <strong>무료 선물 포장 서비스</strong>
                        <p className="serviceDescription">
                            주문하신 모든 제품에 대해 선물 포장 서비스를 제공해
                            드립니다.
                        </p>
                    </div>
                    <div className="giftSample">
                        <strong>샘플 & 코튼 백 증정</strong>
                        <p className="giftDescription">
                            모든 주문 건에 무료 샘플과 코튼백을 제공해 드립니다.
                            <br />
                            (샘플 종류는 임의 지정이 불가합니다.)
                        </p>
                    </div>
                </aside>
            </section>

            <section class="howToUse">
                <div class="imageWrapper">
                    <img
                        className="textureImage"
                        src="./images/product_image1.jpg"
                        alt="creamType"
                    />
                </div>

                <div className="howToUseContent">
                    <p className="usageTitle">사용법</p>
                    <h2 className="usage">
                        필요할 때마다 깨끗한 손에 바릅니다.
                    </h2>
                    <div className="productDetailList">
                        <div className="productTerm">
                            <strong>사용량</strong>
                        </div>
                        <div className="productDescription">
                            <p className="text">반 티스푼</p>
                        </div>
                    </div>
                    <div className="productDetailList">
                        <div className="productTerm">
                            <strong>텍스처</strong>
                        </div>
                        <div className="productDescription">
                            <p className="text">크림 제형</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailProducts;
