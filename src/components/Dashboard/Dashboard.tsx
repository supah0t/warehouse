import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';

import { Sidebar } from '../Sidebar/Sidebar';

import './style.css';

export const Dashboard = () => {
  //state variable would be used to conditionally
  //render appropriate component in the main-area
  const [sidebarItem, setSidebarItem] = useState('');
  const token = useAppSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/auth');
  }, [token]);

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <Sidebar currentItem={sidebarItem} setCurrentItem={setSidebarItem} />
      </div>
      <div className="main-area">
        <Link to="/auth">Authentication</Link>
      </div>
    </div>
  );
};
