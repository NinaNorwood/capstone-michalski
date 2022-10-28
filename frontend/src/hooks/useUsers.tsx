import axios from "axios";


export default function useUsers() {

    const addUser = (userName1:string, userName2:string) => {
        let newUser = {
            userName1: userName1,
            userName2: userName2
        }
        axios.post("/user", newUser)
            .then((response) => {return response.data})
            .catch(error => {console.log(error)})
    }

    return (
        {addUser}
    );
}