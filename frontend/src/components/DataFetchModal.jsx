import React, { useState } from "react";
import Airports from "./Airports";
import Rates from "./Rates";
import Carriers from "./Carriers";
import DummyContent from "./DummyContent";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const objType = {
    rate: Rates,
    carrier: Carriers,
    airport: Airports,
    none: DummyContent
};

function DataFetchModal(props) {

    const { fieldCallback, ...rest } = props;

    const reference = props.mshow;
    const Component = objType[reference];
    const [selectedValue, setSelectedValue] = useState();

    function useRow(selectedRow) {
        setSelectedValue(selectedRow);
    }

    function sendRow() {
        fieldCallback(selectedValue);
        props.onHide();
    }

    return (

        <>
            <Modal {...rest}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation="true">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                {rest.mshow ? <Modal.Body><Component rowCallback={useRow} /></Modal.Body> : <Modal.Body><p /></Modal.Body>}
                <Modal.Footer>
                    <Button variant="secondary" onClick={rest.onHide}>Close</Button>
                    <Button variant="primary" onClick={sendRow}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DataFetchModal;