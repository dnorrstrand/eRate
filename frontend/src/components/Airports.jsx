import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

function Airports(props) {

    const { rowCallback, ...rest } = props;

    const [airports, setAirports] = useState([{
        _id: "",
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

    const records = airports;
    const columns = [{
        dataField: 'airportCode',
        text: 'Code',
        sort: true,
        headerStyle: { width: "11%" },
        style: { width: "11%" }
    }, {
        dataField: 'airportName',
        text: 'Name',
        headerStyle: { width: "58%" },
        style: { width: "58%" }
    }, {
        dataField: 'country',
        text: 'Cnt',
        sort: true,
        headerStyle: { width: "10%" },
        style: { width: "10%" }
    }, {
        dataField: 'area',
        text: 'Area',
        headerStyle: { width: "22%" },
        style: { width: "22%" }
    }];

    const { SearchBar } = Search;

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        style: { backgroundColor: '#c8e6c9' },
        onSelect: function (row) {
            let selectedRow = row.airportCode;
            return rowCallback(selectedRow);
        }
    }

    return (
        <Container {...rest}>
            <ToolkitProvider keyField="_id" data={records} columns={columns} search>
                {
                    rest => (
                        <div>
                            <h3>Input something at below input field:</h3>
                            <SearchBar {...rest.searchProps} />
                            <BootstrapTable {...rest.baseProps} pagination={paginationFactory()} selectRow={selectRow} striped hover condensed bordered={false} />
                        </div>
                    )
                }
            </ToolkitProvider>
        </Container >
    )
}

export default Airports;