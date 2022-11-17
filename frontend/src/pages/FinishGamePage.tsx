import {Link, useNavigate} from "react-router-dom";
import Game from "../model/Game";

type FinishGamePageProps = {
    games : Game | undefined,
    deleteGame : (gameId:string) => void
}

export default function FinishGamePage (props:FinishGamePageProps) {

    const navigateGame = useNavigate();
    const navToGame = () => {
        navigateGame("/api/question/random")
    }

    return(
        <section className="pageLayout">
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <section className="QuestionBoxes">
                <h3>We hope you had fun!</h3>
                <h4>See you next time</h4>
                <h2>&hearts;</h2>
            </section>
            <button className="NextButtons" onClick={navToGame}>Another round</button>
            <Link to="/">
                 <button className="NextButtons" onClick={() => props.deleteGame(props.games?.gameId as string)}>We're done</button>
            </Link>
        </section>

    )
}