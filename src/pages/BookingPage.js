import '../styles/forms.css'
import BookingForm from '../components/BookingForms/BookingForm';
import { fetchAPI, submitAPI } from '../utils/fakeAPI';
import { useReducer } from 'react';

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

  const onSubmit = async (submittedFormData) => {
    const result = await submitAPI(submittedFormData);
    if (result) {
      return true;
    }
    return false;
  }

  return (
    <>
      <header>
        <div className="headerDiv resHeader">
          <div>
            <h2>Book a Reservation</h2>
          </div>
        </div>
      </header>
      <main style={{ minWidth: '900px' }}>
        <BookingForm
          submit={onSubmit}
          availableTimes={availableTimes}
          dispatch={availableTimesDispatch} />
      </main>
    </>
  );
}

export default BookingPage;