import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './CategoryPage/Category';
import {
    BODY_AND_HAND,
    CATEGORY_LIST,
    HAIR,
    SKIN_CARE,
} from './CategoryPage/categoryList';
import '../../styles/mixin.scss';
import './Modal.scss';
import Cart from '../../pages/Cart/Cart';

const Modal = ({ closeModal, listCheck, listId }) => {
    const [iscartModal, setIsCartModal] = useState(false);

    const openCartModal = () => {
        setIsCartModal(true);
    };

    const closeCartModal = () => {
        setIsCartModal(false);
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
                            <button className="navButton">로그인</button>
                            <button
                                className="navButton"
                                onClick={openCartModal}
                            >
                                카트
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="modalBody">
                {MENU[listId] ? (
                    <Category list={MENU[listId]} key={listId} />
                ) : (
                    <h4 className="loadingMessage">준비 중입니다.</h4>
                )}
            </div>
            {iscartModal && <Cart closeCartModal={closeCartModal} />}
        </div>
    );
};

export default Modal;

const MENU = {
    1: SKIN_CARE,
    2: BODY_AND_HAND,
    3: HAIR,
};
