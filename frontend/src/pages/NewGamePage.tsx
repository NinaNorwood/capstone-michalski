import {ChangeEvent, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import "./NewGamePage.css";
import Game from "../model/Game";

type NewGameProps = {
    games : Game | undefined,
    newGame2 : (player1: string, player2: string) => void
    newGame3 : (player1: string, player2: string, player3:string) => void
    newGame4 : (player1: string, player2: string, player3:string, player4:string) => void
    newGame5 : (player1: string, player2: string, player3:string, player4:string, player5:string) => void
    newGame6 : (player1: string, player2: string, player3:string, player4:string, player5:string, player6:string) => void
}

export default function NewGamePage (props:NewGameProps) {

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [player3, setPlayer3] = useState("");
    const [player4, setPlayer4] = useState("");
    const [player5, setPlayer5] = useState("");
    const [player6, setPlayer6] = useState("");

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
    const onNameChange5 = (event:ChangeEvent<HTMLInputElement>) => {
        setPlayer5(event.target.value)
    }
    const onNameChange6 = (event:ChangeEvent<HTMLInputElement>) => {
        setPlayer6(event.target.value)
    }

    const [buttonValue] = useSearchParams()

    const submitNames = () => {
        if(buttonValue.get("playerCount") === "2") {
            props.newGame2(player1, player2)}
        if(buttonValue.get("playerCount") === "3") {
            props.newGame3(player1, player2, player3)}
        if(buttonValue.get("playerCount") === "4") {
            props.newGame4(player1, player2, player3, player4)}
        if(buttonValue.get("playerCount") === "5") {
            props.newGame5(player1, player2, player3, player4, player5)}
        if(buttonValue.get("playerCount") === "6") {
            props.newGame6(player1, player2, player3, player4, player5, player6)}
    }

    return(
        <section className="pageLayout">
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <Link to={"/amount"}>&lt; back</Link>
            <h3>Enter your names</h3>
            <label>Player 1
                <input
                    value={player1}
                    placeholder="Enter Name"
                    onChange={onNameChange1}/>
            </label>
            <label>Player 2
                <input
                    value={player2}
                    placeholder="Enter Name"
                    onChange={onNameChange2}/>
            </label>
            {buttonValue.get("playerCount") === "3"  &&
                <label>Player 3
                <input
                    value={player3}
                    placeholder="Enter Name"
                    onChange={onNameChange3}/>
            </label>}
            {buttonValue.get("playerCount") === "4"  &&
                <div>
                    <label>Player 3
                        <input
                            value={player3}
                            placeholder="Enter Name"
                            onChange={onNameChange3}/>
                    </label>
                    <label>Player 4
                    <input
                        value={player4}
                        placeholder="Enter Name"
                        onChange={onNameChange4}/>
                </label>
                </div>}
            {buttonValue.get("playerCount") === "5"  &&
                <div>
                    <label>Player 3
                        <input
                            value={player3}
                            placeholder="Enter Name"
                            onChange={onNameChange3}/>
                    </label>
                    <label>Player 4
                        <input
                            value={player4}
                            placeholder="Enter Name"
                            onChange={onNameChange4}/>
                    </label>
                    <label>Player 5
                        <input
                            value={player5}
                            placeholder="Enter Name"
                            onChange={onNameChange5}/>
                    </label>
                </div>}
            {buttonValue.get("playerCount") === "6"  &&
                <div>
                    <label>Player 3
                        <input
                            value={player3}
                            placeholder="Enter Name"
                            onChange={onNameChange3}/>
                    </label>
                    <label>Player 4
                        <input
                            value={player4}
                            placeholder="Enter Name"
                            onChange={onNameChange4}/>
                    </label>
                    <label>Player 5
                        <input
                            value={player5}
                            placeholder="Enter Name"
                            onChange={onNameChange5}/>
                    </label>
                    <label>Player 6
                        <input
                            value={player6}
                            placeholder="Enter Name"
                            onChange={onNameChange6}/>
                    </label>
                </div>}
            <Link to={"/api/question/random"}>
                <button className="NextButtons" onClick={submitNames}>Let's go</button>
            </Link>
        </section>
    )

}