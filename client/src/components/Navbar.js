import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // ログイン状態のチェック
  useEffect(() => {
    axios
      .get("http://localhost:5000/check-login", { withCredentials: true })
      .then((response) => {
        if (response.data.loggedIn) {
          setLoggedIn(true);
          setUsername(response.data.username);
        }
      })
      .catch((error) => {
        console.log("Not logged in");
      });
  }, []);
  return (
    <div>
      <header>
        <div>
          <nav>
            <ul className="user-info">
              <li>
                <Link to="/">ホーム</Link>
              </li>
              <li>
                <Link to="/login">ログイン</Link>
              </li>
              <li>
                <Link to="/signup">新規登録</Link>
              </li>
              <li>
                <Link to="/create-event">イベント作成</Link>
              </li>
              <li>
                <Link to="/event-list">イベントリスト</Link>
              </li>
              {loggedIn ? <li>Welcome, {username}</li> : <li>Login</li>}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
