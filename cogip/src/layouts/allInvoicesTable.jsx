import React, { useState, useEffect } from 'react';
import getData from "../api/getData.js";
import Table from "../components/table.jsx";
import Pagination from "../components/pagination.jsx";

const AllInvoiceTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error.message));
    }, []);

    const company = data.map(data => data.title)
    return (
        <div>
            <Table dataTable={data} isFilter titleTable={"All invoices"} elementFilter={company} placeholderSearch={"Search company"} paginator/>
        </div>
    )
}

export default AllInvoiceTable;