import {useState, useEffect, Suspense} from 'react';
import getData from "../api/getData.js";
import Table from "../components/table.jsx";
import {Await} from "react-router-dom";
import Loader from "./loader.jsx";
import light from  "../assets/light.svg"


const LastContacts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(data => setData(data.slice(0, 5)))
            .catch(error => console.error('Error fetching data:', error.message));
    }, []);

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

    return (
        <Suspense fallback={<Loader/>}>
            <Await resolve={data}>
                <Table
                    dataTable={data}
                    titleTable={"Last Contacts"}
                    placeholderSearch={"Ceci est un placeholder" }/>

                <div className="relative">
                    <img src={light} alt="ligh-bulb" className="absolute left-0 mt-16"/>
                </div>
            </Await>
        </Suspense>
    )
}

export default LastContacts;