import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import getData from "../api/getData.js";
import {useEffect, useState} from "react";

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Utilisez la fonction getData pour récupérer les données
        getData()
            .then((responseData) => {

                setData(responseData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <DataTable value={data} tableStyle={{ maxWidth: '50%' }} >
            {columns.map((col, index) => (
                <Column key={index} field={col} header={col.charAt(0).toUpperCase() + col.slice(1)} />
            ))}
        </DataTable>
    )
}

export default Table;