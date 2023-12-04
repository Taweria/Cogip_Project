import {useEffect, useState} from "react";

export function useIsHome() {
    const location = window.location.href;
    const [size, setSize] = useState(window.innerWidth)
    const isHome = () => {
        return location === 'http://localhost:5173/' && size > 780
    }

    const [home, setHome] = useState(isHome())

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
            setHome(isHome());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, )

    return home
}