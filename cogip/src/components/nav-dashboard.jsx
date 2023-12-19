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
      <div>
          <nav>
              <div id="profil">
                  <Avatar name={"name"}/>
              </div>
              <div id="link">
                  <HamburgerMenu listNav={listNav}/>
              </div>
              <div id="logout"></div>
          </nav>
      </div>
  )
}

export default navDashboard;