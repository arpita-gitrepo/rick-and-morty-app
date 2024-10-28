// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="*" element={<Navigate to="/characters" />} />
        <Route path="/characters" element={<Characters searchTerm={searchTerm} />} />
        <Route path="/episodes" element={<Episodes searchTerm={searchTerm} />} />
        <Route path="/locations" element={<Locations searchTerm={searchTerm} />} />
      </Routes>
    </Router>
  );
};

export default App;
