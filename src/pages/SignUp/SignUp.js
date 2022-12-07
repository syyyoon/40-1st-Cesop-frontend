import React from 'react';
import './SignUp.scss';

const SignUp = () => {
    return (
        <div className="signup">
            <div className="signUpContainer">
                <div className="topSignUp">
                    <button className="arrowLeft"></button>
                    <button className="closeButton"></button>
                </div>

                <div className="signupTitle">
                    <h1 className="title">회원가입</h1>
                    <span>
                        회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을
                        재구매하실 수 있습니다.
                    </span>
                </div>

                <div className="wrappingInputName">
                    <div className="lastName">
                        <input type="text" placeholder="성" />
                    </div>
                    <div className="firstName">
                        <input type="text" placeholder="이름" />
                    </div>
                </div>
                <div className="wrappingInput">
                    <input type="text" placeholder="이메일 주소" />
                </div>
                <div className="wrappingInput">
                    <input type="text" placeholder="비밀번호" />
                    <button>보기</button>
                </div>

                <div className="checkBox">
                    <div className="checkList">
                        <div>
                            <input type="checkbox" name="" value="" />
                            &nbsp;본인은 14세 이상입니다 (필수)
                        </div>
                        <div>
                            <input type="checkbox" name="" value="" />
                            &nbsp;본인은 로봇이 아닙니다 (필수)
                        </div>
                    </div>
                </div>
                <div className="signUpBottom">
                    <button>회원가입</button>

                    <a href="#">이미 이솝 계정을 가지고 계십니까?</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
