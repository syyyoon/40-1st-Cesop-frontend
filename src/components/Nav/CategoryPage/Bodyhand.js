import React from 'react';
import { MODAL_LIST } from '../CategoryList';
import './ModalCategory.scss';
import '../../../styles/mixin.scss';

const Bodyhand = () => {
    return (
        <div className="categoryBody" style={{ backgroundColor: '#ece3d3' }}>
            <div className="bodyWrapper">
                <img
                    className="logoImage"
                    src="../../images/cesop-logo.png"
                    alt="logo"
                />
                <ul className="categoryTitleList">
                    {MODAL_LIST[1].category.map(category => {
                        return <li key={category.id}>{category.text}</li>;
                    })}
                </ul>
                <div className="categoryBodyList">
                    <ul>
                        {MODAL_LIST[1].range.map(range => {
                            return <li key={range.id}>{range.text}</li>;
                        })}
                    </ul>
                    <ul>
                        {MODAL_LIST[1].daily.map(daily => {
                            return <li key={daily.id}>{daily.text}</li>;
                        })}
                    </ul>
                </div>
                <div className="rightImage">
                    <img
                        className="skinImage"
                        src="../../images/category2.png"
                        alt="skinImage"
                    />
                </div>
            </div>
        </div>
    );
};

export default Bodyhand;
