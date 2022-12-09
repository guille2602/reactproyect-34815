import React from "react";

// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function FormInput({label, name, value, type, onChange}) {
    return(
        <>
            <label htmlFor={name} className="align-left mb-1">
                {label}
            </label>
            <input
                name={name}
                className="row mb-3"
                type={type}
                value={value}
                onChange={onChange}
                required
            />
        </>
    )
}

export default FormInput;