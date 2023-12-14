import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import WorkBetter from "./components/workbetter.jsx";
import LastInvoices from "./layouts/lastInvoicesTable.jsx";
import LastContacts from "./layouts/lastContactsTable.jsx";
import LastCompanies from "./layouts/lastCompaniesTable.jsx";
import ContactPeople from "./layouts/contactPeople.jsx";
import InfosCompany from "./layouts/infosCompany.jsx";
import Page404 from "./pages/Page404.jsx";
import DynamicTitle from "./components/dynamic-title.jsx";
import AllInvoiceTable from "./layouts/allInvoicesTable.jsx";
import AllContactsTable from "./layouts/allContactsTable.jsx";
import AllCompaniesTable from "./layouts/allCompaniesTable.jsx";
import InfosContact from "./layouts/infosContact.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        errorElement:<Page404/>,
        element: (
            <>
                <Header />
                <LastInvoices />
                <LastContacts />
                <LastCompanies />
                <WorkBetter />
                <Footer />
            </>
        ),
    },

    {
         path: '/showcompany',
        errorElement:<Page404/>,
        element: (
            <>
                <Header />
                <InfosCompany name="Pied Pipper" tva="BE87 876 767 565" country="Belgium" type="Supplier"/>
                <ContactPeople />
                <LastInvoices />
                <Footer />
            </>
        ),
    },

    {
         path: '/invoices',
        errorElement:<Page404/>,
        element: (
            <>
                <Header />
                <AllInvoiceTable />
                <Footer />
            </>
        ),
    },

    {
         path: '/contact',
        errorElement:<Page404/>,
        element: (
            <>
                <Header />
                <DynamicTitle title="All contacts"/>
                <AllContactsTable />
                <Footer />
            </>
        ),
    },

    {
         path: '/companies',
        errorElement:<Page404/>,
        element: (
            <>
                <Header />
                <DynamicTitle title="All companies"/>
                <InfosCompany name="Pied Pipper" tva="BE87 876 767 565" country="Belgium" type="Supplier"/>
                <AllCompaniesTable />
                <Footer />
            </>
        ),
    },

    {
         path: '/showcontact',
        element: (
            <>
                <Header />
                <InfosContact contact="Jane Smith" phone="0476 76 76 76" mail="smith@gmail.com" company="Pied Pipper"/>
                <Footer />
            </>
        ),
    },

    {
         path: '*',
        element: (
            <>
                <Header />
                <Page404 />
                <Footer />
            </>
        ),
    },
])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
