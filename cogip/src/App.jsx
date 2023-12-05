import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import WorkBetter from "./components/workbetter.jsx";
import LastInvoices from "./components/lastInvoices.jsx";
import LastContacts from "./components/lastContacts.jsx";
import LastCompanies from "./components/lastCompanies.jsx";


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
