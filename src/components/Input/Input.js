import React, { useState } from 'react';
import './Input.scss';

const Input = ({ label, type, value, onChange, name }) => {
    const [isFloatLabel, setIsFloatLabel] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const inputFocus = () => {
        setIsFloatLabel(true);
    };

    const inputBlur = () => {
        if (value.length !== 0) return;
        setIsFloatLabel(false);
    };

    const passwordTypeHandler = () => {
        setIsPasswordVisible(prevState => {
            return !prevState;
        });
    };

    return (
        <div className="input">
            <input
                name={name}
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
                    onClick={passwordTypeHandler}
                >
                    {isPasswordVisible ? '숨기기' : '보기'}
                </button>
            ) : null}
        </div>
    );
};

export default Input;
