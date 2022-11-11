import {useNavigate} from "react-router-dom";

export default function FinishGamePage () {

    const navigateGame = useNavigate();
    const navToGame = () => {
        navigateGame("/api/question/random")
    }

    const navigateHome = useNavigate();
    const navToHome = () => {
        navigateHome("/")
    }

    return(
        <section>
            <section className="QuestionBoxes">
                <h3>We hope you had fun!</h3>
                <h4>See you next time</h4>
                <h2>&hearts;</h2>
            </section>
            <button className="NextButtons" onClick={navToGame}>Another round</button>
            <button className="NextButtons" onClick={navToHome}>We're done</button>
        </section>

    )
}