import React, { useState } from 'react';
import './Login.scss';
import Input from './Input/Input';
import { API } from '../../../src/config';

const Login = ({ setModalOpen }) => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const getUserInfo = e => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const isValid =
        userInfo.email.includes('@') && userInfo.password.length >= 8;

    const loginClick = () => {
        fetch(`${API.signin}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(userInfo),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            });
    };

    return (
        <div className="login">
            <main className="loginContainer">
                <div className="buttonWrapper">
                    <button className="closeButton" onClick={closeModal} />
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
                    <button className="buttonSignUp">회원가입</button>
                </div>
            </main>
        </div>
    );
};

export default Login;
