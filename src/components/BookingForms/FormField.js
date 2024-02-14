import { useField } from "formik";

function FormField ({label, onValueChange, ...props}) {
    const [field, meta] = useField(props);
    const change = (e) => {
        field.onChange(e);
        if (onValueChange) {
            onValueChange(e);
        }
    }
    return (
        <div className="formField">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input id={props.id || props.name} {...field} {...props} onChange={change} />
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </div>
    );
}

export default FormField;