import { useField } from "formik";

function SelectFormField({label, ...props}) {
    const [field, meta] = useField(props);
    return (
        <div className="formField">
            <label htmlFor={props.id || props.name}>{label}</label>
            <div className="formSelect">
                <select {...field} {...props} />
                <span class="focus"></span>
            </div>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </div>
    );
}

export default SelectFormField;

