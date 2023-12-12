# CESOP
  <br>


<img width="850" alt="image" src="https://user-images.githubusercontent.com/109689216/225836464-8016a00f-bd91-4f76-8fd4-d48e511b5785.png">


- 코스메틱 브랜드 'Aēsop(이솝)' 홈페이지를 모델링하여 감각적이고 무드있는 웹 페이지를 구현
- 타겟층은 코스메틱 제품에 관심있는 20-30대 소비자들
- magazine 컨셉으로 유저와 단방향 소통이라는 단점은 존재하지만, 사용자의 참여보다는 이미지를 통한 시각적 정보 전달에 초점을 맞추어 제작
  <br>
  <br>
  
### 💡 개발 기간
- 2022/12/02 ~2022/12/16 (About 2 weeks)

### 💡 참여 개발자
| Front-End | Front-End | Front-End | Front-End |
| :---: | :---: | :---: | :---: |
| 임우진<br>(Product) | 박나정<br>(Project) | 윤선영 | 허재원 |


| Back-End | Back-End |
| :---: | :---: |
| 황정수 | 이가은 |
### 💡 적용 기술
#### Front-end 
|JavaScript|React|Sass|esLint|Prettier|
| :--: | :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="65" height="65" /></div> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> |
#### Back-end 
|JavaScript|Nodejs|MySql|Rest|
| :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="65" height="65" /> |
#### Common skills
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

- 매일 오전 프로젝트 매니저의 리드하에 Daily Standup Meeting을 통해 진행 상황 공유 및 앞으로 진행해야할 사항들 조율 및 수정
- Trello를 사용하여 티켓 관리를 통해 진행 상황 확인
<img width="1791" alt="스크린샷 2023-12-12 오후 4 16 49" src="https://github.com/syyyoon/40-1st-Cesop-frontend/assets/109261682/63aeb9cc-2134-43a6-8f5d-8907d06bef6c">


### 💡 기능 구현

###  1. 메인페이지 / Footer 
<table>
  <tbody>
    <tr>
      <th></th>
      <th align="center" width="40%">시연 영상</th>
      <th align="center">구현 내용</th>
    </tr>
    <tr>
      <td align="center">메<br />인<br />페<br />이<br />지</td>
      <td><img alt="MainPage" width="100%" src="https://user-images.githubusercontent.com/109689216/225871108-d3b65127-5329-42d8-9ded-eb8749493a3e.gif" /></td>
       <td>
        <ul>
          <li>추천 상품 카테고리 클릭 시 상품 리스트 페이지로 이동</li>
          <li>추천 상품 리스트 carousel로 구현 (상품 리스트의 component 재사용)</li>
          <li>매장 안내 서비스 carousel로 구현(무한 carousel) </li>
          <li>End-user의 흥미를 이끌 수 있는 주제에 대한 게시글 Link (게시글 - 구현 예정)</li>
          <li>서비스 정보, 문의 기능 등을 담은 Footer 구현</li>
          <li>`react-router-dom`으로 여러 페이지에 Footer component 함께 rendering</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<br />

### 2. 로그인 / 회원가입 
<table>
  <tbody>
    <tr >
      <th></th>
      <th align="center" width="40%">시연 영상</th>
      <th align="center">구현 내용</th>
    </tr>
    <tr>
      <td align="center">로 <br /> 그 <br /> 인</td>
      <td><img alt="login" width="100%" src="https://user-images.githubusercontent.com/109689216/226344305-1f686400-90a9-41a4-b56b-684308f682e4.gif" /></td>
      <td >
        <ul>
          <li>Email에 `@` 포함, 비밀번호 8자리 이상 유효성 검사 <br /> -> 유효성 검사 통과 시 로그인 버튼 active</li>
          <li>Back-end 서버에 email, 비밀번호 POST하여 인증 절차 실행 <br /> -> 인증 성공 시 access token 발급 후 LocalStorage 저장</li>
          <li>Input component를 email, password 재사용</li>
          <li>비밀번호 보기/ 숨기기 기능 구현</li>
          <li>로그인 성공 시 메인 페이지로 navigate(react-router-dom)</li>
          <li>로그인 실패 시 알람창</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">회<br />원<br />가<br />입 </td>
      <td><img alt="signup" width="100%" src="https://user-images.githubusercontent.com/109689216/226354091-e7990e20-acd2-4a08-a13c-767a6d288c78.gif" /></td>
      <td >
        <ul>
          <li>각 input 창별로 정규표현식(RegEx) 적용 <br /> -> 정규표현식 test가 false : Error Message를 text로 출력</li>
          <li>모든 input 창의 value `userInfo`state에 객체 타입으로 저장 후 회원가입 클릭 시 서버에 userInfo POST</li>
          <li>서버에서 정규표현식과 일치하지 않으면 오류 알림창</li>
          <li>일치할 경우 POST success, modal 창 자동으로 닫음</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">공<br />통</td>
      <td colspan='2'>
        <ul>
          <li>End-user의 서비스 방문 ~ 상품 구매까지 프로세스의 과정 간소화가 상품 구매로 이어질 확률 상승</li>
          <li>로그인 / 회원가입 서비스 페이지 이동이 아닌 `Modal 창`으로 구현</li>
          <li>로그인 또는 회원가입 시 새로운 페이지로 이동 <br /> -> 현재 보고 있는 제품을 로그인 / 회원가입 후 다시 찾아가는 번거로움 발생<br /> -> 구매까지의 프로세스가 길어져 end-user의 편의성 하락과 구매 의지 감소 우려<br /> -> Modal 창을 이용하여 간결하고, 빠르게 해당 절차 완료 가능</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<br />

### 3. Nav Bar(메인 카테고리)
<table>
  <tbody>
    <tr>
      <th></th>
      <th align="center" width="40%">시연 영상</th>
      <th align="center">구현 내용</th>
    </tr>
    <tr>
      <td align="center">메<br />인<br />카<br />테<br />고<br />리</td>
      <td><img alt="NavBar" width="100%" src="https://user-images.githubusercontent.com/109689216/226587935-82930035-dddc-415c-b9bb-8299f1716f4c.gif" /></td>
       <td>
        <ul>
          <li>메인 카테고리별 다른 서브 카테고리 리스트와 사진 출력</li>
          <li>여러 상수 데이터를 이용하여 코드의 중복 없이 메인 카테고리에 알맞은 서브 카테고리 리스트, 사진 출력하도록 설정 </li>
          <li>서브 카테고리 버튼 클릭 시 해당 서브 카테고리 상품 리스트 페이지로 이동</li>
          <li>Modal 창으로 구현하여 user가 어느 페이지에서도 열고 닫기 편리하도록 구현</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<br />

### 4. 제품 리스트 페이지
<table>
  <tbody>
    <tr>
      <th></th>
      <th align="center" width="40%">시연 영상</th>
      <th align="center">구현 내용</th>
    </tr>
    <tr>
      <td align="center">제<br />품<br />리<br />스<br />트</td>
      <td><img alt="ProductList" width="100%" src="https://user-images.githubusercontent.com/109689216/226592123-0b44b39e-99f1-4630-b896-5c7070d9c133.gif" /></td>
       <td>
        <ul>
          <li>메인 카테고리 내 모든 서브카테고리에 포함된 제품들을 한 번에 볼 수 있는 '모두 보기' 메뉴 구현</li>
          <li>'모두 보기'에서 서브 카테고리별 제품을 한 눈에 볼 수 있게 하기 위해 carousel로 리스트 구현 <br /> -> 상품 수에 따라 carousel 이동 횟수, indicator bar 크기 등이 변하도록 구현 <br /> -> 상품 수가 '2' 이하일 경우 이동 버튼, indicator bar 등장하지 않아 carousel 실행되지 않도록 구현</li>
          <li>서브 카테고리 메뉴 버튼 hover 시 밑줄 animation 실행 </li>
          <li>상수 데이터 이용해 서브 카테고리 버튼와 일치하는 제품 리스트 component 출력</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<br />

### 5. 카트 / 결제 페이지
<table>
  <tbody>
    <tr>
      <th></th>
      <th align="center" width="40%">시연 영상</th>
      <th align="center">구현 내용</th>
    </tr>
    <tr>
      <td align="center">카<br />트<br />/<br />결<br />제</td>
      <td><img alt="CartAndPayment" width="100%" src="https://user-images.githubusercontent.com/109689216/226611470-9ce1ac5b-1432-4ef6-b844-ee846e656072.gif" /></td>
       <td>
        <ul>
          <li>User가 편리하게 확인할 수 있도록 modal 창으로 구현</li>
          <li>Cart 서버로 request, response <br /> -> 리스트 GET, 삭제 버튼을 누르면 cart 서버에 해당 상품 DELETE, 수량 변경 시 해당 수량 PUT</li>
          <li>결제시 서버로부터 user의 보유 포인트 GET</li>
          <li>구매 완료시 상품 금액 차감된 잔여 포인트 서버로 POST </li>
        </ul>
      </td>
    </tr>
  
  </tbody>
</table>
