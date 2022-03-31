import Login from './components/Login';
import Home from './pages/Home';
import Travel from './pages/Travel';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Food from './pages/Food';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Travel" element={<Travel />} />
      <Route path='/Food' element={<Food />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Portfolio" element={<Portfolio />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
