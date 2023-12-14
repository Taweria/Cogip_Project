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

export function getContacts(){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/contacts/")
      .then(response => {
        const contacts = response.data;
        return contacts;
      })
      .catch(error => {
        console.error("Error fetching contacts:", error);
        throw error;
      });
}