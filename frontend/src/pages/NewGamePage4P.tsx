import {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";
import "./NewGamePage.css";
import Game from "../model/Game";

type NewGameProps = {
    games : Game | undefined,
    newGame4 : (player1: string, player2: string, player3:string, player4:string) => void
}

export default function NewGamePage4P (props:NewGameProps) {

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [player3, setPlayer3] = useState("");
    const [player4, setPlayer4] = useState("");

    const onNameChange1 = (event:ChangeEvent<HTMLInputElement>) => {
        setPlayer1(event.target.value)
    }
    const onNameChange2 = (event:ChangeEvent<HTMLInputElement>) => {
        setPlayer2(event.target.value)
    }
    const onNameChange3 = (event:ChangeEvent<HTMLInputElement>) => {
        setPlayer3(event.target.value)
    }
    const onNameChange4 = (event:ChangeEvent<HTMLInputElement>) => {
        setPlayer4(event.target.value)
    }


    const submitNames = () => {
        props.newGame4(player1, player2, player3, player4)
    }

    return(
        <section>
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <Link to={"/amount"}>&lt; back</Link>
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
            <label>Player 3
                <input
                    value={player3}
                    placeholder="Enter Name"
                    onChange={onNameChange3}
                />
            </label>
            <label>Player 4
                <input
                    value={player4}
                    placeholder="Enter Name"
                    onChange={onNameChange4}
                />
            </label>
            <Link to={"/api/question/random"}>
                <button className="NextButtons" onClick={submitNames}>Let's go</button>
            </Link>
        </section>
    )

}