import React, { useState } from 'react';
import './Login.scss';

const Login = ({ setModalOpen }) => {
    const closeModal = () => {
        setModalOpen(false);
    };

    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');

    const isValid = userId.includes('@') && userPwd.length >= 5;

    const saveUserId = e => {
        setUserId(e.target.value);
    };

    const saveUserPwd = e => {
        setUserPwd(e.target.value);
    };

    const loginClick = () => {
        fetch('http://10.58.52.128:8000/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ email: userId, password: userPwd }),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            });
    };

    return (
        <div className="login">
            <div className="loginContiner">
                <div className="buttonWrapper">
                    <button
                        className="closeButton"
                        onClick={closeModal}
                    ></button>
                </div>
                <h1 className="title">로그인</h1>
                <div className="loginInput">
                    <input
                        className="userIdInput"
                        value={userId}
                        onChange={saveUserId}
                        type="text"
                        placeholder="이메일 주소"
                    />
                    <span className="errorMessage"></span>
                </div>
                <div className="passwordInput">
                    <input
                        className="userPwdInput"
                        value={userPwd}
                        onChange={saveUserPwd}
                        type="text"
                        placeholder="비밀번호"
                    />
                    <button className="buttonSeeHiddenPassword">보기</button>
                    <span className="errorMessage"></span>
                </div>
                <div className="buttonWrapper">
                    <button className="buttonResetPassword">
                        비밀번호 재설정하기
                    </button>
                </div>

                <button
                    onClick={loginClick}
                    disabled={isValid ? false : true}
                    className="buttonLogin"
                    style={isValid ? { opacity: '1' } : { opacity: '0.6' }}
                >
                    로그인
                </button>
                <div className="joinUs">
                    <span className="checkAccount">회원이 아니신가요?</span>
                    <button className="buttonSignup">회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
