import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import SelectPage from './pages/SelectPage';
import CustomerProfilePage from './pages/CustomerProfilePage';
import CustomerMainPage from './pages/CustomerMainPage';
import CustomerCouponBoxPage from './pages/CustomerCouponBoxPage';
import CustomerProfileModifyPage from './pages/CustomerProfileModifyPage';
import CustomerCouponPage from './pages/CustomerCouponPage';
import OwnerProfilePage from './pages/OwnerProfilePage';
import OwnerMainPage from './pages/OwnerMainPage';
import OwnerProfileModifyPage from './pages/OwnerProfileModifyPage';
import OwnerApprovalPage from './pages/OwnerApprovalPage';
import KakaoMapProfile from './components/KakaoMapProfile';
import KakaoMap from './components/KakaoMap';
import KakaoCallBack from './components/KakaoCallBack';
import GoogleCallBack from './components/GoogleCallBack';
import WebcamPage from './pages/WebcamPage';
import QRCodeScanner from './components/QRCodeScanner';
import StampAdd from './components/StampAdd';
import CouponUse from './components/CouponUse';
import QRCodePage from './pages/QRCodePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/select" element={<SelectPage />} />
        <Route path="/customer/profile" element={<CustomerProfilePage />} />
        <Route path="/customer/main" element={<CustomerMainPage />} />
        <Route path="/customer/coupon-box" element={<CustomerCouponBoxPage />} />
        <Route path="/customer/profile/modify" element={<CustomerProfileModifyPage />} />
        <Route path="/customer/map" element={<KakaoMap />} />
        <Route path="/customer/coupon" element={<CustomerCouponPage />} />
        <Route path="/customer/coupon/camera" element={<WebcamPage />} />
        <Route path="/customer/coupon/scanner" element={<QRCodeScanner />} />
        <Route path="/owner/profile" element={<OwnerProfilePage />} />
        <Route path="/owner/map" element={<KakaoMapProfile/>}/>
        <Route path="/owner/main" element={<OwnerMainPage />} />
        <Route path="/owner/profile/modify" element={<OwnerProfileModifyPage />} />
        <Route path="/owner/approval" element={<OwnerApprovalPage />} />
        <Route path="/owner/qrcode" element={<QRCodePage />} />
        <Route path="/kakao-callback" element={<KakaoCallBack/>} />
        <Route path="/google-callback" element={<GoogleCallBack/>} />
        <Route path="/customer/stamp" element={<StampAdd/>} />
        <Route path="/customer/coupon/use" element={<CouponUse/>} />
        <Route path="/customer/coupon/:shopId" element={<CustomerCouponPage />} />
        <Route path="/customer/coupon/camera/:shopId" element={<WebcamPage />} />
      </Routes>
    </Router>
  );
}

export default App;