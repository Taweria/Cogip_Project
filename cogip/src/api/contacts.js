import Axios from "axios";

export function getContact(id){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/contacts/"+id)
      .then(response => {
        const contact = response.data;
        return contact;
      })
      .catch(error => {
        console.error("Error fetching contact:", error);
        throw error;
      });
}