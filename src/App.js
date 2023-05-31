import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HotMemes from './components/HotMemes';
import RegularMemes from './components/RegularMemes';
import MemeForm from './components/MemeForm';
import './App.css';

const App = () => {
  const [memes, setMemes] = useState([]);

  const handleAddMeme = (newMeme) => {
    setMemes((prevMemes) => [...prevMemes, newMeme]);
  };

  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Main Page</Link>
          </li>
          <li className="nav-item">
            <Link to="/hot" className="nav-link">Hot Memes</Link>
          </li>
          <li className="nav-item">
            <Link to="/regular" className="nav-link">Regular Memes</Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">Add Memes</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="/hot" element={<HotMemes memes={memes} />} />
          <Route path="/regular" element={<RegularMemes memes={memes} />} />
          <Route path="/add" element={<MemeForm onAddMeme={handleAddMeme} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
