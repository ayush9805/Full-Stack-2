import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProfileInfo from './Profile';
import Skills from './Skills';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/info" />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="info" element={<ProfileInfo />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;