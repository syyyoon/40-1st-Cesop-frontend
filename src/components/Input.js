import React, { useState } from 'react';
import './Input.scss';

const Input = ({ placeholder, type, value, onChange }) => {
    //password type 변경용 state
    const [isPasswordVisible, setIsPasswordVisible] = useState();

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
                placeholder={placeholder}
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
