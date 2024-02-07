import '../styles/forms.css'
import BookingForm from '../components/BookingForms/BookingForm';
import { fetchAPI, submitAPI } from '../utils/fakeAPI';
import { useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function BookingPage() {
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

  const onSubmit = (submittedFormData) => {
    if (submitAPI(submittedFormData)) {
      setFormData(submittedFormData);
    }
  }

  return (
    <>
      <header className="resBG">
        <div className="headerDiv" />
      </header>
      <main style={{minWidth: '900px'}}>
        <BookingForm
          submit={onSubmit}
          availableTimes={availableTimes}
          dispatch={availableTimesDispatch}
          setFormData={setFormData} />
      </main>
    </>
  );
}

export default BookingPage;