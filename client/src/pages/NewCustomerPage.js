import React, { useState } from "react";
import api from "../services/api";
import CustomerForm from "../components/CustomerForm";

const NewCustomerPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/customers', formData);
      alert('顧客が追加されました');
      window.location.href = '/customers';
    } catch (error) {
      console.error('エラー:', error);
    }
  };

  return (
    <div>
      <h1>新規顧客登録</h1>
      <CustomerForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default NewCustomerPage;
