// /src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import NewCustomerPage from './pages/NewCustomerPage';
import EditCustomerPage from './pages/EditCustomerPage';
import DetailPage from './pages/DetailPage';
import Header from './pages/header';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/new" element={<NewCustomerPage />} />
          <Route path="/edit/:id" element={<EditCustomerPage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
};

export default App;
