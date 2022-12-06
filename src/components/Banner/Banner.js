import React from 'react';
import './Banner.scss';

const Banner = () => {
    return (
        <div className="Banner">
            <div className="alertBanner">
                <ul className="alertList">
                    <li className="alertBody">
                        <p className="alertLink">
                            <a>
                                포스트-푸 드롭스와 오일 버너 블렌드 제품 자진
                                회수 안내
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
            <div className="shippingBanner">
                <div className="shippingContent">
                    <button className="shippingButton">
                        <p>전 구매 무료 배송과 선물포장 혜택을 즐겨보세요</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
