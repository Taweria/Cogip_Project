import React from 'react';
import Loader from "../layouts/loader.jsx";

const DataForPagination = ({data, loading, value }) => {
    
    if(loading) {
        return <Loader/>
    }

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