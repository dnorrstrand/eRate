import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


function Airports(props) {

    const [airports, setAirports] = useState([{
        airportCode: "",
        airportName: "",
        country: "",
        area: ""
    }]);

    useEffect(() => {
        fetch("/airports").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setAirports(jsonRes));
    }, []);

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        style: { backgroundColor: '#c8e6c9' },
        onSelect: function (row) {
            let selectedRow = row.airportCode;
            return props.rowCallback(selectedRow);
        }
    }

    return (

        < Table responsive {...props}>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Area</th>
                </tr>
            </thead>
            <tbody>
                {airports.map((airport, index) =>
                    <tr key={index} onClick={selectRow}>
                        <td>{airport.airportCode}</td>
                        <td>{airport.airportName}</td>
                        <td>{airport.country}</td>
                        <td>{airport.area}</td>
                    </tr>
                )}
            </tbody>
        </Table >

    )
}

export default Airports;