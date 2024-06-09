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
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000 // Ensure the modal is on top of other elements
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add some shadow for better visibility
        width: '300px', // Set a fixed width for the modal
      }}>
        <p>{`${placeName}을(를) 쿠폰함에 추가하시겠습니까?`}</p>
        <button onClick={onConfirm} style={{ marginRight: '10px', padding: '8px 16px' }}>확인</button>
        <button onClick={onClose} style={{ padding: '8px 16px' }}>취소</button>
      </div>
    </div>
  );
};

export default MapModal;