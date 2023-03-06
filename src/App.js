
import './App.css';
import Home from './home/Home';
import About from './about/About';
import FindClinics from './findClinics/FindClinics';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/findClinics" element={<FindClinics />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;
