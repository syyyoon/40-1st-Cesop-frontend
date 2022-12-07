import { React } from 'react';
import { Link } from 'react-router-dom';
import Bodyhand from './CategoryPage/Bodyhand';
import Skincare from './CategoryPage/Skincare';
import Hair from './CategoryPage/Hair';
import { MODAL_LIST } from './CategoryList';
import './NavModal.scss';

const Modal = ({ closeModal, listCheck, listId }) => {
    const listCategory = () => {
        if (listId === 1) {
            return <Skincare listId={listId} />;
        } else if (listId === 2) {
            return <Bodyhand />;
        } else if (listId === 3) {
            return <Hair />;
        } else {
            return <>s</>;
        }
    };
    return (
        <div className="modal">
            <div className="modalWrapper">
                <div className="modalCategory">
                    <ul>
                        {MODAL_LIST.map(list => {
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
                <div className="navRight">
                    <ul>
                        <li>
                            <button className="navButton">로그인</button>
                            <button className="navButton">카트</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="modalBody">{listCategory()}</div>
        </div>
    );
};

export default Modal;
