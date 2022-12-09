import { React } from 'react';
import { Link } from 'react-router-dom';
import {
    BODY_AND_HAND,
    CATEGORY_LIST,
    HAIR,
    SKIN_CARE,
} from './CategoryPage/CategoryList';
import Category from './CategoryPage/Category';
import './Modal.scss';

const Modal = ({ closeModal, listCheck, listId }) => {
    const MENU = {
        1: SKIN_CARE,
        2: BODY_AND_HAND,
        3: HAIR,
    };

    return (
        <div className="modal">
            <div className="modalWrapper">
                <div className="modalCategory">
                    <ul>
                        {CATEGORY_LIST.map(list => {
                            return (
                                <li
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
                            <button className="navButton">카트</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="modalBody">
                {MENU[listId] ? (
                    <Category list={MENU[listId]} key={listId} />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Modal;
