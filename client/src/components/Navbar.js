import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navber = () => {
  return (
      <div>
        <header>
          <div>
            <nav>
            <ul>
                <li><Link to="/">ホーム</Link></li>
                <li><Link to="/login">ログイン</Link></li>
                <li><Link to="/signup">新規登録</Link></li>
                <li><Link to="/create-event">イベント作成</Link></li>
                <li><Link to="/event-list">イベントリスト</Link></li>
              </ul>
            </nav>
          </div>
        </header>

    </div>
  )
}

export default Navber;
