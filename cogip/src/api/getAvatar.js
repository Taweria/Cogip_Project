import Axios from "axios";

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