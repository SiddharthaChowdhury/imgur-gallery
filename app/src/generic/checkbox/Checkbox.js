import React from "react";
import "./checkbox.scss";

export const GCheckbox = (props) => {
    const {checked, label, styles, onChange} = props.config;
    const [isChecked, setChecked] = React.useState(checked);

    const handleChange = (e) => {
        const status = !isChecked;
        setChecked(status);

        if(onChange) {
            onChange(status);
        }
    }

    return (
        <label className="container" style={styles || {}}>{label}
            <input  type="checkbox" 
                    checked={isChecked ? "checked" : ""} 
                    className="input"
                    onChange={handleChange}
                />
            <span className="checkmark"></span>
        </label>
    )
}