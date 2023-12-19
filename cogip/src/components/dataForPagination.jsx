import React, {useEffect, useState} from 'react';
import Loader from "../layouts/loader.jsx";

const DataForPagination = ({data, loading, value }) => {


    return (
        <>
            {loading ?
                data.map((item) => (
                    <tr className={"border-b"}>
                        {value.map((key) => (
                            <td key={key} className={"p-4"}>{item[key]}</td>
                        ))}
                    </tr>
                ))
                :

                <Loader primaryColor={"#4d4cac"} secondaryColor={"#ffffff"}/>
            }
        </>
    )
}

export default DataForPagination;