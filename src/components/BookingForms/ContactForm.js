import FormField from './FormField';
import FieldData from './FieldData';
import CheckBoxFormField from './CheckBoxFormField';
import { standardTime } from '../../utils/utils';
import { useEffect } from 'react';

function ContactForm({ isCurrent = true, formik, values }) {
    useEffect(() => {
        formik.setTouched({});
    }, [])
    return (
        <>
            <div id="resDetails">
                <FieldData name="Date" value={new Date(values.date).toDateString()} />
                <FieldData name="Time" value={standardTime(values.time)} />
                <FieldData name="Party Size" value={values.partySize} />
                {values.occasion !== "None" && <FieldData name="Occasion" value={values.occasion} />}
                <FieldData name="Table Type" value={values.tableType} />
                {values.comments &&
                    <>
                        <div className='field'>Additional Comments</div>
                        <p>{values.comments}</p>
                    </>}
            </div>
            <FormField autoFocus name="firstName" type="text" label="First Name" disabled={!isCurrent} />
            <FormField name="lastName" type="text" label="Last Name" disabled={!isCurrent} />
            <FormField name="email" type="email" label="Email" disabled={!isCurrent} />
            <FormField name="phone" type="tel" label="Phone Number" disabled={!isCurrent} />
            <CheckBoxFormField name="isOkToText" label="Is Okay to Text" disabled={!isCurrent || values.phone === '' || formik.errors.phone} />
        </>
    );
}

export default ContactForm;