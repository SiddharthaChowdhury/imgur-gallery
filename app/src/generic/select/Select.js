import React from "react";
import Select from 'react-select';
import "./select.scss";

export const GSelect = ({options, activeOption, onChange}) => {
    const [selectOption, setSelect] = React.useState(activeOption);

    const handleChange = selectedOption => {
        console.log("selected", selectOption)
        setSelect(selectedOption);
    };

    return (
        <Select
            value={selectOption}
            onChange={handleChange}
            options={options}
            className={"gselect"}
        />
    );
}
