import React from 'react';
import '../styles/SelectPage.css';
import storeImage from '../assets/sample.png';
import customerImage from '../assets/sample.png';
import logoImage from '../assets/sample.png';

function SelectPage() {
  const handleStoreClick = () => {
    window.location.href = '/';
  };

  const handleCustomerClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="container">
      <div className="header">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <div>
      <p>어느 유형의 사용자이신가요?</p>
      </div>
      <div className="options">
        <div className="option" onClick={handleStoreClick}>
          <img src={storeImage} alt="Store" className="icon" />
          <p>점주</p>
        </div>
        <div className="option" onClick={handleCustomerClick}>
          <img src={customerImage} alt="Customer" className="icon" />
          <p>고객</p>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;