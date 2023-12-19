import React from 'react';
import Loader from "../layouts/loader.jsx";
import {Link} from "react-router-dom";

const DataForPagination = ({data, loading, value, link }) => {
    
    if(loading) {
        return <Loader/>
    }

    return (
        <>
                {data.map((item) => (
                        <tr>
                            {value.map((key) => (
                                <td key={key}><Link to={`/dashboard/${link}`}>{item[key]}</Link></td>
                            ))}
                        </tr>
                ))}
        </>
    )
}

export default DataForPagination;