import React from 'react';
import '../styles/MapModal.css';

const MapModal = ({ isOpen, onClose, placeName, address, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>아래 매장을 쿠폰함에 추가하시겠습니까?</p>
        <p><strong>매장명:</strong> {placeName}</p>
        <p><strong>주소:</strong> {address}</p>
        <div className="modal-buttons">
          <button className="confirm" onClick={onConfirm}>
            확인
          </button>
          <button className="cancel" onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapModal;