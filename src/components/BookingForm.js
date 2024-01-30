import { useEffect, useState, useRef } from 'react';
import { fetchAPI } from '../utils/fakeAPI.js';

function BookingForm( {availableTimes, dispatch, onSubmit, setFormData}) {
    
    const initialOccasions = ['Birthday', 'Engagement', 'Anniversary'];

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [partySize, setPartySize] = useState(0);
    const [occasion, setOccasion] = useState("");

    const timePickerRef = useRef();

    const timesOptionsList = availableTimes.map((time) => {
        return <option key={time}>{time}</option>;
    });

    const occasionsList = initialOccasions.map((occasion) => {
        return <option key={occasion}>{occasion}</option>
    });

    useEffect(() => {
        const fetchTimes = (newDate) => {
            // using spoofed api since real one is not up
            let newTimes = fetchAPI(new Date(newDate));
            dispatch({ type: 'dateChanged', newTimes: newTimes});

            /* fetchAPI(newDate)
            .then((response) => response.Json())
            .then((jsonData) => {
                console.log(jsonData);
            })
            .catch((error) => console.log(error));*/
        }

        fetchTimes(date);

        if (timePickerRef != null && timePickerRef.current.options.length > 0) {
            setTime(timePickerRef.current.options[0]);
        }
    }, [date, dispatch]);

    const formStyle = {
        display: 'grid',
        maxWidth: '200px',
        gap: '20px'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //onSubmit();
        onSubmit({date: date, time: time, partySize: partySize, occasion: occasion});
    }

    const dateChanged = (e) => {
        setDate(e.target.value);
    }

    return (
        <>
            <h3>Book Now</h3>

            <form style={formStyle} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={dateChanged} min={new Date().toJSON().slice(0, 10)} required />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" ref={timePickerRef} value={time} onChange={(e) => setTime(e.target.value)} required>
                    {timesOptionsList}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={partySize} onChange={(e) => setPartySize(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    {occasionsList}
                </select>
                <input data-testid='submitButton' type="submit" value="Make Your reservation" />
            </form>
        </>
    );
}

export default BookingForm;