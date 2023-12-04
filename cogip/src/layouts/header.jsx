import NavHeader from "../components/nav-header.jsx";

const Header = () => {
    return (
        <>
            <header className={"bg-yellow"}>
            <NavHeader/>
                <svg className={"w-11/12 mx-auto relative -bottom-1"} viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
                </svg>
            </header>
        </>
    )
}

export default Header;