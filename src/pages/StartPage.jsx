import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h1>Start Page</h1>
      <p>임시 페이지</p>
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
    </div>
  );
}

export default StartPage;