import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Cart from '../../pages/Cart/Cart';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/SignUp/SignUp';
import { CATEGORY_LIST } from './CategoryPage/categoryList';
import '../../styles/mixin.scss';
import './Nav.scss';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [listId, setListId] = useState(1);
    const [isLoginModal, setIsLoginModal] = useState(false);
    const [isSignupModal, setIsSignupModal] = useState(false);
    const [iscartModal, setIsCartModal] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const listCheck = id => {
        setListId(id);
    };

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
        <div className="navigation">
            <div className="navWrapper">
                <div className="navCategory">
                    <ul className="navUl" onClick={openModal}>
                        {CATEGORY_LIST.map(list => {
                            return (
                                <li
                                    className="navLi"
                                    key={list.id}
                                    onClick={() => listCheck(list.id)}
                                >
                                    <Link>{list.text}</Link>
                                </li>
                            );
                        })}
                        <button className="search" type="button" />
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
                {isOpen && (
                    <Modal
                        isOpen={isOpen}
                        listId={listId}
                        closeModal={closeModal}
                        listCheck={listCheck}
                    />
                )}
            </div>
            {isLoginModal && (
                <Login
                    switchLoginModal={switchLoginModal}
                    switchSignupModal={switchSignupModal}
                />
            )}
            {isSignupModal && <Signup switchSignupModal={switchSignupModal} />}
            {iscartModal && <Cart switchCartModal={switchCartModal} />}
        </div>
    );
};

export default Navigation;
