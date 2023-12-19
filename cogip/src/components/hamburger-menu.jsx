import {Link} from "react-router-dom";
import {Fade as Hamburger} from 'hamburger-react';
import {useEffect, useState} from "react";
import LoginModal from "./login_modal.jsx";
import Avatar from "./avatar.jsx";


const HamburgerMenu = ({listNav, userLog}) => {


    const [isOpen, setOpen] = useState(false);
    const [path, setPath] = useState('');
    const localHost = "http://localhost:5173";
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setPath(window.location.href)
    })
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const displayLogBtn = () => {
        return window.location.pathname === "/dashboard" ? "md:flex md:flex-col md:justify-between h-full" : "md:flex md:justify-between md:w-full font-medium"
    }

    const displayListNav = () => {
        if(window.location.pathname !== "/dashboard"){
            return `md:flex md:flex-wrap gap-2 md:space-x-5 md:h-10 md:w-2/3 font-roboto font-black ${isOpen ? 'block border-b  mb-3' : 'hidden'}`
        }else{
            return `md:flex md:flex-col md:border-b gap-3 items-center h-full`
        }
    }

    return (
        <div
            className={displayLogBtn()}>
            <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
            <ul className={displayListNav()}>
                {listNav.map((item) => (
                    <li key={item.url}
                        className={path === localHost + item.url ? "border border-black btn-link-default" : "border-none btn-link-default"}>
                        <Link to={item.url}>{item.content}</Link>
                    </li>
                ))}
            </ul>
            <ul className={`md:flex md:space-x-4  ${isOpen ? 'block  mb-3' : 'hidden'}`}>
                {userLog ? (
                    <>
                        <li className={"btn-link-default bg-white rounded-xl "}><Link to={"/signUp"}>Sign up</Link></li>
                        <li className={"btn-link-default"}>
                            <button onClick={openModal}> login</button>
                        </li>
                    </>

                ) : (

                    <li className={"btn-link-default rounded-xl w-full pt-10 flex items-center justify-between"}>
                        <div className={""}>
                            <Avatar name={"name"}/>
                        </div>
                        <Link to={"/signUp"} className={"font-inter text-lavande p-0"}>Logout</Link>
                    </li>
                )
                }

            </ul>
            {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={closeModal}/>}
        </div>
    );
}

export default HamburgerMenu;
