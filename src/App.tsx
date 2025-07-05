import { Routes, Route, NavLink } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
          Login
        </NavLink>
        <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Register
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
