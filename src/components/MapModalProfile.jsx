import React from 'react';
import '../styles/MapModalProfile.css';

const MapModalProfile = ({ isOpen, onClose, placeName, address, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>아래 매장을 애플리케이션에 등록하시겠습니까?</p>
        <p><strong>매장명:</strong> {placeName}</p>
        <p><strong>주소:</strong> {address}</p>
        <div className="modal-buttons">
          <button className="confirm" onClick={() => {console.log('Confirm modal'); onConfirm();}}>확인</button>
          <button className="cancel" onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default MapModalProfile;