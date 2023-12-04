import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import WorkBetter from "./components/workbetter.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header/>
                <WorkBetter/>
                <Footer/>
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
