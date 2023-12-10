import React, { useState, useEffect } from 'react';
import DataForPagination from './dataForPagination.jsx';

const Table = ({data, loading, tableKey, tableHead}) => {

    return (
        <div>
            <div className="w-full mt-16">
                <div className="flex justify-center">
                    <table className="w-11/12 py-6 mx-24 font-roboto font-semibold">
                        <thead className="bg-yellow">
                            <tr>
                                {tableHead.map((item, index) => (
                                    <th key={index}>{item}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="w-11/12">
                            <DataForPagination data={data} loading={loading} value={tableKey}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table;