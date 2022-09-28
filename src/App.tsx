import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import Home from './Pages/General/Home';
import Overview from './Pages/Overview/Overview';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/dashboard/overview" replace />} />
      <Route path="/dashboard" element={<Home />} >
      <Route path="/dashboard" element={<Navigate to="/dashboard/overview" replace />} />

        <Route path="/dashboard/overview" element={<Overview />} />
        

      </Route>

    </Routes>
  );
}

export default App;
