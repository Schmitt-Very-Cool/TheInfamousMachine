import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Portfolio from './pages/Portfolio';
import TheNefariousMachinePage from './pages/TheNefariousMachinePage';
import AutoMineSweeperPage from './pages/AutoMineSweeperPage';
import AquariumSimulatorPage from './pages/AquariumSimulatorPage';
import SuperSandPage from './pages/SuperSandPage'
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
            <Route path="/this" element={<TheNefariousMachinePage/>}/>
            <Route path="/paramines" element={<AutoMineSweeperPage/>}/>
            <Route path="/aquarium" element={<AquariumSimulatorPage/>}/>
            <Route path="/supersand" element={<SuperSandPage/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
