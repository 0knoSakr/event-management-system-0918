import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    alert('Logged out successfully');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
