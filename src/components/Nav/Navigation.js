import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Login from '../../pages/Login/Login';
import { CATEGORY_LIST } from './CategoryPage/categoryList';
import '../../styles/mixin.scss';
import './Nav.scss';
import Signup from '../../pages/SignUp/SignUp';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [listId, setListId] = useState(1);
    const [isSignupModal, setIsSignupModal] = useState(false);

    // 로그인 모달로 오픈
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const closeLoginModal = () => {
        setIsLoginOpen(!isLoginOpen);
    };
    const closeSignupModal = () => {
        setIsSignupModal(false);
    };

    const openSignupModal = () => {
        setIsSignupModal(true);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const listCheck = id => {
        setListId(id);
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
                                onClick={closeLoginModal}
                                className="navButton"
                            >
                                로그인
                            </button>

                            <button className="navButton">카트</button>
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
        </div>
    );
};

export default Navigation;
