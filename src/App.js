import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js'
import Home from './screens/Home.js';
import Login from './screens/Login.js';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
