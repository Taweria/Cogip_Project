import SelectCompanies from "./select-companies";
import { useEffect, useState } from "react";
import { getInvoice } from "../api/getInvoices.js";
import { useParams } from "react-router-dom";

const FormInvoice = () => {
    const [invoice, setInvoice] = useState({});
    const id = useParams();

    useEffect(() => {
        getInvoice(id)
        .then((invoice) =>  setInvoice(invoice.data))
        .catch((error) => console.error('Error fetching invoice:', error.message));
    }, [id]);

    return (
        <div className="bg-white rounded-md shadow-md shadow-gray-200 w-11/12 mx-auto pt-16">
            <h2 className="font-inter text-xl font-bold border-b-2 border-slate-100 pb-4 mx-6 mt-4">New Invoice</h2>
            <form className="flex flex-col pt-8 px-6">
                <input type="text" name="reference" placeholder="Reference" value={invoice.ref} className="bg-bg-dashboard p-4 m-4 rounded-md" />
                <input type="text" name="price" placeholder="Price" className="bg-bg-dashboard p-4 m-4 rounded-md" />
                <SelectCompanies/>
                <button type="submit" className="bg-lavande text-white flex flex-col justify-start items-start p-4 m-2"> Save </button>
            </form>
        </div>
    )
}

export default FormInvoice;