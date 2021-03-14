import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

function Airports(props) {

    const [airports, setAirports] = useState([{
        airportCode: "",
        airportName: "",
        country: "",
        area: ""
    }]);

    const [selectedValue, setSelectedValue] = useState({
        airportCode: "",
        airportName: "",
        country: "",
        area: ""
    });

    useEffect(() => {
        fetch("/airports").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setAirports(jsonRes));
    }, []);

    const records = airports;
    const columns = [{
        dataField: 'airportCode',
        text: 'Airport code',
        sort: true
    }, {
        dataField: 'airportName',
        text: 'Name',
        style: { whiteSpace: "nowrap", width: "50%" }
    }, {
        dataField: 'country',
        text: 'Country',
        sort: true
    }, {
        dataField: 'area',
        text: 'Area'
    }];

    const { SearchBar } = Search;

    //update and use the current selectedValue to pass the row up the component tree
    useEffect(() => {
        props.useRow(selectedValue.airportCode);
    }, [selectedValue]);

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        style: { backgroundColor: '#c8e6c9' },
        onSelect: function (row) {
            setSelectedValue(row);
        }
    }

    return (
        <Container>
            <ToolkitProvider
                key="_id" keyField='_id' data={records} columns={columns}
                search
            >
                {
                    props => (
                        <div>
                            <h3>Input something at below input field:</h3>
                            <SearchBar {...props.searchProps} />
                            <BootstrapTable {...props.baseProps} pagination={paginationFactory()} selectRow={selectRow} striped hover condensed bordered={false} />
                        </div>
                    )
                }
            </ToolkitProvider>
        </Container >
    )
}

export default Airports;