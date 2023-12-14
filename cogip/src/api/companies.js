import Axios from "axios";

export function getCompany(id){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/companies/"+id)
      .then(response => {
        const company = response.data;
        return company;
      })
      .catch(error => {
        console.error("Error fetching company:", error);
        throw error;
      });
}