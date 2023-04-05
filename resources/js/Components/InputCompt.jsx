import { Link } from "@inertiajs/inertia-react";
import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import Select from "react-select";
export const ButtonLinkEl = ({ title, href }) => {
    return (
        <Link href={href} style={{ textDecoration: "none" }}>
            <Button variant="contained">{title}</Button>
        </Link>
    );
};

export const ButtonSubmitEl = () => {
    return (
        <Button type="submit" variant="contained">
            Submit
        </Button>
    );
};

export const SelectSearchEl = ({
    options,
    handleChange,
    nameData,
    isDisabled,
}) => {
    return (
        <Select
            options={options}
            nameData={nameData} //nameData unavailable
            onChange={handleChange}
            isDisabled={isDisabled}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: "55px",
                    borderColor: state.isFocused ? "grey" : "#cacaca",
                }),
            }}
            variant="outlined"
        />
    );
};

export const SelectSearchClearSubmitEl = ({
    options,
    handleChangeSelect,
    name,
    value,
}) => {
    return (
        <Select
            options={options}
            name={name}
            onChange={handleChangeSelect}
            value={value}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: "55px",
                    borderColor: state.isFocused ? "grey" : "#cacaca",
                }),
            }}
            variant="outlined"
        />
    );
};

export const InputEl = ({
    title,
    type = "text",
    name,
    handleChange,
    value,
}) => {
    return (
        <TextField
            id={title}
            label={title}
            type={type}
            sx={{ width: "100%" }}
            variant="outlined"
            name={name}
            onChange={handleChange}
            value={value}
        />
    );
};
