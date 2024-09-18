// /src/pages/EditCustomerPage.js
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import api from '../services/api';
import CustomerForm from "../components/CustomerForm";

const EditCustomerPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: ''
  });
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await api.get(`/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('データ取得エラー:', error);
      }
    };
    fetchCustomer();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/customers/${id}`, formData);
      alert("顧客情報が更新されました");
      window.location.href = '/';
    } catch (error) {
      console.error('エラー:', error);
    }
  };
  return (
    <div>
      <h1>顧客情報編集</h1>
      <CustomerForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
};

export default EditCustomerPage;
