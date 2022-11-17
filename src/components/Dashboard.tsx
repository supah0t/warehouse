import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
      Dashboard area
      <Link to="/auth">Home</Link>
    </div>
  );
};
