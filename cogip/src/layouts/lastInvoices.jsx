import manager from '../assets/manager.svg';
import React, { useState, useEffect } from 'react';
import getData from "../api/getData.js";
import Table from "../components/table-without-pagination.jsx";

const LastInvoices = () => {
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
    const tableHead = ["Name", "Phone", "Mail", "Company", "Created at"];

    return (
       <div className="w-full mt-48">
             <h2 className="text-6xl font-black  mx-24 font-inter">Last invoices</h2>
             <div className="flex justify-center">
                <Table data={data} loading={loading} tableKey={tableKey} tableHead={tableHead}/>
            </div>
           <div className="relative">
                <img src={manager} alt="manager" className={"absolute right-0 mt-16 " + (window.location.pathname == "/" ? "" : "opacity-0") } />
            </div>
        </div>
    )
}

export default LastInvoices;