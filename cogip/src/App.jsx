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
import LoginModal from "./components/login_modal.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <LoginModal />
                <LastInvoices />
                <LastContacts />
                <LastCompanies />
                <WorkBetter />
                <Footer />
            </>
        ),
    },

    {
         path: '/showcompany/:id',
        element: (
            <>
                <Header />
                <InfosCompany/>
                <ContactPeople />
                <LastInvoices />
                <Footer />
            </>
        ),
    },

    {
         path: '/invoices',
        element: (
            <>
                <Header />
                <DynamicTitle title="All invoices"/>
                <AllInvoiceTable />
                <Footer />
            </>
        ),
    },

    {
         path: '/contact',
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
         path: '/showcontact/:id',
        element: (
            <>
                <Header />
                <InfosContact/>
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
