import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
    return (
        <div className="nav">
            <div className="navWrapper">
                <div className="navCategory">
                    <ul>
                        {CATEGORY_LIST.map(list => {
                            return (
                                <li key={list.id}>
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
            </div>
        </div>
    );
};

export default Nav;

const CATEGORY_LIST = [
    { id: 1, text: '스킨 케어' },
    { id: 2, text: '바디 & 핸드' },
    { id: 3, text: '헤어' },
    { id: 4, text: '향수' },
    { id: 5, text: '홈' },
    { id: 6, text: '키트 & 여행 제품' },
    { id: 7, text: '기프트 가이드' },
    { id: 8, text: '읽기' },
    { id: 9, text: '스토어' },
];
