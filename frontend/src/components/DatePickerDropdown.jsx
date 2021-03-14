import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setDefaultLocale } from "react-datepicker";
setDefaultLocale("en-GB");

function DatePickerDropdown(props) {

    const [selectedValue, setSelectedValue] = useState(new Date());
    const value = props.value;

    return (
        <DatePicker
            selected={value}
            onChange={date => setSelectedValue(date), (selectedValue) => props.onChange(selectedValue, props.name)}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            dateFormat="PP"
            className="form-control"
        />
    );
};

export default DatePickerDropdown;