import React, { useEffect, useState } from "react";
import CustomerCard from "../components/CustomerCard";
import api from "../services/api";

const ListPage = () => {
  const [customers, setCustomers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await api.get("/customers");
        setCustomers(response.data);
      } catch (error) {
        console.error("データの取得に失敗しました", error);
      }
    };
    fetchCustomers();
  }, []);

  useEffect(() => {
    const sortedCustomers = customers.sort((a, b) => {
      const comparison = b.email.localeCompare(a.email);
      return sortOrder === "asc" ? comparison : -comparison;
    });
    setCustomers(sortedCustomers);
  }, [sortOrder, customers]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };


  return (
    <div>
      <h1>顧客一覧</h1>
      <input type="text" />
      <select value={sortOrder} onChange={handleSortChange}>
        <option value="asc">昇順</option>
        <option value="desc">降順</option>
      </select>
      {customers.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
      <button onClick={() => (window.location.href = "/customers/new")}>
        新規登録
      </button>
    </div>
  );
};

export default ListPage;
