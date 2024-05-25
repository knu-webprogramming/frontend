import React from 'react';

const MapModal = ({ isOpen, onClose, placeName, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
      }}>
        <p>{`${placeName}을(를) 쿠폰함에 추가하시겠습니까?`}</p>
        <button onClick={onConfirm} style={{ marginRight: '10px' }}>확인</button>
        <button onClick={onClose}>취소</button>
      </div>
    </div>
  );
};

export default MapModal;