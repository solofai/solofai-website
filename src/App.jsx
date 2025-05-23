// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AcademicFoundation from './components/AcademicFoundation';
import MLEngineering from './components/MLEngineering';
import BiometricsResearch from './components/BiometricsResearch';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/academic" element={<AcademicFoundation />} />
        <Route path="/engineering" element={<MLEngineering />} />
        <Route path="/research" element={<BiometricsResearch />} />
        {/* Add more routes as we create pages */}
      </Routes>
    </Router>
  );
}

export default App;