import React from 'react';
import './CartProductList.scss';
import CartProductRow from './CartProductRow';

const CartProductList = ({ carts, onRemove, onChangeAmount }) => {
    return (
        <div className="cartList">
            <div className="orderHeader">
                <div className="cartHeader">카트</div>
                <div className="sizeHeader">사이즈</div>
                <div className="quantityHeader">수량</div>
                <div className="deleteHeader" />
                <div className="closeHeader">
                    <button className="closeButtonHeader">
                        <img
                            className="closeButtonIcon"
                            src="./images/x.png"
                            alt="closeIcon"
                        />
                    </button>
                </div>
            </div>
            <div className="cartProduct">
                <ul className="productList">
                    {carts.map(cart => (
                        <CartProductRow
                            key={cart.id}
                            cart={cart}
                            onRemove={onRemove}
                            onChangeAmount={onChangeAmount}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CartProductList;
