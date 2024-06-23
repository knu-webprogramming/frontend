import React from 'react';
import { QrScanner } from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';

const QRCodeScanner = () => {
  const navigate = useNavigate();

  const handleScan = data => {
    if (data) {
      console.log(data); // QR 코드 데이터를 로그로 출력
      navigate('/new-page', { state: { qrData: data } });
    }
  };

  const handleError = err => {
    console.error(err);
  };

  return (
    <div>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default QRCodeScanner;