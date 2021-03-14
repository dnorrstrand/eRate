import React, { useState } from "react";
import axios from "axios";

function CreateCarriers() {

    const [input, setInput] = useState({
        carrierCode: "",
        carrierLongCode: "",
        carrierName: "",
        carrierPrefix: ""
    })

    function handleChange(event) {

        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newCarrier = {
            carrierCode: input.carrierCode,
            carrierLongCode: input.carrierLongCode,
            carrierName: input.carrierName,
            carrierPrefix: input.carrierPrefix
        }

        axios.post("http://localhost:3001/createCarrier", newCarrier)

    }

    return (
        <div className="container">
            <h1>Create Carrier</h1>
            <form>
                <div className="form-group">
                    <input onChange={handleChange} className="form-control" name="carrierCode" value={input.carrierCode} placeholder="Carrier IATA code"></input>
                    <input onChange={handleChange} className="form-control" name="carrierLongCode" value={input.carrierLongCode} placeholder="Carrier's long code"></input>
                    <input onChange={handleChange} className="form-control" name="carrierName" value={input.carrierName} placeholder="Name"></input>
                    <input onChange={handleChange} className="form-control" name="carrierPrefix" value={input.carrierPrefix} placeholder="Prefix"></input>
                </div>
                <button onClick={handleClick} className="btm btn-lg btn-info">ADD CARRIER</button>
            </form>
        </div >
    )
}

export default CreateCarriers;