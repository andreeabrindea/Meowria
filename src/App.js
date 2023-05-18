
import './App.css';
import Home from './home/Home';
import About from './about/About';
import FindClinics from './findClinics/FindClinics';
import Login from './login/Login';
import Register from './register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clinics" element={<FindClinics />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  </Router>
  );
}

export default App;
