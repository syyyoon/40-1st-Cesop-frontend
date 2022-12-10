import React, { useState } from 'react';
import Description from '../../components/Description';
import './DetailProducts.scss';

const DetailProducts = () => {
    const [itemData, setItemData] = useState({
        id: 1,
        main_categories: '바디&핸드',
        sub_categories: '바디',
        product_name: '제라늄 리프 바디 클렌저',
        product_image: './images/tube_75mL.png',
        product_price: '31,000원',
        product_description:
            '기존 비누에 대한 좋은 대안으로, 부드럽게 잔여물을 제거하고 생기를 북돋아 주는 클렌징 젤',
        image_description:
            '펌프를 장착하지 않은 리필용 제품으로 구매하시면 플라스틱 사용을 12g 줄여 환경 영향을 최소화합니다.',
        product_main_content: [
            { title: '사용감', content: '상쾌함, 깨끗함' },
            { title: '향', content: '그린,시트러스,상쾌함' },
            { title: '주요 성분', content: '제라늄 리프,만다린,베르가못' },
            { title: '사이즈', content: '500mL' },
        ],
        product_sub_content: [
            { title: '사용량', content: '필요한 만큼' },
            { title: '텍스처', content: '투명하고 거품이 적은 젤' },
        ],
        skin_type: '',
        usage: '손 또는 샤워 볼에 충분히 덜어 목에서 발끝까지 젖은 피부에 마사지 한 후 완전히 헹굽니다.',
        texture_image: './images/texture_image1.jpg',
    });

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
                        src={itemData.product_image}
                        alt={itemData.product_name}
                    />
                    <span className="messageOfEcoFreindly">
                        {itemData.image_description}
                    </span>
                </div>

                <div className="productContent">
                    <nav className="productCategory">
                        {itemData.main_categories} • {itemData.sub_categories}
                    </nav>
                    <div className="productInfo">
                        <h1 className="productName">{itemData.product_name}</h1>
                        <p className="productDescription">
                            {itemData.product_description}
                        </p>
                    </div>
                    <div className="productDetailBody">
                        {itemData.product_main_content.map((detail, index) => {
                            return (
                                <Description
                                    index={index}
                                    detail={detail}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                    <button className="buttonAddToCart">
                        카트에 추가하기 - {itemData.product_price}
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
                        src={itemData.texture_image}
                        alt={itemData.usage}
                    />
                </div>

                <div className="howToUseContent">
                    <p className="usageTitle">사용법</p>
                    <h2 className="usage">{itemData.usage}</h2>
                    {itemData.product_sub_content.map((detail, index) => {
                        return (
                            <Description
                                index={index}
                                detail={detail}
                                key={index}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default DetailProducts;
