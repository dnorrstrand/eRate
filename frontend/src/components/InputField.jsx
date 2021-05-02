import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { BsThreeDotsVertical } from 'react-icons/bs';
import DataFetchModal from "./DataFetchModal";

function InputField(props) {

    const name = props.name;

    const [show, setShow] = useState({
        value: false,
        bname: "none"
    });

    const [fieldValue, setFieldValue] = useState(props.value);

    //Function to capture selection input
    function useFieldValue(selectedValue) {
        setFieldValue(selectedValue);
        return props.selectionCallback(selectedValue, name);
    }

    //Function to capture typed input
    function typeValue(event) {
        const value = event.target.value;
        setFieldValue(value);
        return props.typedCallback(value, name);
    }

    const handleShow = () => setShow({ value: true, bname: props.dots });
    const handleClose = () => setShow({ value: false, bname: "none" });

    return (
        <>
            <DataFetchModal fieldCallback={useFieldValue} show={show.value} mshow={show.bname} onHide={handleClose} />
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={handleShow}><BsThreeDotsVertical /></Button>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon1" onChange={typeValue} value={fieldValue} />
            </InputGroup>
        </>
    )
}

export default InputField;