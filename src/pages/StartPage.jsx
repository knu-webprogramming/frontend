import React from 'react';
import '../styles/StartPage.css';
import couponImage from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 정리
  }, [navigate]);

  return (
    <div>
      {/* <h1>Start Page</h1>
      <p>임시 페이지</p>
<<<<<<< Updated upstream
      <div><Link to="/signup">2. SignUpPage</Link></div>
      <div><Link to="/signup/select">3. SelectPage</Link></div>
      <div><Link to="/signup/complete">4. SignUpCompletePage</Link></div>
      <div><Link to="/login">5. LoginPage</Link></div>
      <div><Link to="/customer/profile">6. CustomerProfilePage</Link></div>
      <div><Link to="/customer/main">7. CustomerMainPage</Link></div>
      <div><Link to="/customer/coupon-box">8. CustomerCouponBoxPage</Link></div>
      <div><Link to="/customer/profile/modify">9. CustomerProfileModifyPage</Link></div>
      <div><Link to="/customer/map">11. CustomerMapPage</Link></div>
      <div><Link to="/customer/coupon">12. CustomerCouponPage</Link></div>
      <div><Link to="/owner/profile">13. OwnerProfilePage</Link></div>
      <div><Link to="/owner/profile/modify">14. OwnerProfileModifyPage</Link></div>
      <div><Link to="/owner/main">15. OwnerMainPage</Link></div>
      <div><Link to="/owner/approval">16. OwnerApprovalPage</Link></div>
      <div><Link to="/owner/map">17. OwnerMapPage</Link></div>
=======
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
      <div><Link to="/owner/qrcode">14. QRCodePage</Link></div> */}
 <div className="start-container">
      <img src={couponImage} alt="쿠폰모아" className="start-logo" />
    <div className="start-text"> This page will redirect to login page in 3 seconds.</div>
>>>>>>> Stashed changes
    </div>
    </div>  
  );
}

export default StartPage;