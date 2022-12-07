import React from 'react';
import './FilterButton.scss';

function FilterButton() {
    return (
        <div className="categoryFilter">
            <button className="filterButton">
                <div className="buttonContent">
                    <span>필터</span>
                    <img
                        className="underArrow"
                        alt="seemore"
                        src="/images/DetailList/down.png"
                    />
                </div>
            </button>
        </div>
    );
}

export default FilterButton;
