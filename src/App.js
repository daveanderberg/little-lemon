import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import BookingPage from "./pages/BookingPage";
import Cart from "./pages/Cart"
import './styles/styles.css'

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Start at top of page
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant", });
  }, [pathname]);

  return (
    <>
    <div>{true}</div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#about" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;