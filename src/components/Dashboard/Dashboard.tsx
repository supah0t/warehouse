import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';

import { Sidebar } from '../Sidebar/Sidebar';
import { Topbar } from '../Topbar/Topbar';

import './style.css';

export const Dashboard = () => {
  //state variable would be used to conditionally
  //render appropriate component in the content-area
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
        <div className="topbar">
          <Topbar currentItem={sidebarItem} />
        </div>
        <div className="content-area">
          <p>{sidebarItem}</p>
        </div>
      </div>
    </div>
  );
};
