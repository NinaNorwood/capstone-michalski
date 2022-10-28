import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";


type NewUserProps = {
    newUser : (userName1:string, userName2:string) => void
}

export default function NewUser (props:NewUserProps) {


    const [userName1, setUserName1] = useState("");
    const [userName2, setUserName2] = useState("");

    const navigate = useNavigate();
    const navToQuestion = () => {
        navigate("/question")
    }

    const onNameChange1 = (event:ChangeEvent<HTMLInputElement>) => {
        setUserName1(event.target.value)
    }

    const onNameChange2 = (event:ChangeEvent<HTMLInputElement>) => {
        setUserName2(event.target.value)
    }

    const submitNames = () => {
        props.newUser(userName1, userName2)
        navToQuestion();
    }

    return(
        <section>
            <label>Player 1
                <input
                    value={userName1}
                    placeholder="Enter Name"
                    onChange={onNameChange1}
                />
            </label>
            <label>Player 2
                <input
                    value={userName2}
                    placeholder="Enter Name"
                    onChange={onNameChange2}
                />
            </label>
            <button onClick={submitNames}>Let's go</button>
        </section>
    )

}