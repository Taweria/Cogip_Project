import HamburgerMenu from "./hamburger-menu.jsx";
import Avatar from "./avatar.jsx";

const navDashboard = () => {
    const listNav = [
        {
            url: '/dashboard',
            content: 'Dashboard',
            img: './src/assets/Icon_dashboard.svg'
        },
        {
            url: '/dashboard/invoices',
            content: 'Invoices',
            img: './src/assets/Icon_Invoices.svg'
        },
        {
            url: '/dashboard/companies',
            content: 'Companies',
            img:'./src/assets/Icon_Companies.svg'
        },
        {
            url: '/dashboard/contacts',
            content: 'Contacts',
            img:'./src/assets/Icon_contact.svg'
        },
    ];
    return (
        <div className={'h-screen w-1/4 '}>
            <div className={"w-1/6 h-full fixed bg-white"}>
                <nav className={"flex flex-col h-full"}>
                    <div id="profil" className={"flex flex-col mx-auto items-center gap-4 mt-8 mb-10 pb-2 border-b w-full h-1/5"}>
                        <Avatar name={"name"}/>
                        <p className={"font-roboto font-black"}>name</p>
                    </div>
                    <HamburgerMenu listNav={listNav} userLog={false}/>

                </nav>
            </div>
        </div>

    )
}

export default navDashboard;