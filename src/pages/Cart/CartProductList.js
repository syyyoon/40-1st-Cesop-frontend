import React from 'react';
import { useState } from 'react';
import './CartProductList.scss';

const CartProductList = ({ cart, onRemove }) => {
    const [amount, setAmount] = useState(cart.amount);
    const handleSelect = e => {
        setAmount(e.target.value);
    };

    return (
        <li className="productItem">
            <div className="productName">{cart.productName}</div>
            <div className="productSize">{cart.productSize}</div>
            <div className="QuantityButtonWrapper">
                <select
                    name="productQuantity"
                    id="selectQuantity"
                    // onChange={() => {}}
                    // onChange={e => handleSelect(e)}
                    // onChange={handleSelect}
                    // value={setCarts}
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
            <div className="totalPrice">₩{cart.productPrice * amount}</div>
        </li>
    );
};

export default CartProductList;
