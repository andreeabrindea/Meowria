
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import FindClinics from './pages/findClinics/FindClinics';
import Login from './pages/login/Login';
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './pages/account/Account';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clinics" element={<FindClinics />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/account" element={<Account/>} />
    </Routes>
  </Router>
  );
}

export default App;
