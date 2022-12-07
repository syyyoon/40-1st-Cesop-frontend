import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { CATEGORY_LIST } from './CategoryList';
import './Nav.scss';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [listId, setListId] = useState();

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
        <div className="nav">
            <div className="navWrapper">
                <div className="navCategory">
                    <ul className="navUl" onClick={openModal}>
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
                    </ul>
                </div>
                <div className="navRight">
                    <ul>
                        <li>
                            <button className="navButton">로그인</button>
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
        </div>
    );
};

export default Navigation;
