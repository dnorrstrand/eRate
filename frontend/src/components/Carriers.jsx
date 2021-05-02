import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

function Carriers(props) {

    const { rowCallback, ...rest } = props;

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
    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        style: { backgroundColor: '#c8e6c9' },
        onSelect: function (row) {
            let selectedRow = row.carrierCode;
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
export default Carriers;
