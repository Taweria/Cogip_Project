import TableDashboard from "../components/table-dashboard";
import {useEffect, useState} from "react";
import {getInvoices} from "../api/getInvoices.js";
import { useParams } from "react-router-dom";

const LastInvoicesDashboard = () => {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(false);
    const tableKey = ['ref', 'due_at', 'name'];
    const tableHead = ['Invoice Number', 'Dates', 'Company'];
    const id = useParams();

    useEffect(() => {
        getInvoices()
        .then((invoices) => {
            setInvoices(invoices.data.slice(0, 5))
            setLoading(true)
        })
        .catch((error) => {
            console.error('Error fetching invoices:', error.message)
            setLoading(false)
        });
    }, []);

    return (
        <div className="w-full md:w-11/12 p-4 rounded-md font-inter shadow-md shadow-gray-200 bg-white">
            <h2 className="font-inter mx-6 mb-6 font-bold text-xl border-b-2 border-slate-100 pb-4"> Last Invoices </h2>
            <TableDashboard data={invoices} loading={loading} tableKey={tableKey} tableHead={tableHead} link={`new-invoice`}/>
        </div>
    )
}

export default LastInvoicesDashboard;