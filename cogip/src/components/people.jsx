import React, { useState, useEffect } from 'react';
import {getContacts} from '../api/contacts.js';
import { Link } from 'react-router-dom';

const People = () => {
     const [contacts, setContacts] = useState([]);


    useEffect(() => {
        getContacts()
        .then((contacts) =>  setContacts(contacts))
        .catch((error) => console.error('Error fetching contacts:', error.message));
    }, [])

     return (
        <div className="flex w-10/12 flex-col md:flex-row md:flex-wrap md:gap-8">
            {Array.isArray(contacts.data) && contacts.data.length > 0 ? (
                contacts.data.map((contact) => (
                    <div className="bg-slate-100 w-11/12 rounded-xl flex flex-col justify-center items-center my-9 mx-auto md:mx-0 md:flex-row md:gap-8 md:w-2/12" key={contact.id}>
                        <Link to={`/showcontact/${contact.id}`}>
                            <img src={`https://ui-avatars.com/api/?name=${contact.name}&background=random`} alt="avatar" className="rounded-full w-18 h-18 mt-10 md:mt-0" />
                            <div className="flex gap-2 my-8 md:flex-col md:gap-0">
                                <p className="text-xl font-black font-roboto">{contact.name}</p>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                // insert spinner here
                <p>Loading...</p>
            )}
        </div>
    );
}

export default People;