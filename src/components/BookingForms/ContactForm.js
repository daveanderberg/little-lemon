import { useState } from 'react';
import FormField from '../FormField';
import CheckBoxFormField from '../CheckBoxFormField';

function ContactForm({ formik }) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [isOkToText, setIsOkToText] = useState(false);
    
    return (
        <>
            <section>
                <h4>Reservation Details</h4>
                <div><label>Date:</label> {formik.values.date}</div>
                <div><label>Time:</label> {formik.values.time}</div>
                <div><label>Size of Party:</label> {formik.values.partySize}</div>
                <div><label>Occasion:</label> {formik.values.occasion}</div>
                <div><label>TableType:</label> {formik.values.tableType}</div>
                <div><label>Comments:</label> {formik.values.comments}</div>
            </section>
            <h3>Add contact information</h3>
            <FormField name="firstName" type="text" label="First Name" />
            <FormField name="lastName" type="text" label="Last Name" />
            <FormField name="email" type="email" label="Email" />
            <FormField name="phone" type="tel" label="Phone Number" />
            <CheckBoxFormField name="isOkToText" label="Is Okay to Text" />
        </>
    );
}

export default ContactForm;