import React, { useState } from 'react';
import './SignUp.scss';
import Input from '../../components/Input';

const SignUp = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLastName = e => {
        setLastName(e.target.value);
        console.log(e.target.value);
    };
    const handleFirstName = e => {
        setFirstName(e.target.value);
        console.log(e.target.value);
    };
    const handleEmail = e => {
        setEmail(e.target.value);
    };
    const handlePwd = e => {
        setPassword(e.target.value);
    };

    return (
        <div className="signup">
            <div className="signUpContainer">
                <div className="buttonWrapper">
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

                <div style={{ display: 'flex' }}>
                    <Input
                        onChange={handleLastName}
                        placeholder="성"
                        type="textName"
                    />
                    <Input
                        onChange={handleFirstName}
                        placeholder="이름"
                        type="textName"
                    />
                </div>
                <Input
                    onChange={handleEmail}
                    placeholder="이메일 주소"
                    type="text"
                />
                <Input
                    onChange={handlePwd}
                    placeholder="비밀번호"
                    type="password"
                />

                <div className="userCheckBox">
                    <div className="checkList">
                        <div>
                            <input
                                className="checkBox"
                                type="checkbox"
                                name=""
                                value=""
                            />
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
                <div className="signUpWrapper">
                    <button className="signUpButton">회원가입</button>
                    <a className="checkUserAccount" href="#">
                        이미 이솝 계정을 가지고 계십니까?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
