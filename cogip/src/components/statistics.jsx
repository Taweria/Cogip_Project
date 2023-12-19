import React from 'react';
import {getContactsCount} from "../api/contacts.js";
import {getInvoicesCount} from "../api/getInvoices.js";
import {getCompaniesCount} from "../api/companies.js";
import {useState, useEffect} from "react";

const Statistics = () => {
    const [contacts, setContacts] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
    getContactsCount()
    .then((contacts) =>  setContacts(contacts.data))
    .catch((error) => console.error('Error fetching contacts:', error.message));
    }, []);

    useEffect(() => {
    getInvoicesCount()
    .then((invoices) =>  setInvoices(invoices.data))
    .catch((error) => console.error('Error fetching invoices:', error.message));
    }, []);

    useEffect(() => {
    getCompaniesCount()
    .then((companies) =>  setCompanies(companies.data))
    .catch((error) => console.error('Error fetching companies:', error.message));
    }, []);


    return (
        <div className="w-full md:w-11/12 p-8 rounded-md font-inter shadow-md shadow-gray-200 bg-white">
            <h2 className="font-bold text-lg"> Statistics </h2>
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-8">
               <div className="bg-violet text-white font-bold rounded-full flex flex-col justify-center items-center w-32 h-32 p-8 my-2 mr-2">
                    <span> {invoices} </span>
                    <span> Invoices </span>
                </div>
               <div className="bg-lavande text-white font-bold rounded-full flex flex-col justify-center items-center w-32 h-32 p-8 m-2">
                    <span> {contacts} </span>
                    <span> Contacts </span>
                </div>
               <div className="bg-pink text-white font-bold rounded-full flex flex-col justify-center items-center w-32 h-32 p-8 m-2">
                    <span> {companies} </span>
                    <span> Companies </span>
                </div>
          </div>
        </div>
    )
}

export default Statistics;