// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AcademicFoundation from './components/AcademicFoundation';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/academic" element={<AcademicFoundation />} />
        {/* Add more routes as we create pages */}
      </Routes>
    </Router>
  );
}

export default App;