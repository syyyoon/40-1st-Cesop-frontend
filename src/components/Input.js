import React from 'react';
import './Input.scss';

const Input = ({ placeholder, type, value, onChange }) => {
    return (
        <div className="input">
            <input
                className="inputBox"
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />

            <span className="errorMessage" />
            {type === 'password' ? (
                <button className="showHiddenPassword">보기</button>
            ) : null}
        </div>
    );
};

export default Input;
