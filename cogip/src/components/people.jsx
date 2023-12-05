import React, { useState, useEffect } from 'react';
import getAvatar from '../api/avatar.js';

const People = () => {
     const [avatar, setAvatar] = useState([]);

    useEffect(() => {
    getAvatar(name)
      .then((avatar) => setAvatar(avatar))
      .catch((error) => console.error('Error fetching avatar:', error.message));
    }, [name]);

    return (
         <div className="bg-slate-100 w-11/12 rounded-xl flex flex-col justify-center items-center my-9 mx-auto md:mx-0 md:flex-row md:gap-8 md:w-2/12">
            <img src={avatar} alt="avatar" className="rounded-full mt-10 md:mt-0" />
            <div className="flex gap-2 my-8 md:flex-col md:gap-0">
                <p className="text-xl font-black font-roboto">John</p>
                <p className="text-xl font-black font-roboto">Doe</p>
            </div>
         </div>
    )
}

export default People;