import React from 'react';
import { useState } from 'react';
import './CartProductList.scss';
import PRODUCT from './PRODUCT';

const CartProductList = () => {
    const [remove, setRemove] = useState(PRODUCT);

    const onRemove = id => {
        setRemove(remove.filter(list => list.id !== id));
    };
    console.log(remove);
    return remove.map(list => {
        return (
            <li className="productItem" key={list.id}>
                <div className="productName">{list.productName}</div>
                <div className="productSize">{list.productSize}</div>
                <div className="QuantityButtonWrapper">
                    <select name="productQuantity" id="selectQuantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button
                    className="deleteQuantity"
                    onClick={() => onRemove(list.id)}
                >
                    삭제
                </button>
                <div className="totalAmount">{list.productAmount}</div>
            </li>
        );
    });
};

export default CartProductList;
