import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './CategoryPage/Category';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/SignUp/SignUp';
import Cart from '../../pages/Cart/Cart';
import {
    BODY_AND_HAND,
    CATEGORY_LIST,
    HAIR,
    SKIN_CARE,
} from './CategoryPage/categoryList';
import '../../styles/mixin.scss';
import './Modal.scss';

const Modal = ({ closeModal, listCheck, listId }) => {
    const [isLoginModal, setIsLoginModal] = useState(false);
    const [isSignupModal, setIsSignupModal] = useState(false);
    const [isCartModal, setIsCartModal] = useState(false);

    const switchLoginModal = () => {
        setIsLoginModal(prev => !prev);
    };

    const switchSignupModal = () => {
        setIsSignupModal(prev => !prev);
    };

    const switchCartModal = () => {
        setIsCartModal(prev => !prev);
    };
    return (
        <div className="modal">
            <div className="modalWrapper">
                <div className="modalCategory">
                    <ul className="modalUl">
                        {CATEGORY_LIST.map(list => {
                            return (
                                <li
                                    className="modalLi"
                                    key={list.id}
                                    onClick={() => listCheck(list.id)}
                                >
                                    <Link>{list.text}</Link>
                                </li>
                            );
                        })}
                        <button className="search" type="button" />
                        <button
                            className="close"
                            type="button"
                            onClick={closeModal}
                        >
                            닫기 X
                        </button>
                    </ul>
                </div>
                <div className="navUser">
                    <ul>
                        <li>
                            <button
                                className="navButton"
                                onClick={switchLoginModal}
                            >
                                로그인
                            </button>
                            <button
                                className="navButton"
                                onClick={switchCartModal}
                            >
                                카트
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="modalBody">
                {MENU[listId] ? (
                    <Category
                        list={MENU[listId]}
                        key={listId}
                        closeModal={closeModal}
                    />
                ) : (
                    <h4 className="loadingMessage">준비 중입니다.</h4>
                )}
            </div>
            {isLoginModal && (
                <Login
                    switchLoginModal={switchLoginModal}
                    switchSignupModal={switchSignupModal}
                />
            )}
            {isSignupModal && <Signup switchSignupModal={switchSignupModal} />}
            {isCartModal && <Cart switchCartModal={switchCartModal} />}
        </div>
    );
};

export default Modal;

const MENU = {
    1: SKIN_CARE,
    2: BODY_AND_HAND,
    3: HAIR,
};
