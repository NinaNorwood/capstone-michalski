import NewGame from "../components/NewGame";
import useGame from "../hooks/useGame";
import {Link} from "react-router-dom";

export default function NewGamePage () {

    const {addName} = useGame();

    return(
        <section>
            <Link to={"/"}>&lt; back</Link>
            <NewGame newGame={addName}/>
        </section>

    )
}