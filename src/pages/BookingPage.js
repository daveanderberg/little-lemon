import '../styles/forms.css'
import BookingForm from '../components/BookingForms/BookingForm';
import { fetchAPI, submitAPI } from '../utils/fakeAPI';
import { useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import headerImage from '../assets/restaurant.jpg';

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

  const imgStyle = {
    //borderRadius: "16px",
    height: '116px',
    width: '100%',
    objectFit: 'cover',
    margin: '0',
  }

  return (
    <>
      <header>
        <div className="headerDiv resHeader">
          <div>
            <h2>Book a Reservation</h2>
            {/*<p>Please select from the options below to reserve a table.</p>*/}
          </div>
          {/*<div style={{height: 'auto', margin: '0', backgroundImage: `url(${headerImage})`}}>
             <img src={headerImage} style={imgStyle} alt="restaurant seating" /> 
          </div>*/}
        </div>
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