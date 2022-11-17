import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
//import { setToken, authenticate } from '../../features/userSlice';
import './style.css';

export const Auth = () => {
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate('/');
  }, [token]);

  return (
    <div className="auth-container">
      <p>Authentication area</p>
      <Link to="/">Home</Link>
    </div>
  );
};

//<button onClick={() => dispatch(setToken('hello'))}>Set user</button>
//<button
//onClick={() =>
//dispatch(authenticate({ username: 'admin', password: 'admin' }))
//}
//>
//Authenticate
//</button>
