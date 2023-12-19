import Statistics from "../components/statistics";
import LastContactsDashboard from "./lastContacts-dashboard";
import LastInvoicesDashboard from "./lastInvoices-dashboard";
import LastCompaniesDashboard from "./lastCompanies-dashboard";


const DashboardBody = () => {
    
    return (
        <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:p-8 md:mx-auto">
            <div className="w-6/12">
                <Statistics />
                <LastContactsDashboard />
            </div>
            <div className="w-6/12">
                <LastInvoicesDashboard />
                <LastCompaniesDashboard />
            </div>
        </div>
    )
}

export default DashboardBody;