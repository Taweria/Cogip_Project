import HambergerMenu from "./hamberger-menu.jsx";

const NavHeader = () => {
    return (
        <nav className={"font-roboto flex justify-between md:justify-normal md:w-full mx-5 mt-3"}>
            <h1 className={"text-2xl uppercase font-black"}>cogip</h1>
            <div className={"flex justify-between"}>
                <HambergerMenu/>
            </div>
        </nav>
    )
}

export default NavHeader;