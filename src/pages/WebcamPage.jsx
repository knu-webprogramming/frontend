import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WebcamComponent from '../components/WebcamComponent';
import '../styles/WebcamPage.css'; // 추가된 부분

const WebcamPage = () => {
  const navigate = useNavigate();
  const { shopId } = useParams();

  const handleCapture = (imageSrc) => {
    // 여기에 사진 처리를 추가할 수 있습니다. 예를 들어, 서버로 업로드하거나 분석할 수 있습니다.
    // 도장 추가 작업을 수행한 후 원래 페이지로 이동
    navigate(`/customer/coupon/${shopId}`, { state: { newStamp: true } });
  };

  return (
    <div className="webcam-page">
      <h1 className="header">매장의 QR 코드를 스캔해주세요</h1>
      <WebcamComponent onCapture={handleCapture} />
    </div>
  );
};

export default WebcamPage;