import React, { useState, useEffect } from 'react';
import './Cart.scss';
import '../../styles/mixin.scss';
import CartProductList from './CartProductList';

const Cart = ({ closeCartModal }) => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('/data/cartProduct.json', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => setCarts(data));
    }, []);
    const total = carts
        .reduce((a, b) => a + b.productPrice * b.amount, 0)
        .toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' });

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

    const payButtonClick = () => {
        fetch('http://10.58.52.204:8000/cart', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                product_name: '레저렉션 아로마틱 핸드 워시',
                quantity: '1',
                price: '1000',
                total_price: { total },
            }),
        })
            .then(response => response.json())
            .then(data => setCarts(data));
    };

    return (
        <div className="cart">
            <div className="cartBox">
                <div className="cartInner">
                    <div className="cartOrganize">
                        <CartProductList
                            carts={carts}
                            onRemove={onRemove}
                            onChangeAmount={onChangeAmount}
                            closeCartModal={closeCartModal}
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
                                        {total}
                                    </div>
                                </div>
                                <div className="cartOrganizeButtonBottom">
                                    <button
                                        className="cartPayButton"
                                        onClick={payButtonClick}
                                    >
                                        결제하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
