import React from 'react';
import './DetailProducts.scss';

const DetailProducts = () => {
    return (
        <div className="detailProduct">
            <div className="productDetailHeader">
                <div className="productImage">
                    <img src="./images/product_image2.jpg" alt="제품사진" />
                </div>
                <div className="productContent">
                    <nav>바디 & 핸드 • 핸드</nav>
                    <div className="productInfo">
                        <h1 className="productName">
                            레버런스 아로마틱 핸드 밤
                        </h1>
                        <p>
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
            <section className="packageMessageWrapper">
                <aside className="packageMessage">
                    <div className="packageMessageLeft">
                        <strong>무료 선물 포장 서비스</strong>
                        <p>
                            주문하신 모든 제품에 대해 선물 포장 서비스를 제공해
                            드립니다.
                        </p>
                    </div>
                    <div className="packageMessageRight">
                        <strong>샘플 & 코튼 백 증정</strong>
                        <p>
                            모든 주문 건에 무료 샘플과 코튼백을 제공해 드립니다.
                            <br />
                            (샘플 종류는 임의 지정이 불가합니다.)
                        </p>
                    </div>
                </aside>
            </section>

            <section class="howToUse">
                <div class="howToUseImage">
                    <img src="./images/product_image1.jpg" alt="liquid" />
                </div>

                <div className="howToUseContent">
                    <p>사용법</p>
                    <h2>필요할 때마다 깨끗한 손에 바릅니다.</h2>
                    <div className="productDetailList">
                        <div className="productTerm">
                            <strong>사용량</strong>
                        </div>
                        <div className="productDescription">
                            <p>반 티스푼</p>
                        </div>
                    </div>
                    <div className="productDetailList">
                        <div className="productTerm">
                            <strong>텍스처</strong>
                        </div>
                        <div className="productDescription">
                            <p>크림 제형</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailProducts;
