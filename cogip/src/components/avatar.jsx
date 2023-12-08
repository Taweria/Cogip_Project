import React, { useState, useEffect, useMemo } from 'react';
import getAvatar from '../api/getAvatar.js';

const Avatar = () => {
     const [avatar, setAvatar] = useState([]);

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

   
    
    return (
         <>
            <img src={`data:image/svg+xml,${encodeURIComponent(avatar)}`} alt="avatar" className="rounded-full w-full h-full" />
         </>
    )
}

export default Avatar;