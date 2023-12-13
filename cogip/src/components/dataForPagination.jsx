import React from 'react';
import Loader from "../layouts/loader.jsx";

const DataForPagination = ({data, loading, value }) => {
    // TO CHANGE LATER FOR A SPINNER
    if(loading) {
        return <Loader/>
    }

    console.log(value)

    return (
        <>
                {data.map((item) => (
                    <tr>
                        {value.map((key) => (
                             <td key={key}>{item[key]}</td>
                        ))}
                    </tr>
                ))}
        </>
    )
}

export default DataForPagination;