import Axios from "axios";

// name = contact name from db

export default function getAvatar(name){
    return Axios.get("https://api.multiavatar.com/" + name)
      .then(response => {
        const avatar = response.data;
        return avatar;
      })
      .catch(error => {
        console.error("Error fetching avatar:", error);
        throw error;
      });
  }