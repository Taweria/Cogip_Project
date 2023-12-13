import React, {useState, useEffect, Suspense} from 'react';
import getData from "../api/getData.js";
import Table from "../components/table.jsx";
import Loader from "./loader.jsx";
import {Await} from "react-router-dom";

const LastCompanies = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(data => setData(data.slice(0, 5)))
            .catch(error => console.error('Error fetching data:', error.message));
    }, []);


    return (
        <Suspense fallback={<Loader/>}>
            <Await resolve={data}>
                <Table
                    dataTable={data}
                    titleTable={"Last companies"}
                    placeholderSearch={"Ceci est un placeholder" }/>
            </Await>
        </Suspense>
    )
}

export default LastCompanies;