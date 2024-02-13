import { useNavigate } from 'react-router-dom';
import { standardTime } from '../../utils/utils';
import { HashLink } from "react-router-hash-link";
import FieldData from './FieldData';
import restImage from '../../assets/restaurant.jpg'

function ConfirmedBooking({data, wasSubmitSucessful}) {
    const navigate = useNavigate();

    const imgStyle = {
        gridArea: 'image',
        borderRadius: '16px',
        marginLeft: '20px',
    }

    return (
        <div className='subForm centered'>
            {wasSubmitSucessful && data ? (
                <>
                    <h3>Reservation Booked!</h3>
                    <section className="resConfirmDetails">
                        <div style={{minWidth: '360px'}}>
                            <h3 style={{color: '#efefef', margin: '0 0 0.7rem 0'}}>Reservation Details</h3>
                            <FieldData name="Name" value={`${data.firstName} ${data.lastName}`} />
                            <FieldData name="Email" value={data.email} />
                            {data.phone && <FieldData name="Phone Number" value={data.phone} />}
                            <FieldData name="Date" value={new Date(data.date).toDateString()} />
                            <FieldData name="Time" value={standardTime(data.time)} />
                            <FieldData name="Party Size" value={data.partySize} />
                            {data.occasion !== "None" &&<FieldData name="Occasion" value={data.occasion} />}
                            <FieldData name="Table Type" value={data.tableType} />
                            <FieldData name="Ok to Receive Texts" value={data.isOkToText ? "Yes" : "No"} />
                            {data.comments &&
                                <>
                                    <div className='field'>Additional Comments</div>
                                    <p>{data.comments}</p>
                                </>}
                        </div>
                        <img id="confirmResImage" src={restImage} alt="tables at Little Lemon" style={imgStyle} />
                    </section>
                </>) :
                <>
                    <h3>There was an error</h3>
                    <p>Unfortunately there was an error submitting your reservation.</p>
                    <p>Please try again at a later time.</p>
                </>
            }
            <button className='yellowButton' style={{width: '300px', margin: '0 auto'}} type='button' onClick={() => navigate("/")}>Return to Home</button>
        </div>
    )
}

export default ConfirmedBooking;