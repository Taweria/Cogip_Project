import { Link } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto' },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="md:flex md:justify-between md:w-full font-medium">
            <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className="md:flex md:space-x-4 block border-b mb-3"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {listNav.map((item) => (
                            <motion.li
                                key={item.url}
                                className="btn-link-default hover:border hover:border-black"
                                variants={itemVariants}
                            >
                                <Link to={item.url}>{item.content}</Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className="md:flex md:space-x-4 block mb-3"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.li className="btn-link-default bg-white rounded-xl" variants={itemVariants}>
                            <Link to="/signUp">Sign up</Link>
                        </motion.li>
                        <motion.li className="btn-link-default" variants={itemVariants}>
                            <Link to="/login">Login</Link>
                        </motion.li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HamburgerMenu;
