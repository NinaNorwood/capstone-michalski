import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";


type NewUserProps = {
    newUser : (name:string) => void
}

export default function NewUser (props:NewUserProps) {


    const [userName, setUserName] = useState("");

    const navigate = useNavigate();
    const navToQuestion = () => {
        navigate("/question")
    }

    const onNameChange = (event:ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }

    const submitNames = () => {
        props.newUser(userName)
        navToQuestion();

    }

    return(
        <section>
            <label>Player 1
                <input
                    value={userName}
                    placeholder="Enter Name"
                    onChange={onNameChange}
                />
            </label>
            <button onClick={submitNames}>Let's go</button>
        </section>
    )

}