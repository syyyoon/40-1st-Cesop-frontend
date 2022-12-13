import React, { useState, useEffect } from 'react';
import MainDescription from '../../components/MainDescription';
import SubDescription from '../../components/SubDescription';
import './DetailProducts.scss';

const DetailProducts = () => {
    const [itemData, setItemData] = useState({});

    useEffect(() => {
        fetch('/data/detailProducts.json')
            .then(response => response.json())
            .then(result => {
                setItemData(result);
            });
    }, []);

    return (
        <div className="detailProducts">
            <div className="productDetailHeader">
                <img
                    className="cesopLogo"
                    src="./images/cesop-logo.png"
                    alt="cesop_logo"
                />
                <div className="imageWrapper">
                    <img
                        className="productImage"
                        src={itemData.productImage}
                        alt={itemData.productName}
                    />
                    <span className="ecoFreindlyMessage"></span>
                </div>

                <div className="productContent">
                    <nav className="productCategory">
                        {itemData.mainCategories} • {itemData.subCategories}
                    </nav>
                    <div className="productInfo">
                        <h1 className="productName">{itemData.productName}</h1>
                        <p className="productDescription">
                            {itemData.productDescription}
                        </p>
                    </div>
                    <div className="productDetailBody">
                        <MainDescription itemData={itemData} />
                    </div>
                    <button className="buttonAddToCart">
                        카트에 추가하기 - ₩{itemData.price}원
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
                        src={itemData.textureImage}
                        alt={itemData.howToUse}
                    />
                </div>

                <div className="howToUseContent">
                    <p className="usageTitle">사용법</p>
                    <h2 className="usage">{itemData.howToUse}</h2>
                    <SubDescription itemData={itemData} />
                </div>
            </section>
        </div>
    );
};

export default DetailProducts;
