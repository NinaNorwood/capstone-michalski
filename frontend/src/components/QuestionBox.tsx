import {useState} from "react";
import "../styles/StyleAll.css";
import {useNavigate} from "react-router-dom";
import useQuestions from "../hooks/useQuestions";

export default function QuestionBox() {

    const [round, setRound] = useState(0);
    const {questions} = useQuestions();

    const navigateFinish = useNavigate();
    const navToFinish = () => {
        navigateFinish("/finish")
    }

    return(
        <div>
            {round === 0 && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for ...</h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={(event) =>
                {event.preventDefault();
                setRound(round+1)}}>Next</button>
            </article>}

            {round === 1 && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for ...</h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={(event) =>
                {event.preventDefault();
                    setRound(round+1)}}>Next</button>
            </article>}

            {round === 2 && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for ...</h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={(event) =>
                {event.preventDefault();
                    setRound(round+1)}}>Next</button>
            </article>}

            {round === 3 && <article>
                <section className="QuestionBoxes">
                    <h4 className="QuestionBoxes-Top">Question for ...</h4>
                    <h4>{questions?.questionText}</h4>
                </section>
                <button className="NextButtons" onClick={navToFinish}>Next</button>
            </article>}
        </div>
    )

}