import React from "react";
import { useNavigate } from 'react-router-dom';
import KakaoMap from "../components/KakaoMap";
import backImage from '../assets/back.png';



function CustomerMapPage() {
  const navigate = useNavigate();

  const handleCouponClick = () => {
    navigate('/customer/coupon-box');
  }


  return (
    <div className="map-container">
      <header className="header">
      <div className="back-icon" onClick={handleCouponClick}>
          <img src={backImage} alt="Back Icon" />
        </div>
        <h1 className="title">카카오 지도</h1>
      </header>
      <div className="map-content">
        <KakaoMap />
      </div>
    </div>
  );
}

export default CustomerMapPage;