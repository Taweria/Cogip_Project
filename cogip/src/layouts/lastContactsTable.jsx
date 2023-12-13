import light from '../assets/light.svg';
import React, { useState, useEffect } from 'react';
import getData from "../api/getData.js";
import Table from "../components/table.jsx";
import InputSearch from "../components/input-search.jsx";

const LastContacts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData()
            .then(data => setData(data.slice(0, 5)))
            .catch(error => console.error('Error fetching data:', error.message));
    }, []);
    const title = data.map(data => data.title)

    // Table keys
    const tableKey = ["userId", "id", "title", "body"];
    // Table heads
    const tableHead = ["Name", "Phone", "Mail", "Company", "Created at"];
    return (

       /*
       * <div className="w-full mt-48">
             <h2 className="text-6xl font-black  mx-24 font-inter">Last contacts</h2>
             <div className="flex justify-center">
                <Table data={data} loading={loading} tableKey={tableKey} tableHead={tableHead}/>
            </div>
            <div className="relative">
                <img src={light} alt="ligh-bulb" className="absolute left-0 mt-16"/>
            </div>
        </div>
       * */

        <Table dataTable={data} elementFilter={title} isFilter={false}/>
    )
}

export default LastContacts;