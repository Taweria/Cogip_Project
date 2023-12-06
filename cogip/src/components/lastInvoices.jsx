import manager from '../assets/manager.svg';

const LastInvoices = () => {
    return (
         <div className="w-full mt-16">
             <h2 className="text-6xl font-black my-16 mx-12 md:mx-24 font-inter">Last invoices</h2>
             <div className="flex justify-center">
                 <table className="w-11/12 py-6 mx-24 font-roboto font-semibold">
                     <thead className="bg-yellow">
                        <tr>
                            <td>Invoice number</td>
                            <td>Dates due</td>
                            <td>Company</td>
                            <td>Created at</td>
                        </tr>
                     </thead>
                     <tbody className="w-11/12">
                         <tr>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                         </tr>
                          <tr className="bg-slate-100">
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                         </tr>
                          <tr >
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                         </tr>
                          <tr className="bg-slate-100">
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                         </tr>
                          <tr >
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                         </tr>
                     </tbody>
                 </table>
             </div>
             <div className="relative">
                <img src={manager} alt="manager" className={"absolute right-0 mt-16 " + (window.location.pathname == "/" ? "" : "opacity-0") } />
            </div>
        </div>
    )
}

export default LastInvoices;