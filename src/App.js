import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js'
import Home from './screens/Home.js';
import Login from './screens/Login.js';

function App() {
  const location = useLocation()
  return (
    <div className="container">
      {location.pathname === '/' && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
