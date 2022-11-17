import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { setToken } from '../features/userSlice';

export const Auth = () => {
  const token = useAppSelector((state) => state.user.token);

  console.log(token);

  const dispatch = useAppDispatch();

  return (
    <div>
      Authentication area
      <br />
      <Link to="/">Home</Link>
      <button onClick={() => dispatch(setToken('hello'))}>Set user</button>
    </div>
  );
};
