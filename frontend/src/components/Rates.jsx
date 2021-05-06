import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Filterbar from "./Filterbar";

function Rates() {

    const [rates, setRates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/rates");
            const newData = await response.json();
            setRates(newData);
        };
        fetchData();
    }, [])

    if (rates) {
        return <Container>
            <Filterbar rates={rates} />
            {rates.map((rate, _id) =>
                <Card border="light" key={_id}>
                    <Card.Body>
                        <Card.Title>{rate.origin}-{rate.dest} via {rate.transitAirport} on {rate.transitCarrier}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Validity: {new Date(rate.fromDate).toLocaleDateString("en-FI")} - {new Date(rate.untilDate).toLocaleDateString("en-FI")} Revised: {new Date(rate.revisedDate).toLocaleDateString("en-FI")}</Card.Subtitle>
                        <Card.Text>
                            <Table borderless striped hover size="sm">
                                <thead >
                                    <tr>
                                        <th>Field name</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Database ID</td>
                                        <td>{rate._id}</td>
                                    </tr>
                                    <tr>
                                        <td>Rate sequence</td>
                                        <td>{rate.rateCode}</td>
                                    </tr>
                                    <tr>
                                        <td>Issuing carrier</td>
                                        <td>{rate.forCarrier}</td>
                                    </tr>
                                    <tr>
                                        <td>Origin airport</td>
                                        <td>{rate.origin}</td>
                                    </tr>
                                    <tr>
                                        <td>Origin zone</td>
                                        <td>{rate.originZone}</td>
                                    </tr>
                                    <tr>
                                        <td>Destination airport</td>
                                        <td>{rate.dest}</td>
                                    </tr>
                                    <tr>
                                        <td>Destination zone</td>
                                        <td>{rate.destZone}</td>
                                    </tr>
                                    <tr>
                                        <td>Transit airport</td>
                                        <td>{rate.transitAirport}</td>
                                    </tr>
                                    <tr>
                                        <td>Transit carrier</td>
                                        <td>{rate.transitCarrier}</td>
                                    </tr>
                                    <tr>
                                        <td>Service Level</td>
                                        <td>{rate.serviceLevel}</td>
                                    </tr>
                                    <tr>
                                        <td>Sales region</td>
                                        <td>{rate.salesRegion}</td>
                                    </tr>
                                    <tr>
                                        <td>Deal code</td>
                                        <td>{rate.dealCode}</td>
                                    </tr>
                                    <tr>
                                        <td>Price class</td>
                                        <td>{rate.priceClass}</td>
                                    </tr>
                                    <tr>
                                        <td>Sell/Buy</td>
                                        <td>{rate.sellBuy}</td>
                                    </tr>
                                    <tr>
                                        <td>Prepaid/Collect</td>
                                        <td>{rate.prepaidCollect} / {rate.prepaidCollect === "PP" ? "PREPAID" : "COLLECT"}</td>
                                    </tr>
                                    <tr>
                                        <td>ULD type</td>
                                        <td>{rate.uldType}</td>
                                    </tr>
                                    <tr>
                                        <td>Flight group</td>
                                        <td>{rate.flightGroup}</td>
                                    </tr>
                                    <tr>
                                        <td>Allotment code</td>
                                        <td>{rate.allotPrice}</td>
                                    </tr>
                                    <tr>
                                        <td>SHC add-on</td>
                                        <td>{rate.shcAddon}</td>
                                    </tr>
                                    <tr>
                                        <td>Valid on days</td>
                                        <td>{rate.weekday}</td>
                                    </tr>
                                    <tr>
                                        <td>Premium</td>
                                        <td>{rate.premium}</td>
                                    </tr>
                                    <tr>
                                        <td>Price template code</td>
                                        <td>{rate.priceTemplate}</td>
                                    </tr>
                                    <tr>
                                        <td>Reference</td>
                                        <td>{rate.reference}</td>
                                    </tr>
                                    <tr>
                                        <td>Carrier's contact</td>
                                        <td>{rate.contact}</td>
                                    </tr>
                                    <tr>
                                        <td>Valid for agent</td>
                                        <td>{rate.agent}</td>
                                    </tr>
                                    <tr>
                                        <td>Valid for shipper</td>
                                        <td>{rate.shipper}</td>
                                    </tr>
                                    <tr>
                                        <td>Remarks internal</td>
                                        <td>{rate.remarksInt}</td>
                                    </tr>
                                    <tr>
                                        <td>Remarks external</td>
                                        <td>{rate.remarksExt}</td>
                                    </tr>
                                    <tr>
                                        <td>Currency</td>
                                        <td>{rate.currency}</td>
                                    </tr>
                                    <tr>
                                        <td>Kg/Lb</td>
                                        <td>{rate.kgLb}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table bordered hover size="sm">
                                <thead >
                                    <tr>
                                        <th>Min</th>
                                        <th>N</th>
                                        <th>Q45</th>
                                        <th>Q100</th>
                                        <th>Q300</th>
                                        <th>Q500</th>
                                        <th>Q1000</th>
                                        <th>Q3000</th>
                                        <th>All-in</th>
                                    </tr>
                                    <tr>
                                        <td>{new Intl.NumberFormat('en-FI', { style: 'decimal', minimumFractionDigits: 2 }).format(rate.minAmount)}</td>
                                        <td>{new Intl.NumberFormat('en-FI', { style: 'decimal', minimumFractionDigits: 2 }).format(rate.n)}</td>
                                        <td>{new Intl.NumberFormat('en-FI', { style: 'decimal', minimumFractionDigits: 2 }).format(rate.q45)}</td>
                                        <td>{new Intl.NumberFormat('en-FI', { style: 'decimal', minimumFractionDigits: 2 }).format(rate.q100)}</td>
                                        <td>{new Intl.NumberFormat('en-FI', { style: 'decimal', minimumFractionDigits: 2 }).format(rate.q300)}</td>
                                        <td>{new Intl.NumberFormat('en-FI', { style: 'decimal', minimumFractionDigits: 2 }).format(rate.q500)}</td>
                                        <td>{new Intl.NumberFormat('en-FI', { style: 'decimal', minimumFractionDigits: 2 }).format(rate.q1000)}</td>
                                        <td>{new Intl.NumberFormat('en-FI', { style: 'decimal', minimumFractionDigits: 2 }).format(rate.q3000)}</td>
                                        <td>{rate.allIn ? "YES" : "NO"}</td>
                                    </tr>
                                </thead>
                            </Table>
                        </Card.Text>
                        <Card.Link href="#">Print</Card.Link>
                        <Card.Link href="#">Export</Card.Link>
                        <Card.Link href="#">Modify</Card.Link>
                        <Card.Link href="#">Delete</Card.Link>
                    </Card.Body>
                </Card>
            )}
        </Container>
    } else { return null }
}

export default Rates;
