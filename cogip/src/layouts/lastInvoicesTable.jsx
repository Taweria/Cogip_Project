import manager from '../assets/manager.svg';
import React, {useState, useEffect, Suspense} from 'react';
import getData from "../api/getData.js";
import Table from "../components/table.jsx";
import Loader from "./loader.jsx";
import {Await} from "react-router-dom";

const LastInvoices = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(data => setData(data.slice(0, 5)))
            .catch(error => console.error('Error fetching data:', error.message));
    }, []);

    return (
       <div className="w-full mt-48">
           <Suspense fallback={<Loader/>}>
               <Await resolve={data}>
                   <Table
                       dataTable={data}
                       titleTable={"Last companies"}
                       placeholderSearch={"Ceci est un placeholder" }/>
               </Await>
           </Suspense>
           <div className="relative">
                <img src={manager} alt="manager" className={"absolute right-0 mt-16 " + (window.location.pathname == "/" ? "" : "opacity-0") } />
            </div>
        </div>
    )
}

export default LastInvoices;