import React, { useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputField from "./InputField";
import DatePickerDropdown from "./DatePickerDropdown";

function CreateRates() {

    const [input, setInput] = useState({
        origin: "",
        originZone: "",
        dest: "",
        destZone: "",
        transitAirport: "",
        transitCarrier: "",
        fromDate: "",
        untilDate: "",
        rateCode: "",
        kgLb: ""
    })

    {/* contact: "",
        sellBuy: "",
        remarksInt: "",
        remarksExt: "",
        salesRegion: "",
        currency: "",
        forCarrier: "",
        serviceLevel: "",
        agent: "",
        dealCode: "",
        shipper: "",
        priceTemplate: "",
       priceClass: "",
        prepaidCollect: "",
        uldType: "",
        flightGroup: "",
        weekday: "",
        premium: "",
        reference: "",
        shcAddon: "",
        allotPrice: "",
        minAmount: "",
        n: "",
        q45: "",
        q100: "",
        q300: "",
        q500: "",
        q1000: "",
        q3000: "",
        allIn: "",
        expired: "",
        revisedDate: "" */}

    function handleChange(event) {

        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleSelection(selectedValue, name) {
        console.log(selectedValue, name);
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: selectedValue
            }
        })
    }

    console.log(input);

    function handleClick(event) {
        event.preventDefault();
        const newRate = {
            origin: input.origin,
            originZone: input.originZone,
            dest: input.dest,
            transitAirport: input.transitAirport,
            transitCarrier: input.transitCarrier,
            fromDate: input.fromDate,
            untilDate: input.untilDate,
            rateCode: input.rateCode,
            kgLb: input.kgLb
        }
        {/* contact: input.contact,
            sellBuy: input.sellBuy,
            remarksInt: input.remarksInt,
            remarksExt: input.remarksExt,
            salesRegion: input.salesRegion,
            currency: input.currency,
            forCarrier: input.forCarrier,
            serviceLevel: input.serviceLevel,
            agent: input.agent,
            dealCode: input.dealCode,
            shipper: input.shipper,
            destZone: input.destZone,
            priceTemplate: input.priceTemplate,
            priceClass: input.priceClass,
            prepaidCollect: input.prepaidCollect,
            uldType: input.uldType,
            flightGroup: input.flightGroup,
            weekday: input.weekday,
            premium: input.premium,
            reference: input.reference,
            shcAddon: input.shcAddon,
            allotPrice: input.allotPrice,
            minAmount: input.minAmount,
            n: input.n,
            q45: input.q45,
            q100: input.q100,
            q300: input.q300,
            q500: input.q500,
            q1000: input.q1000,
            q3000: input.q3000,
            allIn: input.allIn,
            expired: input.expired,
            revisedDate: input.revisedDate */}

        axios.post("http://localhost:3001/createRate", newRate)

    }

    return (


        <Container fluid>
            <h1>Create Rates</h1>
            <Form>
                <div className="form-group">
                    <Row>
                        <Col>
                            <Form.Label htmlFor="rate-origin">Origin airport</Form.Label>
                            <InputField onChange={handleSelection} className="form-control" name="origin" value={input.origin} id="rate-origin" dots="airport" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-origin-zone">Origin zone</Form.Label>
                            <Form.Control onChange={handleChange} className="form-control" name="originZone" value={input.originZone} id="rate-origin-zone" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-dest">Destination airport</Form.Label>
                            <InputField onChange={handleSelection} className="form-control" name="dest" value={input.dest} id="rate-dest" dots="airport" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-dest-zone">Destination zone</Form.Label>
                            <Form.Control onChange={handleChange} className="form-control" name="destZone" value={input.destZone} id="rate-dest-zone" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor="rate-transit-airport">Transit airport</Form.Label>
                            <InputField onChange={handleSelection} className="form-control" name="transitAirport" value={input.transitAirport} id="rate-transit-airport" dots="airport" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-transit-carrier">Transit carrier</Form.Label>
                            <InputField onChange={handleSelection} className="form-control" name="transitCarrier" value={input.transitCarrier} id="rate-transit-carrier" dots="carrier" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-date-from" style={{ display: "block" }}>Effective date</Form.Label>
                            <DatePickerDropdown onChange={handleSelection} name="fromDate" value={input.fromDate} id="rate-date-from" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="rate-date-until" style={{ display: "block" }}>Expiry date</Form.Label>
                            <DatePickerDropdown onChange={handleSelection} name="untilDate" value={input.untilDate} id="rate-date-until" />
                        </Col>
                    </Row>

                    <InputField onChange={handleChange} className="form-control " name="rateCode" id="rate" value={input.rateCode} placeholder="Rate Code">Rate Code</InputField>
                    {/*<input onChange={handleChange} className="form-control" name="kgLb" value={input.kgLb} placeholder="KG/LB"></input>*/}
                    <InputField onChange={handleChange} className="form-control" name="kgLb" id="airport" value={input.kgLb} placeholder="KG/LB">KG/LB</InputField>
                    {/* <input onChange={handleChange} className="form-control" name="contact" value={input.contact} placeholder="Contact"></input>
                    <input onChange={handleChange} className="form-control" name="sellBuy" value={input.sellBuy} placeholder="Sell/Buy"></input>
                    <input onChange={handleChange} className="form-control" name="remarksInt" value={input.remarksInt} placeholder="Remarks Internal"></input>
                    <input onChange={handleChange} className="form-control" name="remarksExt" value={input.remarksExt} placeholder="Remarks External"></input>
                    <input onChange={handleChange} className="form-control" name="salesRegion" value={input.salesRegion} placeholder="Sales Region"></input>
                    <input onChange={handleChange} className="form-control" name="currency" value={input.currency} placeholder="Currency"></input>
                    <input onChange={handleChange} className="form-control" name="forCarrier" value={input.forCarrier} placeholder="For Carrier"></input>
                    <input onChange={handleChange} className="form-control" name="serviceLevel" value={input.serviceLevel} placeholder="Service Level"></input>
                    <input onChange={handleChange} className="form-control" name="agent" value={input.agent} placeholder="Agency Code"></input>
                    <input onChange={handleChange} className="form-control" name="dealCode" value={input.dealCode} placeholder="Deal Code"></input>
                    <input onChange={handleChange} className="form-control" name="shipper" value={input.shipper} placeholder="Shipper"></input>
                   
                    
                    <input onChange={handleChange} className="form-control" name="priceTemplate" value={input.priceTemaplte} placeholder="Price Template"></input>
                    
                    <input placeholder="Until Date"></input>
                    <input onChange={handleChange} className="form-control" name="priceClass" value={input.priceClass} placeholder="Price Class"></input>
                    <input onChange={handleChange} className="form-control" name="prepaidCollect" value={input.prepaidCollect} placeholder="Prepaid/Collect"></input>
                    <input onChange={handleChange} className="form-control" name="uldType" value={input.uldType} placeholder="ULD Type"></input>
                    <input onChange={handleChange} className="form-control" name="flightGroup" value={input.flightGroup} placeholder="Flight Group"></input>
                    <input onChange={handleChange} className="form-control" name="weekday" value={input.weekday} placeholder="Weekday"></input>
                    
                    
                    <input onChange={handleChange} className="form-control" name="premium" value={input.premium} placeholder="Premium"></input>
                    <input onChange={handleChange} className="form-control" name="reference" value={input.reference} placeholder="Reference"></input>
                    <input onChange={handleChange} className="form-control" name="shcAddon" value={input.shcAddon} placeholder="SHC Add-on"></input>
                    <input onChange={handleChange} className="form-control" name="allotPrice" value={input.allotPrice} placeholder="Allotment Price"></input>
                    <input onChange={handleChange} className="form-control" name="minAmount" value={input.minAmount} placeholder="Minimum Amount"></input>
                    <input onChange={handleChange} className="form-control" name="n" value={input.n} placeholder="Normal"></input>
                    <input onChange={handleChange} className="form-control" name="q45" value={input.q45} placeholder="Q45"></input>
                    <input onChange={handleChange} className="form-control" name="q100" value={input.q100} placeholder="Q100"></input>
                    <input onChange={handleChange} className="form-control" name="q300" value={input.q300} placeholder="Q300"></input>
                    <input onChange={handleChange} className="form-control" name="q500" value={input.q500} placeholder="Q500"></input>
                    <input onChange={handleChange} className="form-control" name="q1000" value={input.q1000} placeholder="Q1000"></input>
                    <input onChange={handleChange} className="form-control" name="q3000" value={input.q3000} placeholder="Q3000"></input>
                    <input onChange={handleChange} className="form-control" id="all-in-checkbox" type="checkbox" name="allIn" value={input.allIn}></input>
                    <label for="all-in-checkbox">All Inclusive Rate</label><br />
                    <input onChange={handleChange} className="form-control" id="expired-checkbox" type="checkbox" name="expired" value={input.expired}></input>
                    <label for="expired-checkbox">Rate Expired</label><br />
                    <input onChange={handleChange} className="form-control" name="revisedDate" value={input.revisedDate} placeholder="Revised Date"></input> */}
                </div>
                <button onClick={handleClick} className="btm btn-lg btn-info">ADD RATE</button>
            </Form>
        </Container>

    )
}

export default CreateRates;