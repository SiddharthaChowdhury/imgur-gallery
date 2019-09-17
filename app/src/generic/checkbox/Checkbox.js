import React from "react";
import "./checkbox.scss";

export const GCheckbox = ({checked, label, styles}) => {
    return (
        <label className="container" style={styles || {}}>{label}
            <input type="checkbox" checked={checked ? "checked" : ""} className="input"/>
            <span className="checkmark"></span>
        </label>
    )
}