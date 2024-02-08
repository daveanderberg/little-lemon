import { useNavigate } from 'react-router-dom';

function ConfirmedBooking({formik}) {
    const navigate = useNavigate();
    return (
        <div className='subForm centered'>
            <p>Your reservation has been confirmed!</p>
            <button className='yellowButton' type='button' onClick={() => navigate("/")}>Return to Home</button>
        </div>
    )
}

export default ConfirmedBooking;