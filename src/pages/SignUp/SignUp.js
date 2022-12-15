import React, { useState } from 'react';
import './SignUp.scss';

const SignUp = ({ signupCloseModal }) => {
    const [userInfo, setUserInfo] = useState({
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        age: false,
        human: false,
    });

    const [isFocused, setIsFocused] = useState({
        lastName: false,
        firstName: false,
        email: false,
        password: false,
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const infoRegEx = {
        // 1~5길이의 한글
        lastName: /^[가-힣]{1,5}$/,
        // 1~5길이의 한글
        firstName: /^[가-힣]{1,5}$/,
        // 영문자/숫자/특수문자 가능 + @포함 + 영문자/숫자/특수문자 가능 + .포함 + 영문자 최소2~3글자
        email: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
        // 비밀번호는 적어도 하나 이상의 숫자, 문자를 포함해야하고 길이가 8 이상
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    };

    const { lastName, firstName, email, password } = infoRegEx;
    const validCheck = {
        lastName: lastName.test(userInfo.lastName),
        firstName: firstName.test(userInfo.firstName),
        email: email.test(userInfo.email),
        password: password.test(userInfo.password),
    };

    const errorMessage = {
        lastName: '한 글자 이상 입력해주세요.',
        firstName: '한 글자 이상 입력해주세요.',
        email: '이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요. (예: name@example.com)',
        password:
            '패스워드는 문자, 숫자를 하나 이상 포함해야 하며 8자 이상이어야 합니다',
    };

    const getUserInfo = e => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const inputFocus = e => {
        const { name } = e.target;
        setIsFocused({ ...isFocused, [name]: true });
    };

    const inputBlur = e => {
        const { name, value } = e.target;
        if (value.length !== 0) return;
        setIsFocused({ ...isFocused, [name]: false });
    };

    const checkBoxClick = e => {
        const { name } = e;
        setUserInfo({ ...userInfo, [name]: e.target.checked });
    };

    const isPasswordView = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const signupClick = e => {
        e.preventDefault();
        fetch('http://10.58.52.204:8000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(userInfo),
        })
            .then(response => {
                if (response.ok === false) {
                    alert('회원정보를 다시 입력 해 주세요');
                } else {
                    response.json();
                    signupCloseModal();
                }
            })
            .then(result => console.log('result', result));
    };
    return (
        <div className="signup">
            <form className="signUpContainer" onSubmit={signupClick}>
                <div className="buttonWrapper">
                    <button
                        className="closeButton"
                        onClick={signupCloseModal}
                    />
                </div>

                <div className="signupTitle">
                    <h1 className="title">회원가입</h1>
                    <span>
                        회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을
                        재구매하실 수 있습니다.
                    </span>
                </div>
                <div className="inputForm">
                    {SIGN_UP_FORM.map(input => {
                        return (
                            <div
                                className={`${input.className}`}
                                key={input.id}
                            >
                                <input
                                    onFocus={inputFocus}
                                    onBlur={inputBlur}
                                    name={input.name}
                                    onChange={getUserInfo}
                                    className="inputBox"
                                    value={userInfo[input.name].info}
                                    type={
                                        input.type === 'password'
                                            ? isPasswordVisible
                                                ? 'text'
                                                : 'password'
                                            : 'text'
                                    }
                                />
                                <span
                                    className={
                                        isFocused[input.name]
                                            ? 'label floatLabel'
                                            : 'label'
                                    }
                                >
                                    {input.label}
                                </span>

                                <span className="errorMessage ">
                                    {validCheck[input.name]
                                        ? ''
                                        : userInfo[input.name].length !== 0
                                        ? errorMessage[input.name]
                                        : ''}
                                </span>
                            </div>
                        );
                    })}
                    <button
                        className="showHiddenPassword"
                        onClick={isPasswordView}
                        type="button"
                    >
                        {isPasswordVisible ? '숨기기' : '보기'}
                    </button>
                </div>

                <div className="userCheckBox">
                    <div className="checkList">
                        <div>
                            <input
                                className="checkBox"
                                type="checkbox"
                                name="age"
                                onChange={checkBoxClick}
                            />
                            &nbsp;본인은 14세 이상입니다 (필수)
                        </div>
                        <div>
                            <input
                                className="checkBox"
                                type="checkbox"
                                name="human"
                                onChange={checkBoxClick}
                            />
                            &nbsp;본인은 로봇이 아닙니다 (필수)
                        </div>
                    </div>
                </div>
                <div className="signUpWrapper">
                    <button
                        onClick={signupClick}
                        className="signUpButton"
                        type="submit"
                    >
                        회원가입
                    </button>
                    <div className="buttonWrapper">
                        <button className="checkUserAccount" href="#">
                            이미 이솝 계정을 가지고 계십니까?
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

const SIGN_UP_FORM = [
    { id: 1, label: '성', className: 'flex', name: 'lastName', type: 'text' },
    {
        id: 2,
        label: '이름',
        className: ' flex',
        name: 'firstName',
        type: 'text',
    },
    {
        id: 3,
        label: '이메일 주소',
        className: 'noFlex',
        name: 'email',
        type: 'text',
    },
    {
        id: 4,
        label: '비밀번호',
        className: 'noFlex',
        name: 'password',
        type: 'password',
    },
];

export default SignUp;
