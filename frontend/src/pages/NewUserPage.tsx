import NewUser from "../components/NewUser";
import useUsers from "../hooks/useUsers";


export default function NewUserPage () {

    const {addUser} = useUsers();


    return(
        <section>
            <NewUser newUser={addUser}/>
        </section>

    )
}