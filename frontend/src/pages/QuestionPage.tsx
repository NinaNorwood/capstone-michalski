import {useEffect, useState} from "react";
import "../styles/StyleAll.css";
import {useNavigate} from "react-router-dom";
import useQuestions from "../hooks/useQuestions";
import Game from "../model/Game";

type QuestionPageProps = {
    games : Game | undefined
}

export default function QuestionPage(props:QuestionPageProps) {

    const [round, setRound] = useState(0);
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

            {round === 1 && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for {props.games?.players[props.games.currentPlayer+1]}</h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={(event) =>
                {event.preventDefault();
                    getRandomQuestion();
                    setRound(round+1)}}>Next</button>
            </article>}

            {round === 2 && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for {props.games?.players[props.games.currentPlayer]}</h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={(event) =>
                {event.preventDefault();
                    setRound(round+1)}}>Next</button>
            </article>}

            {round === 3 && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for {props.games?.players[props.games.currentPlayer+1]}</h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={navToFinish}>Next</button>
            </article>}
        </div>
    )

}