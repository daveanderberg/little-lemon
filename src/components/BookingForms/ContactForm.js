import FormField from './FormField';
import FieldData from './FieldData';
import CheckBoxFormField from './CheckBoxFormField';
import { standardTime } from '../../utils/utils';

function ContactForm({ isCurrent = true, formik }) {
    return (
        <>
            <div id="resDetails">
                <FieldData name="Date" value={new Date(formik.date).toDateString()} />
                <FieldData name="Time" value={standardTime(formik.time)} />
                <FieldData name="Party Size" value={formik.partySize} />
                {formik.occasion !== "None" &&<FieldData name="Occasion" value={formik.occasion} />}
                <FieldData name="Table Type" value={formik.tableType} />
                {formik.comments &&
                    <>
                        <div className='field'>Additional Comments</div>
                        <p>{formik.comments}</p>
                    </>}
            </div>
            <FormField autoFocus name="firstName" type="text" label="First Name" disabled={!isCurrent} />
            <FormField name="lastName" type="text" label="Last Name" disabled={!isCurrent} />
            <FormField name="email" type="email" label="Email" disabled={!isCurrent} />
            <FormField name="phone" type="tel" label="Phone Number" disabled={!isCurrent} />
            <CheckBoxFormField name="isOkToText" label="Is Okay to Text" disabled={!isCurrent} />
        </>
    );
}

export default ContactForm;