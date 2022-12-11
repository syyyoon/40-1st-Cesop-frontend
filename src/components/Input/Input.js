import React, { useState } from 'react';
import './Input.scss';

const Input = ({ label, type, value, onChange }) => {
    const [isFloatLabel, setIsFloatLabel] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const inputFocus = () => {
        setIsFloatLabel(true);
    };

    const inputBlur = () => {
        if (value.length !== 0) return;
        setIsFloatLabel(false);
    };

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
