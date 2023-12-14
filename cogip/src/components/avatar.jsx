import React, { useState, useEffect, useMemo } from 'react';

const Avatar = (props) => {
    
    return (
         <>
            <img src={`https://ui-avatars.com/api/?name=${props.name}&background=random`} alt="avatar" className="rounded-full w-64 h-64 mt-10 md:mt-0" />
         </>
    )
}

export default Avatar;