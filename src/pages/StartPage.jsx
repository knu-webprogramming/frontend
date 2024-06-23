import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h1>Start Page</h1>
      <p>임시 페이지</p>
      <p>◆로그인, 회원가입 하나로 통합</p>
      <p>◆3번 페이지에서 고객/점주 선택 후 등록된 정보가 있으면 4/11번 페이지로, 없으면 3/9번 페이지로</p>
      <p>◆로그인, 프로필 설정 및 수정, 쿠폰함에 쿠폰(매장) 등록 기능은 구현 완료</p>

      <div><Link to="/login">1. SignUp/LoginPage</Link></div>
      <div><Link to="/login/select">2. SelectPage</Link></div>
      <div><Link to="/customer/profile">3. CustomerProfilePage</Link></div>
      <div><Link to="/customer/main">4. CustomerMainPage</Link></div>
      <div><Link to="/customer/coupon-box">5. CustomerCouponBoxPage</Link></div>
      <div><Link to="/customer/profile/modify">6. CustomerProfileModifyPage</Link></div>
      <div><Link to="/customer/map">7. CustomerMapPage</Link></div>
      <div><Link to="/customer/coupon">8. CustomerCouponPage</Link></div>
      <div><Link to="/owner/profile">9. OwnerProfilePage</Link></div>
      <div><Link to="/owner/profile/modify">10. OwnerProfileModifyPage</Link></div>
      <div><Link to="/owner/main">11. OwnerMainPage</Link></div>
      <div><Link to="/owner/approval">12. OwnerApprovalPage</Link></div>
      <div><Link to="/owner/map">13. OwnerMapPage</Link></div>
      <div><Link to="/owner/qrcode">14. QRCodePage</Link></div>
    </div>
  );
}

export default StartPage;