import { Routes, Route } from 'react-router-dom';

import { Dashboard } from './components/Dashboard';
import { Auth } from './components/Authentication';

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
