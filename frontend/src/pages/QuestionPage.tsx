import {useEffect, useState} from "react";
import "./QuestionPage.css";
import {Link, useNavigate} from "react-router-dom";
import useQuestions from "../hooks/useQuestions";
import Game from "../model/Game";

type QuestionPageProps = {
    games : Game | undefined,
    deleteGame : (gameId:string) => void
}

export default function QuestionPage(props:QuestionPageProps) {

    const [round, setRound] = useState(0);
    const [turn, setTurn] = useState(0);
    const [quitRound, setQuitRound] = useState(false);
    const {questions, getRandomQuestion} = useQuestions();

    const navigateFinish = useNavigate();
    const navToFinish = () => {
        navigateFinish("/finish")
    }

    useEffect(()=> {
        getRandomQuestion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const nextRound = ((event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
        getRandomQuestion();
        playersTurn();
        setRound(round+1)})

    const playersTurn = () => {
        if(((turn+1) % (props.games?.players.length as number)) !== 0)
        {return setTurn(turn+1)
        } else {
            return setTurn(turn-(props.games?.players.length as number)+1)}
    }

    console.log(turn)
    console.log(round)
    console.log(props.games?.players.length)

    return(
        <div className="Test">
            <div onClick={() => setQuitRound(!quitRound)} className="Title-header">
                <h2 >Snoople</h2>
            </div>
            {quitRound && <div className="grey"></div> }
            {quitRound &&
                <div className="quitGame">
                <h4>You really want to leave the game?</h4>
                <Link to="/">
                <button className="quitButton" onClick={() => props.deleteGame(props.games?.gameId as string)}>Yes</button>
                </Link>
                <button className="quitButton" onClick={() => setQuitRound(!quitRound)}>Not yet</button>
            </div>}

            {round < (props.games?.maxRounds as number)  && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for {props.games?.players[turn]} </h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={nextRound}>Next</button>
            </article>}

            {round === (props.games?.maxRounds as number) && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for {props.games?.players[turn]}</h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={navToFinish}>Next</button>
            </article>}
        </div>
    )

}