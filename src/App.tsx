import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { Dashboard } from './components/Dashboard/Dashboard';
import { Auth } from './components/Authentication/Authentication';

import './style.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
