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
    const [quitRound, setQuitRound] = useState(false);
    const {questions, getRandomQuestion} = useQuestions();

    const navigateFinish = useNavigate();
    const navToFinish = () => {
        navigateFinish("/finish")
    }

    console.log(props.games);

    useEffect(()=> {
        getRandomQuestion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div>
            <div onClick={() => setQuitRound(!quitRound)} className="Title-header">
                <h2 >Snoople</h2>
            </div>
            {quitRound && <div className="quitGame" >
                <h4>You really want to leave the game?</h4>
                <Link to="/">
                <button className="quitButton" onClick={() => props.deleteGame(props.games?.gameId as string)}>Yes</button>
                </Link>
                <button className="quitButton" onClick={() => setQuitRound(!quitRound)}>No</button>
                </div>}

            {round === 0 && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for {props.games?.players[props.games.currentPlayer]} </h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={(event) =>
                {event.preventDefault();
                    getRandomQuestion();
                setRound(round+1)}}>Next</button>
            </article>}

            {((round === 1) || (round === 3) || (round === 5) || (round === 7))  && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for {props.games?.players[props.games.currentPlayer+1]}</h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={(event) =>
                {event.preventDefault();
                    getRandomQuestion();
                    setRound(round+1)}}>Next</button>
            </article>}

            {((round === 2) || (round === 4) || (round === 6) || (round === 8)) && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for {props.games?.players[props.games.currentPlayer]}</h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={(event) =>
                {event.preventDefault();
                    getRandomQuestion();
                    setRound(round+1)}}>Next</button>
            </article>}

            {round === 9 && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for {props.games?.players[props.games.currentPlayer+1]}</h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={navToFinish}>Next</button>
            </article>}
        </div>
    )

}