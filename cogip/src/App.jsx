import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import WorkBetter from "./components/workbetter.jsx";
import LastInvoices from "./components/lastInvoices.jsx";
import LastContacts from "./components/lastContacts.jsx";
import LastCompanies from "./components/lastCompanies.jsx";
import ContactPeople from "./layouts/contactPeople.jsx";
import InfosCompany from "./layouts/infosCompany.jsx";


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
    }
])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
