import { useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from './utils/fakeAPI';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import ConfirmedBooking from "./pages/ConfirmedBooking";
import './styles/styles.css'

function App() {
  const navigate = useNavigate();

  const updateTimes = (state, action) => {
      if (action.type === 'dateChanged') {
          return action.newTimes;
      }
      return state;
  }

  const initializeTimes = () => {
      return fetchAPI(new Date());
  }

  const onSubmit = () => {
      //using spoofed "api" since actual api.js is missing.
      if (submitAPI(formData)) {
          navigate('/confirmedbooking');
        }
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [formData, setFormData] = useState();

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#about" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch} onSubmit={onSubmit} setFormData={setFormData} />} />
        <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;