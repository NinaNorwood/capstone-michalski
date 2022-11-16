import {Link, useNavigate} from "react-router-dom";
import "../styles/Buttons.css"
import "../styles/StyleAll.css"

export default function MainPage () {

    const navigateUser = useNavigate();
    const navToGamePage = () => {
        navigateUser("/amount")
    }

    const navigateMeet = useNavigate();
    const navToMeeting = () => {
        navigateMeet("/api/restaurant")
    }

    return(
        <section className="pageLayout">
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <h3>Welcome 👋</h3>
            <div className="chooseMode">
                <h4>Choose your mode</h4>
            </div>
            <button className="MainButtons" onClick={navToGamePage}>Snoople Now</button>
            <button className="MainButtons" onClick={navToMeeting}>Snoople Meet</button>
        </section>

    )
}