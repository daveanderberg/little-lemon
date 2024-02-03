import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { fetchAPI } from '../../utils/fakeAPI.js';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import BookingInfo from './BookingInfo.js';
import ContactForm from './ContactForm.js';
import ConfirmedBooking from './ConfirmedBooking.js'

const FormHeader = ({page}) => {
    let formHeader = "Reservation Details";
    if (page === 1)
        formHeader = "Contact Details";
    else if (page === 2)
        formHeader = "Reservation Confirmation";

    return (<h2>{formHeader}</h2>);
}

const SubmitButton = ({page, formik}) => {
    let submitText = page === 1 ? "Submit Reservation" : "Next";

    return (<button className="yellowButton" disabled={!(formik.dirty && formik.isValid)}>{submitText}</button>);
}

function BookingForm({ availableTimes, dispatch, submit }) {
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const [page, setPage] = useState(0);

    const occasions = ['None', 'Birthday', 'Engagement', 'Anniversary', 'Other'];
    const tableTypes = ['Indoor', 'Booth', 'Outside'];
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const infoSchema = Yup.object().shape({
        date: Yup.date().min(new Date(), "Cannot book a reservation before today.").required("Required"), //.toJSON().slice(0, 10)
        time: Yup.string().required("Required").notOneOf([availableTimes[0]], "Please select a time from the list."),
        partySize: Yup.number().min(1, "You must have at least 1 person in the party.").max(10, "You cannot have more than 10 people in a party.").required("Required"),
        occasion: Yup.string().oneOf([...occasions]).required("Required"),
    });

    const contactSchema = Yup.object().shape({
        firstName: Yup.string().required("Required").min(2, "First Name must be at least 2 characters."),
        lastName: Yup.string().required("Required").min(2, "Last Name must be at least 2 characters."),
        email: Yup.string().email("Invalid email.").required("Required"),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    });

    useEffect(() => {
        const fetchTimes = (newDate) => {
            // using spoofed api since real one is not up
            let newTimes = fetchAPI(new Date(newDate));
            dispatch({ type: 'dateChanged', newTimes: newTimes });
        }

        fetchTimes(date);
    }, [date, dispatch]);

    const handleSubmit = (values) => {
        if (page < 2)
            setPage(page + 1);
        
        else {
            const formData = {
                date: values.date,
                time: values.time,
                partySize: values.partySize,
                occasion: values.occasion,
                tableType: values.tableType,
                comments: values.comments,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phone: values.phone,
            }
            submit(formData);
        }
    }

    const dateChanged = (e) => {
        setDate(e.target.value);
    }

    const backClick = (e) => {
        setPage(page > 0 ? page - 1 : 0);
    }

    return (
        <Formik
            initialValues={{
                date: '',
                time: '',
                partySize: 1,
                occasion: occasions[0],
                tableType: tableTypes[0],
                comments: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                isOkToText: false,
            }}
            validationSchema={page === 0 ? infoSchema : contactSchema}
            onSubmit={handleSubmit}>
            {(formik) => {
                return (
                    <>
                        <span className='formHeader'>
                            <button className="backButton" title='Go back' onClick={backClick} disabled={page !== 1}>&lt;</button>
                            <FormHeader page={page} />
                        </span>
                        <Form className='formStyle'>
                            {page === 0 && <BookingInfo availableTimes={availableTimes} dateChanged={dateChanged} occasions={occasions} tableTypes={tableTypes} />}
                            {page === 1 && <ContactForm formik={formik} />}
                            {page === 2 && <ConfirmedBooking formik={formik} />}
                            {page !== 2 && <SubmitButton page={page} formik={formik} />}
                            {page === 2 && <button className='yellowButton' type='button' onClick={() => navigate("/")}>Return to Home</button>}
                        </Form>
                    </>
                )
            }}
        </Formik>
    );
}

export default BookingForm;