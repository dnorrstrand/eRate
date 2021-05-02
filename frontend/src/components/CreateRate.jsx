import React, { useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputField from "./InputField";
import InputGroup from 'react-bootstrap/InputGroup';
import DatePickerDropdown from "./DatePickerDropdown";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function CreateRates() {

    const [input, setInput] = useState({
        forCarrier: "",
        currency: "",
        contact: "",
        revisedDate: "",
        expired: false,
        origin: "",
        originZone: "",
        dest: "",
        destZone: "",
        transitAirport: "",
        transitCarrier: "",
        fromDate: "",
        untilDate: "",
        rateCode: "",
        kgLb: "",
        sellBuy: "",
        prepaidCollect: "",
        salesRegion: "",
        dealCode: "",
        reference: "",
        priceClass: "",
        serviceLevel: "",
        flightGroup: "",
        uldType: "",
        shcAddon: "",
        priceTemplate: "",
        allotPrice: "",
        weekday: "",
        premium: false,
        shipper: "",
        agent: "",
        remarksInt: "",
        remarksExt: "",
        minAmount: "",
        n: "",
        q45: "",
        q100: "",
        q300: "",
        q500: "",
        q1000: "",
        q3000: "",
        allIn: false
    })

    function handleChange(event) {
        console.log(event.target.value);
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleCheck(e) {
        const { name, checked } = e.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: checked
            }
        })
        console.log(checked);
    }


    function handleSelection(value, name) {
        console.log(value, name);
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleTypedInput(value, name) {
        console.log(value, name);
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    async function getRateCode() {
        try {
            const response = await axios.get('http://localhost:3001/rates');
            const recId = response.data.length - 1;
            //Convert rateCode from String to Number and increment by 1
            const generatedRateCode = Number(response.data[recId].rateCode) + 1;
            setInput(prevInput => {
                return {
                    ...prevInput,
                    rateCode: generatedRateCode,
                }
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    function handleClick(event) {
        {/* event.preventDefault(); */ }
        const newRate = {
            forCarrier: input.forCarrier,
            currency: input.currency,
            contact: input.contact,
            revisedDate: input.revisedDate,
            expired: input.expired,
            origin: input.origin,
            originZone: input.originZone,
            dest: input.dest,
            destZone: input.destZone,
            transitAirport: input.transitAirport,
            transitCarrier: input.transitCarrier,
            fromDate: input.fromDate,
            untilDate: input.untilDate,
            rateCode: input.rateCode,
            kgLb: input.kgLb,
            sellBuy: input.sellBuy,
            prepaidCollect: input.prepaidCollect,
            salesRegion: input.salesRegion,
            dealCode: input.dealCode,
            reference: input.reference,
            priceClass: input.priceClass,
            serviceLevel: input.serviceLevel,
            flightGroup: input.flightGroup,
            uldType: input.uldType,
            shcAddon: input.shcAddon,
            priceTemplate: input.priceTemplate,
            allotPrice: input.allotPrice,
            weekday: input.weekday,
            premium: input.premium,
            shipper: input.shipper,
            agent: input.agent,
            remarksInt: input.remarksInt,
            remarksExt: input.remarksExt,
            minAmount: input.minAmount,
            n: input.n,
            q45: input.q45,
            q100: input.q100,
            q300: input.q300,
            q500: input.q500,
            q1000: input.q1000,
            q3000: input.q3000,
            allIn: input.allIn
        }

        //Post the form data to the server and save it in database
        axios.post('http://localhost:3001/createRate', newRate)
            .then(function (response) {
                if (response.status <= 200) {
                    console.log(response);
                    alert("Rate created and saved successfully!")
                }
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (

        <Container fluid onFocus={getRateCode} lg={10}>
            <h1>Create Rate</h1>
            <Form>
                <div className="form-group">
                    <Row>
                        <Col>
                            <p>Rate code: {input.rateCode}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-for-carrier">Principal Carrier</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control" name="forCarrier" value={input.forCarrier} id="rate-for-carrier" dots="carrier" />
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-currency">Currency</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control" name="currency" value={input.currency} id="rate-currency" dots="currency" />
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-contact">Contact</Form.Label>
                            <Form.Control onChange={handleChange} className="form-control mb-3" name="contact" value={input.contact} id="rate-contact" />
                        </Col>
                        <Col xs={2} lg={2} md={2} sm={4} xs={8}>
                            <Form.Label htmlFor="rate-revised-date" style={{ display: "block" }}>Revised Date</Form.Label>
                            <DatePickerDropdown onChange={handleSelection} name="revisedDate" value={input.revisedDate} id="rate-revised-date" />
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={2} xs={4}>
                            <Form.Label htmlFor="rate-expired" style={{ display: "block" }}>Expired</Form.Label>
                            <Form.Check onChange={handleCheck} className="mb-3" type="switch" id="rate-expired" name="expired" value={input.expired} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-origin">Origin Airport</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control" name="origin" value={input.origin} id="rate-origin" dots="airport" />
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-origin-zone">Origin Zone</Form.Label>
                            <Form.Control onChange={handleChange} className="form-control mb-3" name="originZone" value={input.originZone} id="rate-origin-zone" />
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-dest">Destination Airport</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control" name="dest" value={input.dest} id="rate-dest" dots="airport" />
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-dest-zone">Destination Zone</Form.Label>
                            <Form.Control onChange={handleChange} className="form-control mb-3" name="destZone" value={input.destZone} id="rate-dest-zone" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-transit-airport">Transit Airport</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control" name="transitAirport" value={input.transitAirport} id="rate-transit-airport" dots="airport" />
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-transit-carrier">Transit Carrier</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control" name="transitCarrier" value={input.transitCarrier} id="rate-transit-carrier" dots="carrier" />
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-date-from" style={{ display: "block" }}>Effective Date</Form.Label>
                            <DatePickerDropdown onChange={handleSelection} name="fromDate" value={input.fromDate} id="rate-date-from" />
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-date-until" style={{ display: "block" }}>Expiry Date</Form.Label>
                            <DatePickerDropdown onChange={handleSelection} name="untilDate" value={input.untilDate} id="rate-date-until" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={1} lg={1} md={4} sm={4} xs={12}>
                            <Form.Label htmlFor="rate-kgLb" style={{ display: "block" }}>Kg/Lb</Form.Label>
                            <Form.Control as="select" onChange={handleChange} className="form-control" name="kgLb" id="rate-kgLb" value={input.kgLb} placeholder="KG/LB">
                                <option>KG</option>
                                <option>LB</option>
                            </Form.Control>
                        </Col>
                        <Col xl={1} lg={1} md={4} sm={4} xs={12}>
                            <Form.Label htmlFor="rate-sellBuy" style={{ display: "block" }}>Sell/Buy</Form.Label>
                            <Form.Control as="select" onChange={handleChange} className="form-control" name="sellBuy" id="rate-sellBuy" value={input.sellBuy} placeholder="Sell/Buy">
                                <option>SELL</option>
                                <option>BUY</option>
                            </Form.Control>
                        </Col>
                        <Col xl={1} lg={1} md={4} sm={4} xs={12}>
                            <Form.Label htmlFor="rate-prepaidCollect" style={{ display: "block" }}>PP/CC</Form.Label>
                            <Form.Control as="select" onChange={handleChange} className="form-control" name="prepaidCollect" id="rate-prepaidCollect" value={input.prepaidCollect} placeholder="Prepaid/Collect">
                                <option>PP</option>
                                <option>CC</option>
                            </Form.Control>
                        </Col>
                        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-sales-region" style={{ display: "block" }}>Sales Region</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control mb-3" name="salesRegion" value={input.salesRegion} id="rate-sales-region" />
                        </Col>
                        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
                            <Form.Label htmlFor="rate-deal-code" style={{ display: "block" }}>Deal Code</Form.Label>
                            <Form.Control onChange={handleChange} className="form-control mb-3" name="dealCode" value={input.dealCode} id="rate-deal-code" />
                        </Col>
                        <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                            <Form.Label htmlFor="rate-reference" style={{ display: "block" }}>Reference</Form.Label>
                            <Form.Control onChange={handleChange} className="form-control mb-3" name="reference" value={input.reference} id="rate-reference" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor="rate-price-class" style={{ display: "block" }}>Price Class</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control mb-3" name="priceClass" value={input.priceClass} id="rate-price-class" dots="priceClass" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-service-level" style={{ display: "block" }}>Service Level</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control mb-3" name="serviceLevel" value={input.serviceLevel} id="rate-service-level" dots="serviceLevel" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-flight-group" style={{ display: "block" }}>Flight Group</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control mb-3" name="flightGroup" value={input.flightGroup} id="rate-flight-group" dots="flightGroup" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-uld-type" style={{ display: "block" }}>ULD Type</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control mb-3" name="uldType" value={input.uldType} id="rate-uld-type" dots="uldType" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor="rate-shc-addon" style={{ display: "block" }}>SHC Add-on</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control mb-3" name="shcAddon" value={input.shcAddon} id="rate-shc-addon" dots="shc" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-price-template" style={{ display: "block" }}>Price Template</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control mb-3" name="priceTemplate" value={input.priceTemplate} id="rate-price-template" dots="priceTemplate" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-allot-price" style={{ display: "block" }}>Allotment</Form.Label>
                            <Form.Control onChange={handleChange} className="form-control mb-3" name="allotPrice" value={input.allotPrice} id="rate-allot-price" />
                        </Col>
                        <Col xs={2}>
                            <Form.Label htmlFor="rate-weekday" style={{ display: "block" }}>Weekday</Form.Label>
                            <Form.Control onChange={handleChange} className="form-control mb-3" name="weekday" value={input.weekday} id="rate-weekday" />
                        </Col>
                        <Col xs={1}>
                            <Form.Label htmlFor="rate-premium" style={{ display: "block" }}>Premium</Form.Label>
                            <Form.Check onChange={handleCheck} className="mb-3" type="switch" id="rate-premium" name="premium" value={input.premium} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor="rate-shipper" style={{ display: "block" }}>Shipper</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control mb-3" name="shipper" value={input.shipper} id="rate-shipper" dots="shippers" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-agent" style={{ display: "block" }}>Agent</Form.Label>
                            <InputField typedCallback={handleTypedInput} selectionCallback={handleSelection} className="form-control mb-3" name="agent" value={input.agent} id="rate-agent" dots="agents" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor="rate-remarks-int" style={{ display: "block" }}>Remarks Internal</Form.Label>
                            <Form.Control as="textarea" rows={1} onChange={handleChange} className="form-control mb-3" name="remarksInt" value={input.remarksInt} id="rate-remarks-int" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-remarks-ext" style={{ display: "block" }}>Remarks External</Form.Label>
                            <Form.Control as="textarea" rows={1} onChange={handleChange} className="form-control mb-3" name="remarksExt" value={input.remarksExt} id="rate-remarks-ext" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table bordered size="sm">
                                <thead style={{ fontSize: "0.7em" }}>
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
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Control onChange={handleChange} name="minAmount" value={input.minAmount} id="rate-min-amount" /></td>
                                        <td><Form.Control onChange={handleChange} name="n" value={input.n} id="rate-n" /></td>
                                        <td><Form.Control onChange={handleChange} name="q45" value={input.q45} id="rate-q45" /></td>
                                        <td><Form.Control onChange={handleChange} name="q100" value={input.q100} id="rate-q100" /></td>
                                        <td><Form.Control onChange={handleChange} name="q300" value={input.q300} id="rate-q300" /></td>
                                        <td><Form.Control onChange={handleChange} name="q500" value={input.q500} id="rate-q500" /></td>
                                        <td><Form.Control onChange={handleChange} name="q1000" value={input.q1000} id="rate-q1000" /></td>
                                        <td><Form.Control onChange={handleChange} name="q3000" value={input.q3000} id="rate-q3000" /></td>
                                        <td><Form.Check onChange={handleCheck} className="mb-3" type="switch" id="rate-allIn" name="allIn" value={input.allIn} /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div >
                <Row className="form-group">
                    <Col>
                        <Button onClick={handleClick} style={{}} type="submit" variant="outline-primary" size="sm" block >ADD RATE</Button>
                    </Col>
                </Row>
            </Form >
        </Container >
    )
}

export default CreateRates;