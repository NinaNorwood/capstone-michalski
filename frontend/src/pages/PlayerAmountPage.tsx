import {Link} from "react-router-dom";

export default function PlayerAmountPage () {

    return(
        <section>
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <Link to={"/"}>&lt; back</Link>
            <h3>How many players?</h3>
            <div className="AmountTable">
                <Link to="/api/game2">
                    <button className="AmountButtons">2</button>
                </Link>
                <Link to="/api/game3">
                    <button className="AmountButtons">3</button>
                </Link>
                <Link to="/api/game4">
                    <button className="AmountButtons">4</button>
                </Link>
                <Link to="/api/game5">
                    <button className="AmountButtons">5</button>
                </Link>
                <Link to="/api/game6">
                    <button className="AmountButtons">6</button>
                </Link>
            </div>
        </section>

    )
}