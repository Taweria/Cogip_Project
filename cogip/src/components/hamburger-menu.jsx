import { Link } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from "react";


const HamburgerMenu = () => {
    const listNav = [
        {
            url: '/',
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
        <div

            className="md:flex md:justify-between md:w-full font-medium">
            <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <ul className={`md:flex md:space-x-4 ${isOpen ? 'block border-b  mb-3' : 'hidden'}`}>
                {listNav.map((item) => (
                    <li key={item.url} className={"btn-link-default hover:border hover:border-black"}>
                        <Link to={item.url}>{item.content}</Link>
                    </li>
                ))}
            </ul>
            <ul className={`md:flex md:space-x-4  ${isOpen ? 'block  mb-3' : 'hidden'}`}>
                <li className={"btn-link-default bg-white rounded-xl "}><Link to={"/signUp"}>Sign up</Link></li>
                <li className={"btn-link-default"}><Link to={"/login"}>Login</Link></li>
            </ul>
        </div>
    );
}

export default HamburgerMenu;
