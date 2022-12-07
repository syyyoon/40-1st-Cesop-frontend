import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="loginContiner">
                <div className="buttonWrapper">
                    <button className="closeButton"></button>
                </div>
                <h1>로그인</h1>
                <div className="loginInput">
                    <input type="text" placeholder="이메일 주소" />
                    <span className="errorMessage"></span>
                </div>
                <div className="passwordInput">
                    <input type="text" placeholder="비밀번호" />
                    <button>보기</button>
                    <span className="errorMessage"></span>
                </div>
                <div className="buttonWrapper">
                    <button className="buttonResetPassword">
                        비밀번호 재설정하기
                    </button>
                </div>

                <button className="buttonLogin">로그인</button>
                <div className="joinUs">
                    <span>회원이 아니신가요?</span>
                    <button className="buttonSignup">회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
