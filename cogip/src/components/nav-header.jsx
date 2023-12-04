import HambergerMenu from "./hamberger-menu.jsx";

const NavHeader = () => {
    return (
        <nav className={"font-roboto font-bold flex justify-between mx-5 mt-3"}>
            <h1 className={"text-2xl  "}>cogip</h1>
            <div className={"flex justify-between"}>
                <HambergerMenu/>
            </div>
        </nav>
    )
}

export default NavHeader;