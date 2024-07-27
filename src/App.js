import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Portfolio from './pages/Portfolio';
import TheInfamousMachinePage from './pages/TheInfamousMachinePage';
import AutoMineSweeperPage from './pages/AutoMineSweeperPage';
import AquariumSimulatorPage from './pages/AquariumSimulatorPage';
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <Router>
      <HeaderBar/>
      <div className="container">
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/this" element={<TheInfamousMachinePage/>}/>
            <Route path="/paramines" element={<AutoMineSweeperPage/>}/>
            <Route path="/aquarium" element={<AquariumSimulatorPage/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
