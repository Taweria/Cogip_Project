import Axios from "axios";

export default function getUsers(){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/users/")
      .then(response => {
        const users = response.data;
        return users;
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        throw error;
      });
}