import React from 'react';
import './Preview.scss';

function Preview(props) {
    const { product } = props;
    return (
        <div className="productPreview">
            <picture className="imageSection">
                <img
                    className="productImage"
                    alt="preview"
                    src="/images/DetailList/product1.png"
                />
            </picture>
            <div className="productInfo">
                <a>
                    <h5 className="productName">{product.name}</h5>
                    <div>
                        <span>{product.ml}</span>
                        <span>/</span>
                        <span>{product.price}</span>
                    </div>
                </a>
            </div>
            <div className="productDetails">
                <ul className="listOfDetails">
                    <li className="detailsInfo">피부 타입</li>
                    <li className="detailsInfo">사용감</li>
                </ul>
            </div>
            <button className="addCartButton">카트에 추가</button>
        </div>
    );
}

export default Preview;
