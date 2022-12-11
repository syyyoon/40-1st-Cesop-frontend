import React, { useState } from 'react';
import './Input.scss';

const Input = ({ label, type, value, onChange }) => {
    // label 플로팅 state
    const [isFloatLabel, setIsFloatLabel] = useState(false);
    //password type 변경용 state
    const [isPasswordVisible, setIsPasswordVisible] = useState();

    // label 플로팅 구현하는 함수
    const inputFocus = () => {
        setIsFloatLabel(true);
    };

    // input의 값이 있을 때 label이 floating된 채로 유지함.
    const inputBlur = () => {
        if (value.length !== 0) return;
        setIsFloatLabel(false);
    };

    //password type 변경하는 함수
    const PasswordTypeHandler = () => {
        setIsPasswordVisible(prevState => {
            return !prevState;
        });
    };

    return (
        <div className="input">
            <input
                className="inputBox"
                onFocus={inputFocus}
                onBlur={inputBlur}
                type={
                    type === 'password'
                        ? isPasswordVisible
                            ? 'text'
                            : 'password'
                        : 'text'
                }
                value={value}
                onChange={onChange}
            />
            <span className={isFloatLabel ? 'label floatLabel' : 'label'}>
                {label}
            </span>
            ``
            <span className="errorMessage"></span>
            {type === 'password' ? (
                <button
                    className="showHiddenPassword"
                    onClick={PasswordTypeHandler}
                >
                    {isPasswordVisible ? '숨기기' : '보기'}
                </button>
            ) : null}
        </div>
    );
};

export default Input;
