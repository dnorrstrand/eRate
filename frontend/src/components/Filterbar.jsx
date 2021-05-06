import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Filtergroup from "./Filtergroup";
import Button from 'react-bootstrap/Button';

function Filterbar(props) {

    const [counts, setCounts] = useState(0);

    function addFilter() {
        setCounts(counts + 1);
        return counts;
    };

    function removeFilter() {
        setCounts(counts - 1);
        return counts;
    }

    return (
        <Container fluid style={{ marginBottom: "100px" }}>
            <Card>
                <Card.Header>Data Query</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        <Card.Link href="#" onClick={addFilter}>Add filter</Card.Link>
                        <Card.Link href="#" onClick={removeFilter}>Remove filter</Card.Link>
                    </Card.Subtitle>
                    <Card.Text>
                        <Filtergroup counts={counts} rates={props.rates} />
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">
                        <Button size="sm" variant="outline-primary" block href="#">Apply filter(s)</Button>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </Container >
    );
}

export default Filterbar;