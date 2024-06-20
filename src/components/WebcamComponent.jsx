import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import '../styles/WebcamComponent.css';

const WebcamComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [qrData, setQrData] = useState(null);
  const [qrPosition, setQrPosition] = useState(null);

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
            setQrPosition(code.location);
          } else {
            setQrData(null);
            setQrPosition(null);
          }
        }
      }
    };

    const interval = setInterval(scanQrCode, 500); // 0.5초마다 QR 코드 스캔 시도
    return () => clearInterval(interval);
  }, [webcamRef]);

  const drawRectangle = (context, location) => {
    context.beginPath();
    context.moveTo(location.topLeftCorner.x, location.topLeftCorner.y);
    context.lineTo(location.topRightCorner.x, location.topRightCorner.y);
    context.lineTo(location.bottomRightCorner.x, location.bottomRightCorner.y);
    context.lineTo(location.bottomLeftCorner.x, location.bottomLeftCorner.y);
    context.closePath();
    context.lineWidth = 4;
    context.strokeStyle = 'red';
    context.stroke();
  };

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="webcam"
      />
      {qrData && (
        <div className="qr-data">
          QR 코드가 인식되었습니다!
          <div className="qr-bubble" style={{ top: qrPosition.bottomRightCorner.y, left: qrPosition.bottomRightCorner.x }}>
            {qrData}
          </div>
        </div>
      )}
      <canvas
        ref={(el) => {
          if (el && qrPosition) {
            const context = el.getContext('2d');
            drawRectangle(context, qrPosition);
          }
        }}
        width={webcamRef.current ? webcamRef.current.video.videoWidth : 0}
        height={webcamRef.current ? webcamRef.current.video.videoHeight : 0}
        className="overlay"
      />
    </div>
  );
};

export default WebcamComponent;