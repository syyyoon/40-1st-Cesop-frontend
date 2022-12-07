import React from 'react';
import Carousel from './Carousel';

const MENU = [
    {
        id: 1,
        title: '클렌저',
        content:
            '피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다.',
    },
    {
        id: 2,
        title: '각질 제거',
        content:
            '효과적인 각질 관리는 피부의 잔여물과 불필요한 유분을 깨끗하게 세정해주는 동시에 피부를 부드럽고 생기 있게 가꿔줍니다.',
    },
];

const SeeAll = () => {
    return (
        <section className="listSection">
            <div>
                <div className="categoryTitleHolder">
                    <h1 className="categoryTitle">모든 스킨</h1>
                </div>
                <div className="categoryBar">
                    <ul className="categoryList">
                        <li className="categoryTitles">
                            <button>
                                <span>모든 스킨</span>
                            </button>
                        </li>
                        {MENU.map(title => {
                            return (
                                <li className="categoryTitles" key={title.id}>
                                    <button>
                                        <span>{title.title}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            {MENU.map(menu => {
                const switchBackgroundColor = menu.id % 2 === 1 ? true : false;
                return (
                    <Carousel
                        key={menu.id}
                        title={menu.title}
                        content={menu.content}
                        backgroundColor={switchBackgroundColor}
                    />
                );
            })}
        </section>
    );
};

export default SeeAll;
