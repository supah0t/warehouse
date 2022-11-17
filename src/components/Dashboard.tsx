import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
      Dashboard area
      <br />
      <Link to="/auth">Authentication</Link>
    </div>
  );
};
