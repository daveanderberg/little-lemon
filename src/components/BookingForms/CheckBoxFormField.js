import { useField } from "formik";

const CheckBoxFormField = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <div className="formCheckBox">
            <label>
                <input id={props.id || props.name} {...field} {...props} type='checkbox' />
                {label}
            </label>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </div>
    );
}

export default CheckBoxFormField;