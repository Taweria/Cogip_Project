import { Link } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from "react";

const HambergerMenu = () => {
    const listNav = [
        {
            url: '/home',
            content: 'Home'
        },
        {
            url: '/invoices',
            content: 'Invoices'
        },
        {
            url: '/companies',
            content: 'Companies'
        },
        {
            url: '/contact',
            content: 'Contacts'
        },
    ];

    const [isOpen, setOpen] = useState(false);

    return (
        <div className="md:flex md:justify-end">
            <div className="md:hidden bg-gray-100">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <ul className={`md:flex md:space-x-4 ${isOpen ? 'block border-b mb-3' : 'hidden'}`}>
                {listNav.map((item) => (
                    <li key={item.url} className={"px2 py-1 text-center hover:border"}>
                        <Link to={item.url}>{item.content}</Link>
                    </li>
                ))}
            </ul>
            <ul className={`md:flex md:space-x-4  ${isOpen ? 'block  mb-3' : 'hidden'}`}>
                <li className={"text-center px-2 py-1 bg-white rounded-xl "}><Link to={"/signUp"}>Sign up</Link></li>
                <li className={"text-center"}><Link to={"/login"}>Login</Link></li>
            </ul>
        </div>
    );
}

export default HambergerMenu;
