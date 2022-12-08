import React from 'react';
import './Payment.scss';

const Payment = () => {
    return (
        <div className="payment">
            <div className="main">
                <div className="mainLeftCenter">
                    <div className="mainLeft">
                        <a className="logo" href="">
                            <img
                                className="cesopLogo"
                                src="./images/cesopLogo1.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="mainCenter">
                        <div className="customerInfo">
                            <p className="infoHeading">주문자 성함</p>
                            <div className="customer">
                                <div className="customerName">허 재원 님</div>
                                <div className="customerEmail">
                                    jwh2700@naver.com
                                </div>
                            </div>
                        </div>
                        <div className="shippingInfo">
                            <p className="shippingText">
                                주문을 어디로 보내시겠습니까?
                            </p>
                            <div className="userInput">
                                <div className="userName">
                                    <div className="lastNameContent">
                                        <label
                                            className="lastNameLabel"
                                            htmlFor="lastNameLabel"
                                        >
                                            <p className="lastName">성</p>
                                            <input
                                                className="lastNameInput"
                                                type="text"
                                                placeholder="성"
                                            />
                                        </label>
                                    </div>
                                    <div className="firstNameContent">
                                        <label
                                            className="firstNameLabel"
                                            htmlFor="firstNameLabel"
                                        >
                                            <p className="firstName">이름</p>
                                            <input
                                                className="firstNameInput"
                                                type="text"
                                                placeholder="이름"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="userCode">
                                    <div className="national">
                                        <label
                                            className="nationalLabel"
                                            htmlFor="nationalLabel"
                                        >
                                            {/* <input type="text" placeholder="KOR" /> */}
                                            <p className="nationalCode">
                                                국가 코드
                                            </p>
                                            <select
                                                name="nationalName"
                                                id="selectNational"
                                            >
                                                <option value="AF">AFG</option>
                                                <option value="AL">ALB</option>
                                                <option value="DZA">DZA</option>
                                                <option value="AS">ASM</option>
                                                <option value="AD">AND</option>
                                                <option value="AO">AGO</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="number">
                                        <label
                                            className="numberLabel"
                                            htmlFor="numberContent"
                                        >
                                            <p className="phoneNumber">
                                                전화번호 (010-0000-0000)
                                            </p>
                                            <input
                                                className="phoneNumberInput"
                                                type="text"
                                                placeholder="000-0000-0000"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="country">
                                    <label
                                        className="countryLabel"
                                        htmlFor="countryLabel"
                                    >
                                        <p className="countryName">국가</p>
                                        <select
                                            name="selectcountry"
                                            id="selectcountry"
                                        >
                                            <option value="대한민국">
                                                대한민국
                                            </option>
                                            <option value="나열되지 않은 국가">
                                                나열되지 않은 국가
                                            </option>
                                        </select>
                                    </label>
                                </div>
                                <div className="userAddress">
                                    <label
                                        className="addressLabel"
                                        htmlFor="addressLabel"
                                    >
                                        {/* <p className="address">주소</p> */}
                                        <input
                                            className="addressInput"
                                            type="text"
                                            placeholder="주소"
                                        />
                                    </label>
                                </div>
                                <div className="userDetailAddress">
                                    <label
                                        className="DetailAddressLabel"
                                        htmlFor="DetailAddressLabel"
                                    >
                                        {/* <p className="address">주소</p> */}
                                        <input
                                            className="detailAddressInput"
                                            type="text"
                                            placeholder="상세주소"
                                        />
                                    </label>
                                </div>
                                {/* <div className="postNumber">
                                <input type="number" placeholder="우편번호" />
                                <button>우편번호 찾기</button>
                                </div> */}
                            </div>
                            <div className="shipping method">
                                <h3>원하는 배송 방법을 선택하십시오</h3>
                                <p>무료 배송-₩0</p>
                                <p>배송 예정일</p>
                                <p>영업일 기준 2~3일 소요</p>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">
                                    배송 기사님께 요청 사항이 있습니다.
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">
                                    주문 포장 및 기타 요청 사항이 있습니다. (예:
                                    개별 포장)
                                </label>
                            </div>
                            <button className="buttonToPayment">
                                결제하기로 이동
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mainRight" />
            </div>
            {/* <div className="formText">
                <label for="firstNameInput">
                    <input id="firstNameInput" />
                    <span className="formTextLabel">성</span>
                </label>
            </div>
            <div className="formText">
                <label for="firstNameInput">
                    <input id="firstNameInput" />
                    <span className="formTextLabel">이름</span>
                </label>
            </div> */}
        </div>
    );
};

export default Payment;
