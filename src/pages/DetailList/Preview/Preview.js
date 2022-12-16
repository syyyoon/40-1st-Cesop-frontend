import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Preview.scss';

const Preview = ({ product }) => {
    const previewRef = useRef(null);
    const previewButtonRef = useRef(null);

    const onMouseEventHandler = () => {
        previewRef.current.style.backgroundColor = '#F0EFE1';
        previewButtonRef.current.style.opacity = '1';
    };

    const leaveMouseEventHandler = () => {
        previewRef.current.style.backgroundColor = 'transparent';
        previewButtonRef.current.style.opacity = '0';
    };
    return (
        <div
            className="preview"
            ref={previewRef}
            onMouseEnter={onMouseEventHandler}
            onMouseLeave={leaveMouseEventHandler}
        >
            <Link>
                <picture className="imageSection">
                    <img
                        className="productImage"
                        alt="preview"
                        src={product.product_image}
                    />
                </picture>
                <div className="productInfo">
                    <h5 className="productName">{product.product_name}</h5>
                    <div>
                        <span>
                            {product.size}
                            {' / '}
                            {product.price.toLocaleString('ko-KR', {
                                style: 'currency',
                                currency: 'KRW',
                            })}
                        </span>
                    </div>
                </div>
            </Link>
            <div className="productDetails">
                <ul className="listOfDetails">
                    <li className="detailsInfo">
                        <div className="productInfoTitle">질감</div>
                        <div className="productInfoContent">
                            {product.texture}
                        </div>
                    </li>
                    <li className="detailsInfo">
                        <div className="productInfoTitle">사용감</div>
                        <div className="productInfoContent">
                            {product.feeling}
                        </div>
                    </li>
                </ul>
            </div>
            <button className="addCartButton" ref={previewButtonRef}>
                카트에 추가
            </button>
        </div>
    );
};

export default Preview;
