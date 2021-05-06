import React from "react";
import "./Navibar.css";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Filtergroup(props) {

    const counts = props.counts;
    const rates = props.rates[3];
    console.log(rates);


    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    const results = range(1, counts);

    const filter = results.map((result) =>
        <Container fluid key={result} style={{ marginBottom: "5px", padding: 0 }} >
            <Form>
                <Row>
                    <Col>
                        <Form.Control size="sm" as="select" >
                            {Object.getOwnPropertyNames(rates).map((fieldName, i) => <option key={fieldName} id={i}>{fieldName}</option>)}
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control size="sm" type="text" placeholder="Enter search string" />
                    </Col>
                </Row>
            </Form>
        </Container >
    );

    return (
        <p>{filter}</p>
    );
}

export default Filtergroup;