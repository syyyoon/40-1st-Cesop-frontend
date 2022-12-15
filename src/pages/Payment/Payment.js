import React, { useEffect, useState } from 'react';
import OrderInput from './orderInput';

import './Payment.scss';

const Payment = () => {
    const [carts, setCarts] = useState([]);
    const [orderSum, setOrderSum] = useState({
        productSumAmount: 0,
        nowPointAmount: 0,
        remainPointAmount: 0,
    });

    useEffect(() => {
        fetch('/data/orderTable.json', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => setCarts(data));

        fetch('/data/orderTableSum.json', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => setOrderSum(data[0]));
    }, []);

    return (
        <div className="payment">
            <div className="main">
                <div className="mainContent">
                    <div className="mainLogo">
                        <div className="logo" href="">
                            <img
                                className="cesopLogo"
                                src="./images/cesopLogo1.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="mainCenter">
                        <div className="customerInfo">
                            <p className="infoHeading">주문자 성함</p>
                            <div className="customer">
                                <div className="customerName">김 코드 님</div>
                                <div className="customerEmail">
                                    wecode40@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="shippingInfo">
                            <p className="shippingInfoText">
                                주문을 어디로 보내시겠습니까?
                            </p>
                            <OrderInput />
                            <div className="shippingMethodWrapper">
                                <div className="shippingMethod">
                                    <p className="methodTopHeading">
                                        원하는 배송 방법을 선택하십시오
                                    </p>
                                    <div className="methodBox">
                                        <p className="boxHeading">
                                            무료 배송-₩0
                                        </p>
                                        <p className="boxSubHeadidng">
                                            배송 예정일
                                        </p>
                                        <p className="boxDate">
                                            영업일 기준 2~3일 소요
                                        </p>
                                    </div>
                                </div>
                                <div className="checkOption">
                                    <div className="giftOption">
                                        <div className="giftProductOption">
                                            <input
                                                className="forGift"
                                                type="checkbox"
                                            />
                                            <label
                                                className="giftProduct"
                                                htmlFor="forGift"
                                            >
                                                선물할 제품입니다.
                                            </label>
                                        </div>
                                        <div className="giftMessageOption">
                                            <input
                                                className="forGiftMessage"
                                                type="checkbox"
                                            />
                                            <label
                                                className="giftMessage"
                                                htmlFor="forGiftMessage"
                                            >
                                                기프트 메시지 카드를 함께 보내고
                                                싶습니다.
                                            </label>
                                        </div>
                                        <div className="giftTextOption">
                                            <p className="giftText">
                                                기프트 메시지 내용
                                            </p>
                                            <textarea
                                                className="giftInputText"
                                                type="text"
                                                placeholder="기프트 메시지 내용"
                                            />
                                        </div>
                                    </div>
                                    <div className="deliveryOption">
                                        <div className="deliveryMessageOption">
                                            <input
                                                className="forDelivery"
                                                type="checkbox"
                                            />
                                            <label
                                                className="deliveryMessage"
                                                htmlFor="forDelivery"
                                            >
                                                배송 기사님께 요청 사항이
                                                있습니다.
                                            </label>
                                        </div>
                                        <div className="deliveryTextOption">
                                            <p className="deliveryText">
                                                배송 요청 메시지 내용
                                            </p>
                                            <textarea
                                                className="deliveryInputText"
                                                type="text"
                                                placeholder="배송 요청 메시지 내용"
                                            />
                                        </div>
                                    </div>
                                    <div className="shippingOption">
                                        <div className="shippingMessageOption">
                                            <input
                                                className="forShipping"
                                                type="checkbox"
                                            />
                                            <label
                                                className="shippingMessage"
                                                htmlFor="forShipping"
                                            >
                                                주문 포장 및 기타 요청 사항이
                                                있습니다. (예: 개별 포장)
                                            </label>
                                        </div>
                                        <div className="shippingTextOption">
                                            <p className="shippingText">
                                                기타 요청 사항
                                            </p>
                                            <textarea
                                                className="shippingInputText"
                                                type="text"
                                                placeholder="기타 요청 사항"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sumInfo">
                            <p className="sumInfoText">구매할 제품</p>
                            <div className="orderTable">
                                <ul className="rowEntryList">
                                    {carts.map(rowEntry => {
                                        return (
                                            <li
                                                className="rowEntry"
                                                key={rowEntry.id}
                                            >
                                                <div
                                                    className="productName"
                                                    href={rowEntry.link}
                                                >
                                                    {rowEntry.productName}
                                                </div>
                                                <span className="productSize">
                                                    {rowEntry.productSize}
                                                </span>
                                                <span className="productQuantity">
                                                    {rowEntry.productQuantity}
                                                </span>
                                                <span className="productNameAmount">
                                                    {rowEntry.productNameAmount}
                                                </span>
                                            </li>
                                        );
                                    })}

                                    <div className="shipping">
                                        <span>배송 방법 - 무료배송</span>
                                        <span className="shippingAmount">
                                            ₩0
                                        </span>
                                    </div>
                                </ul>
                                <ul className="sumRowEntryList">
                                    <li className="sum">
                                        <div className="sumPoint">
                                            <div className="pointAmount">
                                                <span>합계</span>
                                                <span className="producPointAmount">
                                                    ₩
                                                    {orderSum.productSumAmount.toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="pointAmount">
                                                <span>현재 보유 포인트</span>
                                                <span className="producPointAmount">
                                                    ₩
                                                    {orderSum.nowPointAmount.toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="pointAmount">
                                                <span>구매 후 잔여 포인트</span>
                                                <span className="producPointAmount">
                                                    ₩
                                                    {orderSum.remainPointAmount.toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <span className="producPiontAmount" />
                                </ul>
                                <button className="purchaseCompleted">
                                    구매 완료
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Payment;
