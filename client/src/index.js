import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client' からインポート
import App from './App';

// React 18 での新しいAPIを使って、Appコンポーネントをルート要素にレンダリング
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
