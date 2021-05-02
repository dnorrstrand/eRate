import React, { useEffect } from "react";
import "./Navibar.css";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Filtergroup(props) {

    const counts = props.counts;
    const rates = props.rates;

    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    const results = range(1, counts);
    let rateFields = [];

    function buildFieldList() {
        rateFields = Object.getOwnPropertyNames(rates[5]).slice();
        console.log(rateFields);
        return rateFields;
    }


    const filter = results.map((item) =>
        <Container fluid key={item} style={{ marginBottom: "5px", padding: 0 }} onFocus={buildFieldList}>
            <Form>
                <Row>
                    <Col>
                        <Form.Control size="sm" as="select">
                            {Object.getOwnPropertyNames(rates[5]).map((rateField, i) =>
                                <option key={i} id={i}>{rateField}</option>
                            )
                            }
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control size="sm" type="text" placeholder="Enter search string" />
                    </Col>
                </Row>

            </Form>

        </Container>
    );

    return (
        <p>{filter}</p>
    );
}

export default Filtergroup;