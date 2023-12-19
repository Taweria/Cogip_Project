import Axios from "axios";

export function getInvoices(){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/invoices/")
        .then(response => {
            const invoices = response.data;
            return invoices;
        })
        .catch(error => {
            console.error("Error fetching contacts:", error);
            throw error;
        });
}