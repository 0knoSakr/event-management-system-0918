import React from 'react';
import { Link } from 'react-router-dom';

const CustomerCard = ({ customer }) => {
  return (
    <div className="customer-card">
      <h3>{customer.companyName}</h3>
      <p>担当者:{customer.contactPerson}</p>
      <p>メールアドレス :{customer.email}</p>
      <Link to={`/${customer.id}`}>詳細</Link>
      <Link to={`/edit/${customer.id}`}>編集</Link>
    </div>
  );
};

export default CustomerCard;
