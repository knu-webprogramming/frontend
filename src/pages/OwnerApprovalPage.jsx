import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApprovalItem from '../components/ApprovalItem';
import '../styles/OwnerApprovalPage.css';
import notificationImage from '../assets/notification.png';
import backImage from '../assets/back.png';


const OwnerApprovalPage = () => {
  const items = [
    { id: 1, name: 'A 님 도장 찍기 신청', date: '2024 - 05 - 11 21:25' },
    { id: 2, name: 'B 님 도장 찍기 신청', date: '2024 - 05 - 11 21:25' },
    { id: 3, name: 'C 님 쿠폰 사용 신청', date: '2024 - 05 - 11 21:25' },
    { id: 4, name: 'D 님 도장 찍기 신청', date: '2024 - 05 - 11 21:25' },
  ];

  return (
    <div className="approval-page">
      <div className="header">
        <img src = {backImage} className="back-icon" onClick={() => window.location.href = '/owner/main'}/>
        <h1 className="title">승인대기</h1>
      </div>
              <div className="notification">
          <img src={notificationImage} alt="notification" />
          <span>4건</span>
        </div>
      <main>
        {items.map(item => (
          <ApprovalItem key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
};

export default OwnerApprovalPage;