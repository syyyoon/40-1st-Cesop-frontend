import React from 'react';
import './SignUp.scss';
import { SIGNUP_TWO_INPUT_LIST, SIGNUP_ONE_INPUT_LIST } from './SignupData';

const SignUp = () => {
    return (
        <div className="signup">
            <div className="signUpContainer">
                <div className="topSignUp">
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

                {SIGNUP_TWO_INPUT_LIST.map(list => {
                    return (
                        <div className={list.wrapper}>
                            <input
                                className={list.userInfo.input1_className}
                                type={list.userInfo.type1}
                                placeholder={list.userInfo.value1}
                            />
                            <input
                                className={list.userInfo.input2_className}
                                type={list.userInfo.type2}
                                placeholder={list.userInfo.value2}
                            />
                        </div>
                    );
                })}

                {SIGNUP_ONE_INPUT_LIST.map(list => {
                    return (
                        <div className={list.wrapper}>
                            <input
                                className={list.className}
                                type={list.type}
                                placeholder={list.value}
                            />
                            <button className="splitPasswordHide">
                                {list.showButton}
                            </button>
                        </div>
                    );
                })}

                <div className="userCheckBox">
                    <div className="checkList">
                        <div>
                            <input
                                className="checkBox"
                                type="checkbox"
                                name=""
                                value=""
                            />
                            <img src="" alt="" />
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
                <div className="signUpBottom">
                    <button>회원가입</button>
                    <a className="checkUserAccount" href="#">
                        이미 이솝 계정을 가지고 계십니까?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
