import React, { useState, useEffect } from 'react';
import PaginationTable from "../components/pagination-table.jsx";
import getData from "../api/getData.js";

const AllContactsTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData()
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error.message));
    }, []);

    // Table keys
    const tableKey = ["userId", "id", "title", "body"];
    // Table heads
    const tableHead = ["Name", "Phone", "Mail", "Company", "Created at"];

    return (
        <div>
            <PaginationTable data={data} loading={loading} tableKey={tableKey} tableHead={tableHead}/>
        </div>
    )
}

export default AllContactsTable;