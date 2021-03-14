import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { BsThreeDotsVertical } from 'react-icons/bs';
import DataFetchModal from "./DataFetchModal";

function InputField(props) {

    const [show, setShow] = useState({
        value: false,
        bname: "none"
    });
    const [selectedValue, setSelectedValue] = useState();
    const name = props.name;
    function useRow(selectedValue) {
        console.log(selectedValue);
        return setSelectedValue(selectedValue);
    }

    const handleShow = () => setShow({ value: true, bname: props.dots });
    const handleClose = () => setShow({ value: false, bname: "none" });

    return (
        <>
            <DataFetchModal show={show.value} mshow={show.bname} onHide={handleClose} />
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={handleShow}><BsThreeDotsVertical /></Button>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon1" onChange={(selectedValue) => props.onChange(selectedValue, name)} />
            </InputGroup>
        </>
    )
}

export default InputField;