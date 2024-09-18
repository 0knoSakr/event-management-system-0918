import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import CreateEventPage from '../pages/CreateEventPage';
import EventListPage from '../pages/EventListPage';

const Navber = () => {
  return (
    <Router>
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

        <div>
          <Routes>
            <Route path="/" element={ <LoginPage />} />
            <Route path="/signup" element={ <SignupPage/>}/>
            <Route path="/create-event" element={ <CreateEventPage/> } />
            <Route path="/event-list" element={ <EventListPage/> } />
          </Routes>
        </div>
    </div>
  </Router>
  )
}

export default Navber;
