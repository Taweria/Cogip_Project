import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import getData from "../api/getData.js";
import {useEffect, useState} from "react";
import InputSearch from "./input-search.jsx";

/**
 * Table allows data to be displayed with an object. The object in question must not contain a
 * @param(object) Object can't contain additional objects, otherwise columns won't work
 * @param(elementFilter) Is the element used to filter the elements of the array. This element must be one of the columns of the object
 * @param(isFilter) Boolean to display the filter
 * */
const Table = ({object, elementFilter, isFilter}) => {
    const [data, setData] = useState(object);
    const [filter, setFilter] = useState(object)

    console.log(data)
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    const handleDataFiltered = (filteredResults) => {
        const matchingData = data.filter(item =>
            filteredResults.some(title => item.title === title)
        );
        setFilter(matchingData)
    };
    return (

        <>
            {isFilter && elementFilter && (
                <InputSearch placeholder={"test"} data={elementFilter} dataFiltered={handleDataFiltered}/>
            )}
            <DataTable value={filter} tableStyle={{ maxWidth: '50%' }} >
                {columns.map((col, index) => (
                    <Column key={index} field={col} header={col.charAt(0).toUpperCase() + col.slice(1)} />
                ))}
            </DataTable>

        </>
    )
}

export default Table;
