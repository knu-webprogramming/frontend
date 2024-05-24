import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import arrow from '../assets/sample.png';

function Header({ title }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="header-container">
      <img src={arrow} alt="back" className="back-arrow" onClick={handleBack} />
      <div className="title">{title}</div>
    </div>
  );
}

export default Header;