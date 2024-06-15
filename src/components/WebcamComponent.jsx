import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import '../styles/WebcamComponent.css';

const WebcamComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  }, [webcamRef, onCapture]);

  const videoConstraints = {
    facingMode: { exact: "environment" }
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
      <button className="capture-button" onClick={capture}>Capture photo</button>
    </div>
  );
};

export default WebcamComponent;