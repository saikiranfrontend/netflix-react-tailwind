import React from 'react';
import { useHistory } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const {user} = UserAuth()
    const history= useHistory()

  if (!user) {
    return <div>{history.push('/')}</div>
  } else {
    return children;
  }
};

export default ProtectedRoute;