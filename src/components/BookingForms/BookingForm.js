import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { fetchAPI } from '../../utils/fakeAPI.js';
import { Formik, Form } from 'formik';
import { CSSTransition } from  'react-transition-group';
import BookingInfo from './BookingInfo.js';
import ContactForm from './ContactForm.js';
import ConfirmedBooking from './ConfirmedBooking.js'
import Spinner from '../Spinner.js';

function BookingForm({ availableTimes, dispatch, submit }) {
    const [date, setDate] = useState(new Date());
    const [page, setPage] = useState(0);
    const [isContactIn, setIsContactIn] = useState(false);
    const [wasSubmitSucessful, setWasSubmitSuccessful] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState();

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

    // used to trigger section transistions.
    useEffect(() => {
        if (page === 1) {
            setIsContactIn(true);
        } else setIsContactIn(false);
    }, [page, setIsContactIn])

    const handleSubmit = async (values) => {
        if (page < 1) {
            setPage(page + 1);
        } else {
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
                isOkToText: values.isOkToText,
            }
            setIsSubmitting(true);
            const result = await submit(formData)
            if (result) {
                setFormData(formData);
                setWasSubmitSuccessful(result);
            }
            setPage(page + 1);
        }
    }

    const dateChanged = (e) => setDate(e.target.value);
    const backClick = (e) => setPage(page > 0 ? page - 1 : 0);

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
                    <Form className='formStyle'>
                        {page !== 2 &&<>
                            <div style={{display: 'grid', gridTemplate: '1fr / 1fr', alignItems: 'stretch', justifyItems: 'center'}}>
                                <CSSTransition in={isContactIn} timeout={300} classNames="animLeft">
                                    <div className={page === 0 ? "subForm" : "subForm disabled"} style={{gridColumn: '1 / 1', gridRow: '1 / 1'}}>
                                        <h3>Reservation Details</h3>
                                        <BookingInfo
                                            availableTimes={availableTimes}
                                            dateChanged={dateChanged}
                                            occasions={occasions}
                                            tableTypes={tableTypes}
                                            isCurrent={page === 0} />
                                    </div>
                                </CSSTransition>
                                <CSSTransition in={isContactIn} timeout={300} classNames="animRight" unmountOnExit>
                                    <div className={`subForm ${page !== 1 ? "disabled" : ""}`} style={{gridColumn: '1 / 1', gridRow: '1 / 1', zIndex: '10'}}>
                                        <span className='formHeader'>
                                            <button className="backButton" type="button" title='Go back' onClick={backClick} disabled={page !== 1}>&lt;</button>
                                            <h3>Contact Details</h3>
                                        </span>
                                        <ContactForm isCurrent={page === 1} />
                                    </div>
                                </CSSTransition>
                            </div>
                            <button className="yellowButton centered" style={{width: '300px'}} disabled={!(page < 2 && formik.dirty && formik.isValid) || isSubmitting}>
                                {page === 1 ? "Submit Reservation" : "Next"}
                            </button>{isSubmitting && <Spinner />}
                        </>}
                        {page === 2 && <ConfirmedBooking data={formData} wasSubmitSucessful={wasSubmitSucessful} />}
                    </Form>
                )
            }}
        </Formik>
    );
}

export default BookingForm;