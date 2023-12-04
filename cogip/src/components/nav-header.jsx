import HamburgerMenu from "./hamberger-menu.jsx";
import {motion} from "framer-motion";

const NavHeader = () => {
    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{
                duration: 1,
                type: 'spring',
                ease: 'easeIn'
            }}
            className={"font-roboto md:flex md:w-full flex justify-between px-8 pt-3 mb-10"}>
            <h1 className={"text-2xl uppercase font-black md:w-1/6"}>cogip</h1>
            <div className={"md:flex md:justify-between md:w-full"}>
                <HamburgerMenu/>
            </div>
        </motion.nav>
    )
}

export default NavHeader;