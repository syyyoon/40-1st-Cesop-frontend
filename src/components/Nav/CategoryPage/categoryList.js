export const CATEGORY_LIST = [
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

export const SKIN_CARE = [
    {
        id: 1,
        text: '스킨 케어',
        category: [
            {
                id: 1,
                title: '카테고리',
                subCategory: [
                    {
                        id: 1,
                        text: '스킨 케어 모두 보기',
                        path: '/products/mainCategories/1',
                    },
                    {
                        id: 2,
                        text: '클렌저',
                        path: '/products/subCategories/1',
                    },
                    {
                        id: 3,
                        text: '각질 제거',
                        path: '/products/subCategories/2',
                    },
                    { id: 4, text: '트리트먼트 & 마스크' },
                    { id: 5, text: '토너' },
                    { id: 6, text: '립 & 아이' },
                ],
            },
            {
                id: 2,
                title: '피부 타입',
                subCategory: [
                    { id: 1, text: '중성' },
                    { id: 2, text: '건성' },
                    { id: 3, text: '지성' },
                    { id: 4, text: '복합성' },
                ],
            },
            {
                id: 3,
                title: '레인지',
                subCategory: [
                    { id: 1, text: '파슬리 씨드' },
                    { id: 2, text: '스킨케어 플러스' },
                ],
            },
        ],
    },
];

export const BODY_AND_HAND = [
    {
        id: 2,
        text: '바디 & 핸드',
        category: [
            {
                id: 1,
                title: '카테고리',
                subCategory: [
                    { id: 1, text: '바디 & 핸드 모두보기' },
                    { id: 2, text: '핸드' },
                    { id: 3, text: '바디' },
                    { id: 4, text: '퍼스널 케어' },
                    { id: 5, text: '번들' },
                ],
            },
            {
                id: 2,
                title: '레인지',
                subCategory: [{ id: 1, text: '제라늄 리프' }],
            },
            {
                id: 3,
                title: '데일리 에센셜',
                subCategory: [
                    { id: 1, text: '레저렉션 아로마틱 핸드 밤' },
                    { id: 2, text: '레저렉션 아로마틱 핸드 워시' },
                ],
            },
        ],
    },
];

export const HAIR = [
    {
        id: 3,
        text: '헤어',
        category: [
            {
                id: 1,
                title: '카테고리',
                subCategory: [
                    { id: 1, text: '헤어 모두보기' },
                    { id: 2, text: '샴푸' },
                    { id: 3, text: '컨디셔너' },
                    { id: 4, text: '트리트먼트' },
                    { id: 5, text: '그루밍' },
                ],
            },
            {
                id: 2,
                title: '조화로운 셀렉션',
                subCategory: [
                    { id: 1, text: '샴푸' },
                    { id: 2, text: '컨디셔너' },
                    { id: 3, text: '테임 헤어 세럼' },
                ],
            },
        ],
    },
];
