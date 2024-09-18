import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from '../App.css'

const HeaderList = () => {
  const wrap = {
    style: {
      maxWidth: "1100px",
      margin: "0 auto",
    },
  };

  return (
    <div  style={wrap.style}>
      <nav>
        <ul>
          <li><Link to="/">顧客一覧</Link></li>
          <li><Link to="/new">新規登録</Link></li>
          <li><Link to="/edit/:id">顧客詳細</Link></li>
          <li><Link to="/:id">登録編集</Link></li>
        </ul>
      </nav>
      <Outlet />{" "}
    </div>
  );
};

export default HeaderList;
