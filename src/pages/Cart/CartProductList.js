import React from 'react';
import './CartProductList.scss';

const CartProductList = () => {
    return (
        <li className="productItem">
            <div className="productName">레저렉션 아로마틱 핸드 워시</div>
            <div className="productSize">
                <span>500mL (펌프 포함)</span>
            </div>
            <div className="QuantityButtonWrapper">
                <select name="productQuantity" id="selectQuantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button className="deleteQuantity">삭제</button>
            <div className="totalAmount">
                <span>₩141,000</span>
            </div>
        </li>
    );
};

export default CartProductList;
