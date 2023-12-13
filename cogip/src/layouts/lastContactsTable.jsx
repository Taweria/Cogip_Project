import light from '../assets/light.svg';
import React, {useState, useEffect, Suspense} from 'react';
import getData from "../api/getData.js";
import Table from "../components/table.jsx";
import InputSearch from "../components/input-search.jsx";
import {Await} from "react-router-dom";
import Loader from "./loader.jsx";

const LastContacts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData()
            .then(data => setData(data.slice(0, 5)))
            .catch(error => console.error('Error fetching data:', error.message));
    }, []);
    const title = data.map(data => data.title)

    const tempTable = [];
    const tableObject = () => {
        data.map(data => {
            const objectData = {
                title:'',
                body:''
            }
            objectData.title = data.title
            objectData.body = data.body

            tempTable.push(objectData);
        })
        return tempTable
    }
    console.log(tableObject())
    // Table keys
    const tableKey = ["userId", "id", "title", "body"];
    // Table heads
    const tableHead = ["Name", "Phone", "Mail", "Company", "Created at"];
    return (


        <Suspense fallback={<Loader/>}>
            <Await resolve={data}>
                <Table
                    dataTable={data}
                    elementFilter={title}
                    isFilter={true}
                    titleTable={"Last Contacts"}
                    placeholderSearch={"Ceci est un placeholder" }/>
            </Await>

        </Suspense>

    )
}

export default LastContacts;