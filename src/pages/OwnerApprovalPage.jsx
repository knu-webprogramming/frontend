import React from 'react';
import ApprovalItem from '../components/ApprovalItem';
import '../styles/OwnerApprovalPage.css';

const OwnerApprovalPage = () => {
  const items = [
    { id: 1, name: 'A 님 도장 찍기 신청', date: '2024 - 05 - 11 21:25' },
    { id: 2, name: 'B 님 도장 찍기 신청', date: '2024 - 05 - 11 21:25' },
    { id: 3, name: 'C 님 쿠폰 사용 신청', date: '2024 - 05 - 11 21:25' },
    { id: 4, name: 'D 님 도장 찍기 신청', date: '2024 - 05 - 11 21:25' },
  ];

  return (
    <div className="approve-page">
      <header>
        <button className="back-button" onClick={() => window.location.href = '/'}>
          <img src="../assets/sample.png" alt="back"/>
        </button>
        <h1>승인 대기</h1>
        <div className="notification">
          <img src="../assets/sample.png" alt="notification" />
          <span>4건</span>
        </div>
      </header>
      <main>
        {items.map(item => (
          <ApprovalItem key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
};

export default OwnerApprovalPage;