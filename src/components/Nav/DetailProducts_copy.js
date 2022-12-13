// import React, { useState } from 'react';
// import Description from '../Description';

// import './DetailProducts.scss';

// const DetailProducts_copy = () => {
//     const [itemData, setItemData] = useState({
//         amountUsed: '반 티스푼',
//         createdAt: '2022-12-10T09:09:45.000Z',
//         feeling: '부드러운, 진정된',
//         flavor: '그린,시트러스,상쾌함',
//         mainIngredient: '마카다미아 씨, 토코페롤, 베타 카로틴',
//         id: 1,
//         price: '31,000',
//         productDescription:
//             '진한 메이크업도 부드럽고 깨끗하게 닦아주는 오일 타입의 클렌저',
//         productImage: './images/tube_75mL.png',
//         productName: '파슬리 씨드 페이셜 클렌징 오일',
//         size: 'ONE',
//         skinType: '모든 피부타입',
//         subCategories: 1,
//         texture: '크림 타입',
//         updatedAt: '2022-12-10T09:09:45.000Z',
//         howToUse: '필요할 때마다 깨끗한 손에 바릅니다.',
//     });

//     return (
//         <div className="detailProduct">
//             <div className="productDetailHeader">
//                 <img
//                     className="cesopLogo"
//                     src="./images/cesop-logo.png"
//                     alt="cesop_logo"
//                 />
//                 <div className="imageWrapper">
//                     <img
//                         className="productImage"
//                         src={itemData.productImage}
//                         alt={itemData.productName}
//                     />
//                     <span className="ecoFriendlyMessage">
//                         이솝에서는 환경적 지속가능성을 고려하여 온라인과
//                         매장에서의 별도 펌프 제공을 지양하고 있습니다.
//                     </span>
//                 </div>

//                 <div className="productContent">
//                     <nav className="productCategory">스킨 • 클렌저</nav>
//                     <div className="productInfo">
//                         <h1 className="productName">{itemData.productName}</h1>
//                         <p className="productDescription">
//                             {itemData.productDescription}
//                         </p>
//                     </div>
//                     <div className="productDetailBody">
//                         {itemData.product_main_content.map((detail, index) => {
//                             return (
//                                 <Description
//                                     index={index}
//                                     detail={detail}
//                                     key={index}
//                                 />
//                             );
//                         })}
//                         {/* <div className="productDetailList">
//                             <div className="productTerm">
//                                 <strong>피부 타입</strong>
//                             </div>
//                             <div className="productDescription">
//                                 <p>{itemData.skinType}</p>
//                             </div>
//                         </div>
//                         <div className="productDetailList">
//                             <div className="productTerm">
//                                 <strong>사용감</strong>
//                             </div>
//                             <div className="productDescription">
//                                 <p>{itemData.feeling}</p>
//                             </div>
//                         </div>
//                         <div className="productDetailList">
//                             <div className="productTerm">
//                                 <strong>주요 성분</strong>
//                             </div>
//                             <div className="productDescription">
//                                 <p>{itemData.mainIngredient}</p>
//                             </div>
//                         </div>
//                         <div className="productDetailList">
//                             <div className="productTerm">
//                                 <strong>사이즈</strong>
//                             </div>
//                             <div className="productDescription">
//                                 <p>{itemData.size}</p>
//                             </div>
//                         </div> */}
//                     </div>
//                     <button className="buttonAddToCart">
//                         카트에 추가하기 - {itemData.price}
//                     </button>
//                 </div>
//             </div>
//             <section className="messageToCustomer">
//                 <aside className="message">
//                     <div className="freeService">
//                         <strong>무료 선물 포장 서비스</strong>
//                         <p className="serviceDescription">
//                             주문하신 모든 제품에 대해 선물 포장 서비스를 제공해
//                             드립니다.
//                         </p>
//                     </div>
//                     <div className="giftSample">
//                         <strong>샘플 & 코튼 백 증정</strong>
//                         <p className="giftDescription">
//                             모든 주문 건에 무료 샘플과 코튼백을 제공해 드립니다.
//                             <br />
//                             (샘플 종류는 임의 지정이 불가합니다.)
//                         </p>
//                     </div>
//                 </aside>
//             </section>

//             <section class="howToUse">
//                 <div class="imageWrapper">
//                     <img
//                         className="textureImage"
//                         src="./images/texture_image1.jpg"
//                         alt="texture"
//                     />
//                 </div>

//                 <div className="howToUseContent">
//                     <p className="usageTitle">사용법</p>
//                     <h2 className="usage">{itemData.howToUse}</h2>
//                     {itemData.product_sub_content.map((detail, index) => {
//                         return (
//                             <Description
//                                 index={index}
//                                 detail={detail}
//                                 key={index}
//                             />
//                         );
//                     })}
//                     {/* <div className="productDetailList">
//                         <div className="productTerm">
//                             <strong>사용량</strong>
//                         </div>
//                         <div className="productDescription">
//                             <p>{itemData.amountUsed}</p>
//                         </div>
//                     </div>
//                     <div className="productDetailList">
//                         <div className="productTerm">
//                             <strong>텍스처</strong>
//                         </div>
//                         <div className="productDescription">
//                             <p>{itemData.texture}</p>
//                         </div>
//                     </div>
//                     <div className="productDetailList">
//                         <div className="productTerm">
//                             <strong>향</strong>
//                         </div>
//                         <div className="productDescription">
//                             <p>{itemData.flavor}</p>
//                         </div>
//                     </div> */}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default DetailProducts_copy;
