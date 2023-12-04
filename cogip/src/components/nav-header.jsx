import {Link} from "react-router-dom"

const NavHeader = () => {
  return(
      <nav className={"font-roboto"}>
            <h1 className={"text-2xl font-bold "}>cogip</h1>
            <div>
                <ul>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/invoices"}>Invoices</Link> </li>
                    <li><Link to={"/companies"}>Companies</Link></li>
                    <li><Link to={"/contacts"}>Contacts</Link></li>
                </ul>
            </div>
      </nav>
  )
}

export default NavHeader;