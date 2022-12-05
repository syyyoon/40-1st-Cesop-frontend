import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="loginBox">
                {/* 로그인 (이메일주소/비밀번호) */}
                {/* <button> X </button> */}
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
                    <div className="hidden"></div>
                </div>

                <span className="resetPassword">비밀번호 재설정하기</span>

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
