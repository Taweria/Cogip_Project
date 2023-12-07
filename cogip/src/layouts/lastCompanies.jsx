import React, { useState, useEffect } from 'react';
import getData from "../api/getData.js";
import Table from "../components/table-without-pagination.jsx";

const LastCompanies = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData()
            .then(data => setData(data.slice(0, 5)))
            .catch(error => console.error('Error fetching data:', error.message));
    }, []);

    // Table keys
    const tableKey = ["userId", "id", "title", "body"];
    // Table heads
    const tableHead = ["Name", "TVA", "Country", "Type", "Created at"];

    return (
       <div className="w-full mt-48">
             <h2 className="text-6xl font-black  mx-24 font-inter">Last companies</h2>
             <div className="flex justify-center">
                <Table data={data} loading={loading} tableKey={tableKey} tableHead={tableHead}/>
            </div>
        </div>
    )
}

export default LastCompanies;