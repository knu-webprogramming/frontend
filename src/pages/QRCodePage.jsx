import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import '../styles/QRCodePage.css';
import backImage from '../assets/back.png';

const QRCodePage = () => {
  const location = useLocation();
  const { shopId } = location.state || {}; // Get shopId from state
  const [showStampQR, setShowStampQR] = useState(false);
  const [showCouponQR, setShowCouponQR] = useState(false);

  const handleStampClick = () => {
    setShowStampQR(true);
    setShowCouponQR(false);
  };

  const handleCouponClick = () => {
    setShowStampQR(false);
    setShowCouponQR(true);
  };

  const closeModal = () => {
    setShowStampQR(false);
    setShowCouponQR(false);
  };

  return (
    <div className="qr-code-container">
      <div className="qr-header">
        <img src={backImage} className="back-icon" onClick={() => window.location.href = '/owner/main'} />
        <h1 className="qr-title">QR코드</h1>
      </div>
      <button className="stamp-button" onClick={handleStampClick}>도장 찍기</button>
      <button className="coupon-button" onClick={handleCouponClick}>쿠폰 사용</button>

      {showStampQR && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <QRCode value={`https://main--coupon-moa.netlify.app/customer/stamp?shopId=${shopId}`} size={256} />
          </div>
        </div>
      )}

      {showCouponQR && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <QRCode value={`https://main--coupon-moa.netlify.app/customer/coupon/use?shopId=${shopId}`} size={256} />
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodePage;