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
import CustomerCouponPage from './pages/CustomerCouponPage';
import OwnerProfilePage from './pages/OwnerProfilePage';
import OwnerMainPage from './pages/OwnerMainPage';
import OwnerProfileModifyPage from './pages/OwnerProfileModifyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/select" element={<SelectPage />} />
        <Route path="/signup/complete" element={<SignUpCompletePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer/profile" element={<CustomerProfilePage />} />
        <Route path="/customer/main" element={<CustomerMainPage />} />
        <Route path="/customer/coupon-box" element={<CustomerCouponBoxPage />} />
        <Route path="/customer/profile/modify" element={<CustomerProfileModifyPage />} />
        <Route path="/customer/coupon" element={<CustomerCouponPage />} />
        <Route path="/owner/profile" element={<OwnerProfilePage />} />
        <Route path="/owner/main" element={<OwnerMainPage />} />
        <Route path="/owner/profile/modify" element={<OwnerProfileModifyPage />} />
      </Routes>
    </Router>
  );
}

export default App;