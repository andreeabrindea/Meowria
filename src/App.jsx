import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import About from './components/About/About';
import Account from './components/account/Account';
import FindClinics from './components/clinics/FindClinics';

function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />} />
      <Route path="/emergency" element={<FindClinics />} />
    </Routes>
  </Router>
    </>
  )
}

export default App
