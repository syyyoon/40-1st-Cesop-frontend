import React, { useState } from 'react';
import './Cart.scss';
import '../../styles/mixin.scss';
import CartProductList from './CartProductList';
import PRODUCT from './PRODUCT';

const Cart = () => {
    const [carts, setCarts] = useState(PRODUCT);
    const onRemove = id => {
        setCarts(carts.filter(list => list.id !== id));
    };

    return (
        <div className="cart">
            <div className="cartInner">
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
                                <CartProductList
                                    key={cart.id}
                                    cart={cart}
                                    onRemove={onRemove}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="cartOrganize">
                    <div className="cartOrganizeWrapper">
                        <div className="cartOrganizeInner">
                            <div className="cartOrganizeNoticeTop">
                                <p className="cartOfferMessage">
                                    전 제품 무료 배송 혜택을 즐겨보세요.
                                </p>
                            </div>
                            <div className="totalComment">
                                <div className="totalLabel">
                                    소계(세금 포함)
                                </div>
                                <div className="OrganizeTotalAmount">
                                    <span>₩77,000</span>
                                </div>
                            </div>
                            <div className="cartOrganizeButtonBottom">
                                <button className="cartPayButton">
                                    결제하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
