
import BookingForm from '../components/BookingForm';


function Reservations({onSubmit, availableTimes, dispatch, setFormData}) {
    

    return (
        <main>
            <BookingForm onSubmit={onSubmit} availableTimes={availableTimes} dispatch={dispatch} setFormData={setFormData} />
        </main>
    );
}

export default Reservations;