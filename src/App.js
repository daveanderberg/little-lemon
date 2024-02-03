import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import BookingPage from "./pages/BookingPage";
import './styles/styles.css'

window.onbeforeunload = () => {
  localStorage.clear();
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#about" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;