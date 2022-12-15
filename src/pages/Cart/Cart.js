import React, { useState, useEffect } from 'react';
import CartProductList from './CartProductList';
import './Cart.scss';
import '../../styles/mixin.scss';
import { Link } from 'react-router-dom';

const Cart = ({ switchCartModal }) => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('/data/cartProduct.json', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => setCarts(data));
    }, []);

    const total = carts.reduce((a, b) => a + b.price * b.quantity, 0);

    const onRemove = id => {
        setCarts(carts.filter(list => list.id !== id));
        fetch('http://10.58.52.204:8000/cart/' + id, {
            method: 'DELETE',
        }).catch(err => console.log(err));
    };
    const onChangeAmount = (id, quantity) => {
        setCarts(
            carts.map(cart => {
                if (cart.id === id) {
                    cart.quantity = quantity;
                }
                return cart;
            })
        );
        fetch('http://10.58.52.204:8000/cart/' + id, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ quantity }),
        })
            .then(response => response.json())
            .then(data => console.log(data));
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
                            switchCartModal={switchCartModal}
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
                                        {total.toLocaleString('ko-KR', {
                                            style: 'currency',
                                            currency: 'KRW',
                                        })}
                                    </div>
                                </div>
                                <div className="cartOrganizeButtonBottom">
                                    <Link to="/payment">
                                        <button
                                            className="cartPayButton"
                                            onClick={switchCartModal}
                                        >
                                            결제하기
                                        </button>
                                    </Link>
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
