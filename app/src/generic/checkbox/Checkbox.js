import React from "react";
import "./checkbox.scss";

export const GCheckbox = (props) => {
    const {checked, label, styles, onChange, name} = props.config;
    const [isChecked, setChecked] = React.useState(checked);

    const handleChange = (e) => {
        setChecked(!isChecked);

        if(onChange) {
            onChange({name: isChecked});
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