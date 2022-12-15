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
    const [isLoginOpen, setIsLoginOpen] = useState(false);
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

    const closeLoginModal = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    const openSignupModal = () => {
        setIsSignupModal(true);
    };

    const closeSignupModal = () => {
        setIsSignupModal(false);
    };

    const openCartModal = () => {
        setIsCartModal(true);
    };

    const closeCartModal = () => {
        setIsCartModal(false);
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
                                onClick={closeLoginModal}
                            >
                                로그인
                            </button>
                            <button
                                className="navButton"
                                onClick={openCartModal}
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
            {isLoginOpen && (
                <Login
                    closeLoginModal={closeLoginModal}
                    openSignupModal={openSignupModal}
                />
            )}
            {isSignupModal && <Signup signupCloseModal={closeSignupModal} />}
            {iscartModal && <Cart closeCartModal={closeCartModal} />}
        </div>
    );
};

export default Navigation;
