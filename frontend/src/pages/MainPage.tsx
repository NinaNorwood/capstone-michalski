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
        <section>
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <button className="MainButtons" onClick={navToGamePage}>Snoople Now</button>
            <button className="MainButtons" onClick={navToMeeting}>Snoople Meet</button>
        </section>

    )
}