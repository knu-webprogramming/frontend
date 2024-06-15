import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import '../styles/WebcamComponent.css'; // 추가된 부분

const WebcamComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc); // 사진을 찍고 부모 컴포넌트로 전달
  }, [webcamRef, onCapture]);

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam"
      />
      <button className="capture-button" onClick={capture}>Capture photo</button>
    </div>
  );
};

export default WebcamComponent;