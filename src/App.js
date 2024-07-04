import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/page1';
import Greeting from './components/page2';
import './App.css';
function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/greeting" element={<Greeting />} />
        </Routes>
    </div>
</Router>
  );
}

export default App;
