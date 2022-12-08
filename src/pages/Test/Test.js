import React, { useState } from 'react';
import Login from '../Login/Login';
import './Test.scss';

//모달을 노출시켜주는 페이지
const Test = () => {
    const [modalOpen, setModalOpen] = useState(false);

    //모달창 노출 여부 state
    const showModal = () => {
        setModalOpen(true);
    };
    return (
        <div className="test">
            <button className="buttonLogin" onClick={showModal}>
                로그인
            </button>
            {modalOpen ? <Login setModalOpen={setModalOpen} /> : null}
        </div>
    );
};

export default Test;
