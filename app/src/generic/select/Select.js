import React from "react";
import Select from 'react-select';
import "./select.scss";

export const GSelect = ({options, activeOption, onChange, disabled}) => {
    const [selectOption, setSelect] = React.useState(activeOption);

    const handleChange = selectedOption => {
        console.log("selected", selectOption)
        setSelect(selectedOption);

        if (onChange) {
            onChange(selectedOption)
        }
    };

    return (
        <Select
            value={selectOption}
            onChange={handleChange}
            options={options}
            className={"gselect"}
            isDisabled={!!disabled}
        />
    );
}
