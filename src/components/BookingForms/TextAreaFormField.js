import { useField } from "formik";

function TextAreaFormField({label, ...props}) {
    const [field, meta] = useField(props);
    
    return (
        <div className="formField">
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea {...field} {...props}></textarea>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </div>
    );
}

export default TextAreaFormField;