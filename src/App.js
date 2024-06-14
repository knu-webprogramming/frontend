import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import SignUpPage from './pages/SignUpPage';
import SelectPage from './pages/SelectPage';
import SignUpCompletePage from './pages/SignUpCompletePage'
import LoginPage from './pages/LoginPage';
import CustomerProfilePage from './pages/CustomerProfilePage';
import CustomerMainPage from './pages/CustomerMainPage';
import CustomerCouponBoxPage from './pages/CustomerCouponBoxPage';
import CustomerProfileModifyPage from './pages/CustomerProfileModifyPage';
import CustomerMapPage from './pages/CustomerMapPage';
import CustomerCouponPage from './pages/CustomerCouponPage';
import OwnerProfilePage from './pages/OwnerProfilePage';
import OwnerMainPage from './pages/OwnerMainPage';
import OwnerProfileModifyPage from './pages/OwnerProfileModifyPage';
import OwnerApprovalPage from './pages/OwnerApprovalPage';
import KakaoMapProfile from './components/KakaoMapProfile';
import KakaoMap from './components/KakaoMap';
import KakaoCallback from './components/KakaoCallBack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login/select" element={<SelectPage />} />
        <Route path="/signup/complete" element={<SignUpCompletePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer/profile" element={<CustomerProfilePage />} />
        <Route path="/customer/main" element={<CustomerMainPage />} />
        <Route path="/customer/coupon-box" element={<CustomerCouponBoxPage />} />
        <Route path="/customer/profile/modify" element={<CustomerProfileModifyPage />} />
        <Route path="/customer/map" element={<KakaoMap />} />
        <Route path="/customer/coupon" element={<CustomerCouponPage />} />
        <Route path="/owner/profile" element={<OwnerProfilePage />} />
        <Route path="/owner/map" element={<KakaoMapProfile/>}/>
        <Route path="/owner/main" element={<OwnerMainPage />} />
        <Route path="/owner/profile/modify" element={<OwnerProfileModifyPage />} />
        <Route path="/owner/approval" element={<OwnerApprovalPage />} />
        <Route path="/kakao-callback" element={<KakaoCallback/>} />
      </Routes>
    </Router>
  );
}

export default App;