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
import Table from "./components/table.jsx";
import getData from "./api/getData.js";


const router = createBrowserRouter([
    {
        path: '/',
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
                <AllCompaniesTable />
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
