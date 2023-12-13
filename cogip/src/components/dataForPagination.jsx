import React from 'react';

const DataForPagination = ({data, loading, value }) => {
    // TO CHANGE LATER FOR A SPINNER
    if(loading) {
        return <h2>Loading...</h2>
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