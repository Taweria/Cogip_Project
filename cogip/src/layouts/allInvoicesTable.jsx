import React, {useState, useEffect, Suspense} from 'react';
import getData from "../api/getData.js";
import Table from "../components/table.jsx";
import Pagination from "../components/pagination.jsx";
import {Await, useLoaderData} from "react-router-dom";
import Loader from "./loader.jsx";

const AllInvoiceTable = () => {
    const {data} = useLoaderData()
    const company = data.map(data => data.title)
    return (
        <div>
            <Suspense fallback={<Loader/>}>
                <Await resolve={data}>
                    {(data) => (
                        <Table dataTable={data} isFilter titleTable={"All invoices"} elementFilter={company} placeholderSearch={"Search company"} paginator/>
                    )}
                </Await>
            </Suspense>


        </div>
    )
}

export default AllInvoiceTable;