import React from "react";
import "./radiobtn.scss";

export const GRadioBtn = (props) => {
    const [config, setActive] = React.useState(props.config);

    if (!config || !Array.isArray(config)){
        return null;
    }

    const handleChange = (e) => {
        const modifiedConf = config.map(( item, key) => {
            if(item.value === e.target.value) {
                item.checked = true;
                return item;
            }

            item.checked = false;
            return item;
        })

        setActive(modifiedConf);
    }

    return (
        <>
            {config.map(({checked, label, styles, value}, key) => {
                return (
                    <label className="radio-container" style={styles || {}} key={key}>{label}
                        <input  type="radio" 
                                name="gradiogrp" 
                                checked={checked ? "checked": ""} 
                                className={"input"}
                                value={value}
                                onChange={handleChange}
                            />
                        <span className="checkmark"></span>
                    </label>
                )
            })}
        </>
    )
}