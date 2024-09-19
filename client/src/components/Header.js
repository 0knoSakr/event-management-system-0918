import React from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <header className="headerStyle">
        <h1><Link to="/">イベント管理システム</Link></h1>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
