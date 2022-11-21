import {Link} from "react-router-dom";
import Header from "../components/Header";

export default function PlayerAmountPage () {

    return(
        <section>
            <Header/>
            <div className="pageLayout">
                <Link to={"/"}>&lt; back</Link>
                <h3>How many players?</h3>
                <div className="AmountTable">
                    <Link to="/api/game?playerCount=2" >
                        <button className="AmountButtons">2</button>
                    </Link>
                    <Link to="/api/game?playerCount=3">
                        <button className="AmountButtons">3</button>
                    </Link>
                    <Link to="/api/game?playerCount=4">
                        <button className="AmountButtons">4</button>
                    </Link>
                    <Link to="/api/game?playerCount=5">
                        <button className="AmountButtons">5</button>
                    </Link>
                    <Link to="/api/game?playerCount=6">
                        <button className="AmountButtons">6</button>
                    </Link>
                </div>
            </div>
        </section>

    )
}