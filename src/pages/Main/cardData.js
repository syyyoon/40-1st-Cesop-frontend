import image from '../../assets/images/main2.png';
import incenseImage from '../../assets/images/main3.png';
import perfumeImage from '../../assets/images/main4.png';
import serviceImage from '../../assets/images/main5.jpg';

export const CARD_DATA = [
    {
        id: 1,
        img: image,
        title: '장소의 시학',
        contents: {
            id: 1,
            text: '전 세계에 있는 주요 씨솝 스토어 네 곳의 건축과 주변의 분위기를 담은 씨솝의 디자인 유산에서 영감을 받아 탄생한 새로운 기프트 키트 컬렉션.',
            more: '시즈널 기프트 키트 보기',
        },
    },
    {
        id: 2,
        img: incenseImage,
        title: '홈 케어를 위한 기프트—인센스',
        contents: {
            id: 1,
            text: '섬세하고 은은하게 퍼지는 향기가 집이나 편안하게 머무는 장소에 평온한 안식을 선사합니다.',
            more: '인센스 보기',
        },
    },
    {
        id: 3,
        img: perfumeImage,
        title: '향수',
        contents: {
            id: 1,
            text: '힐, 티셋, 마라케싯 인텐스, 로즈—우디에서 플로럴에 이르기까지 밤과 낮에 모두 어울리는 현대적인 작품들',
            more: '향수 보기',
        },
    },
];

export const CARD_DATA_SERVICE = [
    {
        id: 1,
        img: serviceImage,
        title: '다양한 지원 모드',
        contents: {
            id: 1,
            text: '타인을 위한 선물이든 자신에게 건네는 선물이든 씨솝에서는 1:1 채팅 상담, 이메일, 전화 상담 등 다양한 채널을 통해 컨설팅과 지원을 받을 수 있습니다.',
            more: '씨솝 서비스 살펴보기',
        },
    },
];
