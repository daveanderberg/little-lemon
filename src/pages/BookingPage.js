import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../utils/fakeAPI';
import { useNavigate } from 'react-router-dom';
import { useReducer, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function BookingPage() {
  //const navigate = useNavigate();

  const updateTimes = (state, action) => {
    if (action.type === 'dateChanged') {
      return action.newTimes;
    }
    return state;
  }

  const initializeTimes = () => {
    return fetchAPI(new Date());
  }

  const [availableTimes, availableTimesDispatch] = useReducer(updateTimes, initializeTimes());
  const [formData, setFormData] = useLocalStorage("formData", null);
  const [page, setPage] = useState(0);

  const onSubmit = (submittedFormData) => {
    if (submitAPI(submittedFormData)) {
      setFormData(submittedFormData);
    }
  }

  const backClick = (e) => {
    setPage(page > 0 ? page - 1 : 0);
  }

  return (
    <>
      <header className="resBG">
        <div className="headerDiv">
          <button className="backButton" title='Go back' onClick={backClick} disabled={page !== 1}>&lt;</button>
        </div>
      </header>
      <main>
        <h3>Reserve a Table</h3>
        <BookingForm
          submit={onSubmit}
          availableTimes={availableTimes}
          dispatch={availableTimesDispatch}
          setFormData={setFormData}
          page={page}
          setPage={setPage} />
      </main>
    </>
  );
}

export default BookingPage;