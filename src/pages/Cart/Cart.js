import React, { useState } from 'react';
import './Cart.scss';
import '../../styles/mixin.scss';
import PRODUCT from './PRODUCT';
import CartProductList from './CartProductList';

const Cart = () => {
    const [carts, setCarts] = useState(PRODUCT);

    const total = carts
        .reduce((a, b) => a + b.productPrice * b.amount, 0)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

    const onRemove = id => {
        setCarts(carts.filter(list => list.id !== id));
    };

    const onChangeAmount = (id, amount) => {
        setCarts(
            carts.map(cart => {
                if (cart.id === id) {
                    cart.amount = amount;
                }
                return cart;
            })
        );
    };

    return (
        <div className="cart">
            <div className="cartInner">
                <div className="cartOrganize">
                    <CartProductList
                        carts={carts}
                        onRemove={onRemove}
                        onChangeAmount={onChangeAmount}
                    />
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
                                    ₩{total}
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
