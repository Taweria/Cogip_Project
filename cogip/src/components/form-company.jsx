import SelectCompanies from "./select-companies";
import { useEffect, useState } from "react";
import { getCompany } from "../api/companies.js";
import { useParams } from "react-router-dom";

const FormCompany = () => {
    const [company, setCompany] = useState({});
    const id = useParams();

    useEffect(() => {
        getCompany(id.id)
        .then((company) =>  setCompany(company.data))
        .catch((error) => console.error('Error fetching company:', error.message));
    }, [id]);

    return (
        <div className="bg-white rounded-md shadow-md shadow-gray-200 w-11/12 mx-auto pt-16">
            <h2 className="font-inter text-xl font-bold border-b-2 border-slate-100 pb-4 mx-6 mt-4">New Company</h2>
            <form className="flex flex-col pt-8 px-6">
                <input type="text" name="name" placeholder="Name" value={company.name} className="bg-bg-dashboard p-4 m-4 rounded-md" />
                <input type="text" name="tva" placeholder="TVA" value={company.tva} className="bg-bg-dashboard p-4 m-4 rounded-md" />
                <input type="text" name="country" placeholder="Country" value={company.country} className="bg-bg-dashboard p-4 m-4 rounded-md" />
                <button type="submit" className="bg-lavande text-white flex flex-col justify-start items-start p-4 m-2"> Save </button>
            </form>
        </div>
    )
}

export default FormCompany;