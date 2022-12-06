import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="loginBox">
                <div className="wrapButton">
                    <button className="closeButton"></button>
                </div>

                <h1>로그인</h1>
                <div>
                    <input
                        class="inputEmail"
                        type="text"
                        placeholder="이메일 주소"
                    />
                    <div className="hidden"></div>
                </div>
                <div>
                    <input
                        class="inputPassword"
                        type="text"
                        placeholder="비밀번호"
                    />
                    <button>보기</button>
                    <span className="resetPassword">비밀번호 재설정하기</span>
                </div>

                <button className="buttonLogin">로그인</button>
                {/* 회원이 아니신가요? */}
                <div className="checkAccount">
                    <span>회원이 아니신가요?</span>
                    <button className="buttonSignup">회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
