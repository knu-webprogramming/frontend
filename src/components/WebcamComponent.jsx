import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import '../styles/WebcamComponent.css';

const WebcamComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [qrData, setQrData] = useState(null);

  const videoConstraints = {
    facingMode: { exact: "environment" }
  };

  useEffect(() => {
    const scanQrCode = () => {
      if (webcamRef.current) {
        const video = webcamRef.current.video;
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code) {
            setQrData(code.data);
            window.location.href = code.data; // QR 코드 데이터로 리다이렉트
          }
        }
      }
    };

    const interval = setInterval(scanQrCode, 500); // 0.5초마다 QR 코드 스캔 시도
    return () => clearInterval(interval);
  }, [webcamRef]);

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="webcam"
      />
      {qrData && <div className="qr-data">QR 코드가 인식되었습니다!</div>}
    </div>
  );
};

export default WebcamComponent;