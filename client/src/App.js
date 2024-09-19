// /src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CreateEventPage from "./pages/CreateEventPage";
import EventListPage from "./pages/EventListPage";
import Header from "./components/Header";
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/create-event" element={<CreateEventPage />} />
          <Route path="/event-list" element={<EventListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
