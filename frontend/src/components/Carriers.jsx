import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

function Carriers() {

    const [carriers, setCarriers] = useState([{
        _id: "",
        carrierCode: "",
        carrierLongCode: "",
        carrierName: "",
        carrierPrefix: ""
    }]);

    useEffect(() => {
        fetch("/carriers").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setCarriers(jsonRes));
    }, []);

    const records = carriers;
    const columns = [{
        dataField: 'carrierCode',
        text: 'IATA Code',
        sort: true
    }, {
        dataField: 'carrierLongCode',
        text: 'ICAO Code'
    }, {
        dataField: 'carrierName',
        text: 'Name',
        sort: true
    }, {
        dataField: 'carrierPrefix',
        text: 'Prefix'
    }];
    const { SearchBar } = Search;

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
                            <hr />
                            <BootstrapTable {...props.baseProps} pagination={paginationFactory()} />

                        </div>
                    )
                }
            </ToolkitProvider>

            {/* <h1>Carriers</h1>
            <Table striped borderless hover size="sm">
                <thead>
                    <tr>
                        <th>IATA Code</th>
                        <th>Long Code</th>
                        <th>Name</th>
                        <th>Prefix</th>
                    </tr>
                </thead>
                <tbody>
                    {carriers.map(carrier =>
                        <tr key={carrier._id}>
                            <td>{carrier.carrierCode}</td>
                            <td>{carrier.carrierLongCode}</td>
                            <td>{carrier.carrierName}</td>
                            <td>{carrier.carrierPrefix}</td>
                        </tr>
                    )}
                </tbody>
            </Table>*/}
        </Container>
    )
}
export default Carriers;
