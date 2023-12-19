import HamburgerMenu from "./hamburger-menu.jsx";
import Avatar from "./avatar.jsx";

const navDashboard = () => {
    const listNav = [
        {
            url: '/dashboard',
            content: 'Dashboard'
        },
        {
            url: '/dashboard/invoices',
            content: 'Invoices'
        },
        {
            url: '/dashboard/companies',
            content: 'Companies'
        },
        {
            url: '/dashboard/contacts',
            content: 'Contacts'
        },
    ];
    return (
        <div className={'h-screen w-1/4 '}>
            <div className={"w-1/6 h-full fixed bg-white"}>
                <nav className={"flex flex-col h-full"}>
                    <div id="profil" className={"w-20 flex flex-col"}>
                        <Avatar name={"name"}/>
                        <p>name</p>
                    </div>
                    <HamburgerMenu listNav={listNav} userLog={false}/>

                </nav>
            </div>
        </div>

    )
}

export default navDashboard;