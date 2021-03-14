import React, { useState } from "react";
import axios from "axios";

function CreateAirports() {

    const [input, setInput] = useState({
        airportCode: "",
        airportName: "",
        country: "",
        area: ""
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
        const newAirport = {
            airportCode: input.airportCode,
            airportName: input.airportName,
            country: input.country,
            area: input.area
        }


        axios.post("http://localhost:3001/createAirport", newAirport)

    }

    return (
        <div className="container">
            <h1>Create Airport</h1>
            <form>
                <div className="form-group">
                    <input onChange={handleChange} className="form-control" name="airportCode" value={input.airportCode} placeholder="Airport code"></input>
                    <input onChange={handleChange} className="form-control" name="airportName" value={input.airportName} placeholder="Airport name"></input>
                    <input onChange={handleChange} className="form-control" name="country" value={input.country} placeholder="Country"></input>
                    <input onChange={handleChange} className="form-control" name="area" value={input.area} placeholder="Area"></input>
                </div>
                <button onClick={handleClick} className="btm btn-lg btn-info">ADD AIRPORT</button>


            </form>
        </div >
    )
}

export default CreateAirports;