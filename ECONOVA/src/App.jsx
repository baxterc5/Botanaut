import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Planet from './pages/Planet';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-green-900 text-white font-sans">
        <nav className="flex items-center justify-between p-4 bg-purple-800 shadow-md">
          <h1 className="text-2xl font-bold text-green-300">🌱 Botanaut</h1>
          <ul className="flex gap-4">
            <li><Link to="/" className="hover:text-green-300">Home</Link></li>
            <li><Link to="/planet" className="hover:text-green-300">Planet</Link></li>
          </ul>
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planet" element={<Planet />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
