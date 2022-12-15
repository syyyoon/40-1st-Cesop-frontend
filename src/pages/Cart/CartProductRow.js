import React from 'react';
import './CartProductRow.scss';

const CartProductRow = ({ cart, onRemove, onChangeAmount }) => {
    const handleSelect = e => {
        onChangeAmount(cart.id, Number(e.target.value));
    };

    return (
        <li className="productItem">
            <div className="productName">{cart.productName}</div>
            <div className="productSize">{cart.productSize}</div>
            <div className="QuantityButtonWrapper">
                <select
                    name="productQuantity"
                    id="selectQuantity"
                    onChange={handleSelect}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button
                className="deleteQuantity"
                onClick={() => onRemove(cart.id)}
            >
                삭제
            </button>
            <div className="totalPrice">
                {(cart.productPrice * cart.amount).toLocaleString('ko-KR', {
                    style: 'currency',
                    currency: 'KRW',
                })}
            </div>
        </li>
    );
};

export default CartProductRow;
