import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import SellerBuyer from './pages/SellerBuyer';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/sellerdash" element={<SellerDashboard/>}/>
        <Route path="/buyerdash" element={<BuyerDashboard/>}/>
        <Route path="/who_are_you" element={<SellerBuyer/>}/>
      </Routes>
    </Router>
  )
}

export default App

