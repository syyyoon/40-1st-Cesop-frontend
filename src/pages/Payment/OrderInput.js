import React from 'react';
const OrderInput = () => {
    // const autoHyphen = target => {
    //     target.value = target.value
    //         .replace(/[^0-9]/g, '')
    //         .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    //         .replace(/(\-{1,2})$/g, '');
    // };

    return (
        <div className="userInput">
            <div className="userName">
                <div className="lastNameContent">
                    <label className="lastNameLabel" htmlFor="lastNameLabel">
                        <p className="lastName">성</p>
                        <input
                            className="lastNameInput"
                            type="text"
                            placeholder="성"
                        />
                    </label>
                </div>
                <div className="firstNameContent">
                    <label className="firstNameLabel" htmlFor="firstNameLabel">
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
                <div className="nationalContent">
                    <label className="nationalLabel" htmlFor="nationalLabel">
                        <p className="nationalCode">국가 코드</p>
                        <select name="nationalName" id="selectNational">
                            <option value="ST">STP</option>
                            <option value="AL">ALB</option>
                            <option value="DZA">DZA</option>
                            <option value="KR">KOR</option>
                            <option value="ZA">ZAF</option>
                            <option value="RW">RWA</option>
                            <option value="AW">ABW</option>
                            <option value="PY">PRY</option>
                            <option value="NU">NIU</option>
                        </select>
                    </label>
                </div>
                <div className="numberContent">
                    <label className="numberLabel" htmlFor="numberContent">
                        <p className="phoneNumber">전화번호 (010-0000-0000)</p>
                        <input
                            className="phoneNumberInput"
                            // oninput="autoHyphen2(this)"
                            type="text"
                            placeholder="000-0000-0000"
                            maxlength="13"
                        />
                    </label>
                </div>
            </div>
            <div className="countryContent">
                <label className="countryLabel" htmlFor="countryLabel">
                    <p className="countryName">국가</p>
                    <select name="selectcountry" id="selectcountry">
                        <option value="대한민국">대한민국</option>
                        <option value="나열되지 않은 국가">
                            나열되지 않은 국가
                        </option>
                    </select>
                </label>
            </div>
            <div className="userAddressContent">
                <label className="addressLabel" htmlFor="addressLabel">
                    <p className="address">주소</p>
                    <input
                        className="addressInput"
                        type="text"
                        placeholder="주소"
                    />
                </label>
            </div>
            <div className="userDetailAddressContent">
                <label
                    className="detailAddressLabel"
                    htmlFor="detailAddressLabel"
                >
                    <p className="detailAddress">
                        상세주소(아파트 동/호수, 일반주택 등)
                    </p>
                    <input
                        className="detailAddressInput"
                        type="text"
                        placeholder="상세주소"
                    />
                </label>
            </div>
        </div>
    );
};

export default OrderInput;
