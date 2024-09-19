import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const Navber = () => {
  return (
      <div>
        <header>
          <div>
            <nav>
              <ul>
                <li><Link to="/">ログイン</Link></li>
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
