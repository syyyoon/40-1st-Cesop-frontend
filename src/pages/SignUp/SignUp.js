import React from 'react';
import './SignUp.scss';

const SignUp = () => {
    return (
        <div className="signup">
            <div className="signUpContainer">
                <div className="buttonWrapper">
                    <button className="arrowLeft" />
                    <button className="closeButton" />
                </div>

                <div className="signupTitle">
                    <h1 className="title">회원가입</h1>
                    <span>
                        회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을
                        재구매하실 수 있습니다.
                    </span>
                </div>
                <form className="inputForm">
                    {SIGN_UP_FORM.map(input => {
                        return (
                            <div className={`${input.className}`}>
                                <input type="text" className="inputBox" />
                                <span className="label">{input.label}</span>
                            </div>
                        );
                    })}
                </form>

                <div className="userCheckBox">
                    <div className="checkList">
                        <div>
                            <input
                                className="checkBox"
                                type="checkbox"
                                name=""
                                value=""
                            />
                            &nbsp;본인은 14세 이상입니다 (필수)
                        </div>
                        <div>
                            <input
                                className="checkBox"
                                type="checkbox"
                                name=""
                                value=""
                            />
                            &nbsp;본인은 로봇이 아닙니다 (필수)
                        </div>
                    </div>
                </div>
                <div className="signUpWrapper">
                    <button className="signUpButton">회원가입</button>
                    <a className="checkUserAccount" href="#">
                        이미 이솝 계정을 가지고 계십니까?
                    </a>
                </div>
            </div>
        </div>
    );
};

const SIGN_UP_FORM = [
    { id: 1, label: '성', className: 'flex' },
    { id: 2, label: '이름', className: ' flex' },
    { id: 3, label: '이메일 주소', className: 'noFlex' },
    { id: 4, label: '비밀번호', className: 'noFlex' },
];

export default SignUp;
