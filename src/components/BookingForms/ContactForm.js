import FormField from './FormField';
import CheckBoxFormField from './CheckBoxFormField';

function ContactForm({ isCurrent = true }) {
    return (
        <>
            <FormField name="firstName" type="text" label="First Name" disabled={!isCurrent} />
            <FormField name="lastName" type="text" label="Last Name" disabled={!isCurrent} />
            <FormField name="email" type="email" label="Email" disabled={!isCurrent} />
            <FormField name="phone" type="tel" label="Phone Number" disabled={!isCurrent} />
            <CheckBoxFormField name="isOkToText" label="Is Okay to Text" disabled={!isCurrent} />
        </>
    );
}

export default ContactForm;