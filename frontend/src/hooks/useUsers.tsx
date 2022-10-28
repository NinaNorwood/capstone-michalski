import axios from "axios";


export default function useUsers() {

    const addUser = (userName:string) => {
        let newUser = {
            userName: userName
        }
        axios.post("/user", newUser)
            .then((response) => {return response.data})
            .catch(error => {console.log(error)})
    }

    return (
        {addUser}
    );
}