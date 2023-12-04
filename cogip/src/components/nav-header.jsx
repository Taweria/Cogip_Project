import HambergerMenu from "./hamberger-menu.jsx";

const NavHeader = () => {
    return (
        <nav className={"font-roboto md:flex md:w-full flex justify-between px-8 pt-3 mb-10"}>
            <h1 className={"text-2xl uppercase font-black md:w-1/6"}>cogip</h1>
            <div className={"md:flex md:justify-between md:w-full"}>
                <HambergerMenu/>
            </div>
        </nav>
    )
}

export default NavHeader;