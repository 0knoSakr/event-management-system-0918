// /src/pages/DetailPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "../App.css";

const DetailPage = () => {
  const [customer, setCustomer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await api.get(`/${id}`);
        setCustomer(response.data);
      } catch (error) {
        console.error("顧客情報の取得に失敗しました", error);
      }
    };
    fetchCustomer();
  }, [id]);

  if (!customer) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>顧客詳細情報</h1>
      <p>会社名:{customer.companyName}</p>
      <p>担当者名:{customer.contactPerson}</p>
      <p>メールアドレス:{customer.email}</p>
      <p>電話番号:{customer.phone}</p>
    </div>
  )
};
export default DetailPage;
