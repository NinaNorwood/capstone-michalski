import {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";
import "./NewGamePage.css";

type NewGameProps = {
    newGame : (player1: string, player2: string) => void
}

export default function NewGamePage (props:NewGameProps) {

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    const onNameChange1 = (event:ChangeEvent<HTMLInputElement>) => {
        setPlayer1(event.target.value)
    }

    const onNameChange2 = (event:ChangeEvent<HTMLInputElement>) => {
        setPlayer2(event.target.value)
    }

    const submitNames = () => {
        props.newGame(player1, player2)
    }


    return(
        <section>
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <Link to={"/"}>&lt; back</Link>
            <h3>Enter your names</h3>
            <label>Player 1
                <input
                    value={player1}
                    placeholder="Enter Name"
                    onChange={onNameChange1}
                />
            </label>
            <label>Player 2
                <input
                    value={player2}
                    placeholder="Enter Name"
                    onChange={onNameChange2}
                />
            </label>
            <Link to={"/api/question/random"}>
            <button className="NextButtons" onClick={submitNames}>Let's go</button>
            </Link>
        </section>
    )

}