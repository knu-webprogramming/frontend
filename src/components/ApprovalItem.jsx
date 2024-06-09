import React from 'react';
import '../styles/ApprovalItem.css';
import userIcon from '../assets/sample.png';
import approveIcon from '../assets/approve.png';
import rejectIcon from '../assets/reject.png';

const ApprovalItem = ({ item }) => {
  return (
    <div className="approval-item">
      <img src={userIcon} alt="user" className="user-icon" />
      <div className="item-details">
        <span className="date">{item.date}</span>
        <span className="description">{item.name}</span>
      </div>
      <div className="action-buttons">
        <button onClick={() => window.location.href = '/'} className="approve-button">
          <img src={approveIcon} alt="approve"/>
        </button>
        <button onClick={() => window.location.href = '/'} className="reject-button">
          <img src={rejectIcon} alt="reject"/>
        </button>
      </div>
    </div>
  );
};

export default ApprovalItem;