import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';

export const Dashboard = () => {
  const token = useAppSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/auth');
  }, [token]);

  return (
    <div>
      Dashboard area
      <br />
      <Link to="/auth">Authentication</Link>
    </div>
  );
};
