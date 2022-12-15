import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../../src/config';
import Input from './Input/Input';
import './Login.scss';

const Login = ({ closeLoginModal, openSignupModal }) => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const signupModal = () => {
        openSignupModal();
        closeLoginModal();
    };

    const getUserInfo = e => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    // const closeModal = () => {
    //     setModalOpen(false);
    // };

    const isValid =
        userInfo.email.includes('@') && userInfo.password.length >= 8;

    const loginClick = () => {
        fetch(API.signin, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(userInfo),
        })
            .then(response => response.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('token', data.accessToken);
                    closeLoginModal();
                    navigate('/');
                } else {
                    alert('이메일, 비밀번호가 일치하지 않습니다');
                }
            });
    };

    return (
        <div className="login">
            <main className="loginContainer">
                <div className="buttonWrapper">
                    <button onClick={closeLoginModal} className="closeButton" />
                </div>

                <h1 className="title">로그인</h1>
                <Input
                    value={userInfo.email}
                    onChange={getUserInfo}
                    name="email"
                    label="이메일 주소"
                    type="text"
                />
                <Input
                    value={userInfo.password}
                    onChange={getUserInfo}
                    label="비밀번호"
                    type="password"
                    name="password"
                />

                <button
                    onClick={loginClick}
                    disabled={isValid ? false : true}
                    className={
                        isValid ? 'buttonLogin buttonActive' : 'buttonLogin'
                    }
                >
                    로그인
                </button>
                <div className="joinUs">
                    <span className="checkAccount">회원이 아니신가요?</span>
                    <button onClick={signupModal} className="buttonSignUp">
                        회원가입
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
