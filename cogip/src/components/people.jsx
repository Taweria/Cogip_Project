import React, { useState, useEffect, useMemo } from 'react';
import getAvatar from '../api/getAvatar.js';
import getUsers from '../api/Users.js';

const People = () => {
     const [avatar, setAvatar] = useState([]);
     const [users, setUsers] = useState([]);

    // generate random string for avatar -> TO CHANGE LATER
    const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function generateString(length) {
        let result = " ";
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }

    // generate only one image per reload
     const name = useMemo(() => {
        return generateString(10);
    }, [])

    useEffect(() => {
    getAvatar(name)
      .then((avatar) => setAvatar(avatar))
      .catch((error) => console.error('Error fetching avatar:', error.message));
    }, [name]);

    useEffect(() => {
        getUsers()
        .then((users) =>  setUsers(users))
        .catch((error) => console.error('Error fetching users:', error.message));
    }, [])

     return (
        <div className="flex w-10/12 flex-col md:flex-row md:flex-wrap md:gap-8">
            {Array.isArray(users.data) && users.data.length > 0 ? (
                users.data.map((user) => (
                    <div className="w-11/12 rounded-xl flex flex-col justify-center items-center my-9 mx-auto md:mx-0 md:flex-row md:gap-8 md:w-2/12" key={user.id}>
                        <img src={`https://ui-avatars.com/api/?name=${user.first_name}&background=random`} alt="avatar" className="rounded-full w-18 h-18 mt-10 md:mt-0" />
                        <div className="flex gap-2 my-8 md:flex-col md:gap-0">
                            <p className="text-xl font-black font-roboto">{user.first_name}</p>
                            <p className="text-xl font-black font-roboto">{user.last_name}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default People;