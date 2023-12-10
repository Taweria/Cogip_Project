import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import getData from "../api/getData.js";
import {useEffect, useState} from "react";
import InputSearch from "./input-search.jsx";

const Table = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([])

    useEffect(() => {
        getData()
            .then((responseData) => {

                setData(responseData);
                setFilter(responseData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    const handleDataFiltered = (filteredResults) => {
        const matchingData = data.filter(item =>
            filteredResults.some(title => item.title === title)
        );
        setFilter(matchingData)
    };
    const title = data.map(data => data.title)
    return (

        <>
            <InputSearch placeholder={"test"} data={title} dataFiltered={handleDataFiltered}/>
            <DataTable value={filter} tableStyle={{ maxWidth: '50%' }} >
                {columns.map((col, index) => (
                    <Column key={index} field={col} header={col.charAt(0).toUpperCase() + col.slice(1)} />
                ))}
            </DataTable>

        </>
    )
}

export default Table;
