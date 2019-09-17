import React from "react";
import "./radiobtn.scss";

export const GRadioBtn = ({config}) => {

    if (!config || !Array.isArray(config)){
        return null;
    }

    return (
        <>
            {config.map(({checked, label, styles}, key) => {
                return (
                    <label className="radio-container" style={styles || {}} key={key}>{label}
                        <input type="radio" name="radio" checked={checked ? "checked": ""} className={"input"}/>
                        <span className="checkmark"></span>
                    </label>
                )
            })}
        </>
    )
}