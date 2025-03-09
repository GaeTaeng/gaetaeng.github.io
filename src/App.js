import React from 'react';
import './App.css';
import Home from './components/Home';
import LNB from './components/LNB';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <LNB />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
              {/* 다른 경로를 추가할 수 있습니다 */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
