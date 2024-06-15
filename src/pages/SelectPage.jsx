import React from 'react';
import '../styles/SelectPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import storeImage from '../assets/store.png';
import customerImage from '../assets/customer.png';
import couponImage from '../assets/logo.png';

function SelectPage() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token);

  const handleStoreClick = async () => {
    try {
      const response = await axios.get('http://3.39.232.19:8080/shop', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200 && response.data) {
        navigate('/owner/main');
      } else {
        navigate('/owner/profile');
      }
    } catch (error) {
      console.error('Error fetching owner information:', error);
      navigate('/owner/profile');
    }
  };

  const handleCustomerClick = async () => {
    try {
      const response = await axios.get('http://3.39.232.19:8080/customer', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200 && response.data) {
        navigate('/customer/main');
      } else {
        navigate('/customer/profile');
      }
    } catch (error) {
      console.error('Error fetching owner information:', error);
      navigate('/customer/profile');
    }
  };

  return (
    <div className="select-container">
      <img src={couponImage} alt="Logo" className="logo" onClick={handleCustomerClick} />
      <div className="text">
        <p>어느 유형의 사용자이신가요?</p>
      </div>
      <div className="options">
        <div className="option" onClick={handleStoreClick}>
          <img src={storeImage} alt="Store" className="icon" />
          <div className="text">
            <p>점주</p>
          </div>
        </div>
        <div className="option" onClick={handleCustomerClick}>
          <img src={customerImage} alt="Customer" className="icon" />
          <div className="text">
            <p>고객</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPage;