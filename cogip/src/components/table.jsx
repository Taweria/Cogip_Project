import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {useEffect, useState} from "react";
import InputSearch from "./input-search.jsx";
import DynamicTitle from "./dynamic-title.jsx";

/**
 * Table allows data to be displayed with an object. The object in question must not contain a
 * @param(object) Object can't contain additional objects, otherwise columns won't work
 * @param(elementFilter) Is the element used to filter the elements of the array. This element must be one of the columns of the object
 * @param(isFilter) Boolean to display the filter
 * @param(titleTable) Title for the table
 * */
const Table = ({dataTable, elementFilter, isFilter, titleTable}) => {

    const [filter, setFilter] = useState( [])
    useEffect(() => {
        setFilter(dataTable)
    }, [dataTable]);
    const columns = dataTable.length > 0 ? Object.keys(dataTable[0]) : [];
    console.log(dataTable)

    const handleDataFiltered = (filteredResults) => {
        const matchingData = dataTable.filter(item =>
            filteredResults.some(title => item.title === title)
        );
        setFilter(matchingData)
    };
    return (

        <>
            <div className={"mx-auto flex flex-col w-5/6"}>
                <div className={"flex justify-between pb-8 relative"}>
                    <DynamicTitle title={titleTable} />
                    {isFilter && elementFilter && (
                        <InputSearch placeholder={"test"} data={elementFilter} dataFiltered={handleDataFiltered}/>
                    )}

                </div>
                <DataTable className={"font-black font-roboto"}   value={filter} tableStyle={{ maxWidth: '100%' }} >
                    {columns.map((col, index) => (
                        <Column
                                 key={index} field={col}
                                 header={col.charAt(0).toUpperCase() + col.slice(1)}
                                 className={index % 2 === 0 ? 'even-row' : 'odd-row'}
                        />
                    ))}
                </DataTable>
            </div>
        </>
    )
}

export default Table;
