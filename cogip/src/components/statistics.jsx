import React from 'react';
import {getContacts} from "../api/contacts.js";
import {getInvoices} from "../api/getInvoices.js";
import {getCompanies} from "../api/companies.js";
import {useState, useEffect} from "react";

const Statistics = () => {
    const [contacts, setContacts] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
    getContacts()
    .then((contacts) =>  setContacts(contacts.data.length))
    .catch((error) => console.error('Error fetching contacts:', error.message));
    }, []);

     useEffect(() => {
    getInvoices()
    .then((invoices) =>  setInvoices(invoices.data.length))
    .catch((error) => console.error('Error fetching invoices:', error.message));
    }, []);

     useEffect(() => {
    getCompanies()
    .then((companies) =>  setCompanies(companies.data.length))
    .catch((error) => console.error('Error fetching companies:', error.message));
    }, []);




    return (
        <div className="w-12/12 md:w-6/12 mx-8 py-8 rounded-md font-inter shadow-md shadow-gray-200">
            <h2 className="font-bold text-lg mx-8"> Statistics </h2>
            <div className="flex flex-col justify-center items-center md:flex-row">
               <div className="bg-violet text-white font-bold rounded-full flex flex-col justify-center items-center w-32 h-32 p-8 m-2 md:m-10">
                    <span> {invoices} </span>
                    <span> Invoices </span>
                </div>
               <div className="bg-lavande text-white font-bold rounded-full flex flex-col justify-center items-center w-32 h-32 p-8 m-2 md:m-10">
                    <span> {contacts} </span>
                    <span> Contacts </span>
                </div>
               <div className="bg-pink text-white font-bold rounded-full flex flex-col justify-center items-center w-32 h-32 p-8 m-2 md:m-10">
                    <span> {companies} </span>
                    <span> Companies </span>
                </div>
          </div>
        </div>
    )
}

export default Statistics;