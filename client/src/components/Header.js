import React from "react";
import Navbar from "./Navbar";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <heder className="headerStyle">
        <h1>イベント管理システム</h1>
        <Navbar />
      </heder>
    </>
  );
};

export default Header;
