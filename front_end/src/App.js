import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Rules from './components/pages/Rules';
import AssetPerStop from './components/pages/AssetPerStop';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/assetPerStop' element={<AssetPerStop />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
