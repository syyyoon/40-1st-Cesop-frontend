import React from 'react';
import './Cart.scss';

const Cart = () => {
    return (
        <div className="cart">
            <div className="cartWrapper">
                <div className="cartInner">
                    <div className="cartList">
                        <div className="orderHeader">
                            <div className="cartHeader">카트</div>
                            <div className="sizeHeader">사이즈</div>
                            <div className="quantityHeader">수량</div>
                            <div className="deleteHeader" />
                            <button className="closeButtonHeader">
                                <img
                                    className="closeButtonIcon"
                                    src="./images/x.png"
                                    alt="closeIcon"
                                />
                            </button>
                        </div>
                        <div className="cartProduct">
                            <ul className="productList">
                                <li className="productItem">
                                    <a className="productName" href="">
                                        레저렉션 아로마틱 핸드 워시
                                    </a>
                                    <div className="productSize">
                                        <span>500mL (펌프 포함)</span>
                                    </div>
                                    <div className="QuantityButtonWrapper">
                                        <button className="productQuantity">
                                            <div className="quantityButtonContent">
                                                <span className="quantityNumber">
                                                    3
                                                </span>
                                                <img
                                                    className="quantityIcon"
                                                    src="./images/down.png"
                                                    alt="quantityIcon"
                                                />
                                            </div>
                                        </button>
                                    </div>
                                    <button className="deleteQuantity">
                                        삭제
                                    </button>
                                    <div className="totalAmount">
                                        <span>₩141,000</span>
                                    </div>
                                </li>
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
        </div>
    );
};

export default Cart;
