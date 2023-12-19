import TableDashboard from "../components/table-dashboard";
import {useEffect, useState} from "react";
import {getCompanies} from "../api/companies.js";
import { useParams } from "react-router-dom";

const LastCompaniesDashboard = () => {
    const [companies, setCompanies] = useState([]);
    const loading = false;
    const tableKey = ['name', 'tva', 'country'];
    const tableHead = ['Name', 'TVA', 'Country'];
    const id = useParams();

    useEffect(() => {
        getCompanies()
        .then((companies) =>  setCompanies(companies.data.slice(0, 5)))
        .catch((error) => console.error('Error fetching companies:', error.message));
    }, []);


    return (
        <div className="w-full md:w-11/12 mt-16 p-4 rounded-md font-inter shadow-md shadow-gray-200 bg-white">
            <h2 className="font-inter mx-6 mb-6 font-bold text-xl border-b-2 border-slate-100 pb-4"> Last Companies </h2>
            <TableDashboard data={companies} loading={loading} tableKey={tableKey} tableHead={tableHead} link={`newcompany`}/>
        </div>
    )
}

export default LastCompaniesDashboard;