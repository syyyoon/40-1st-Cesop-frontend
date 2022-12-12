import React, { useState } from 'react';
import './Login.scss';
import Input from '../../components/Input/Input';

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
        fetch('http://10.58.52.204:8000/users/signin', {
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
            <div className="loginContainer">
                <div className="buttonWrapper">
                    <button className="closeButton" onClick={closeModal} />
                </div>
                <h1 className="title">로그인</h1>
                <Input
                    value={userId}
                    onChange={saveUserId}
                    label="이메일 주소"
                    type="text"
                />
                <Input
                    value={userPwd}
                    onChange={saveUserPwd}
                    label="비밀번호"
                    type="password"
                />

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
                    <button className="buttonSignUp">회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
