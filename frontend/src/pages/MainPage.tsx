import {useNavigate} from "react-router-dom";

export default function MainPage () {

    const navigateUser = useNavigate();
    const navToGamePage = () => {
        navigateUser("/api/game")
    }

    const navigateMeet = useNavigate();
    const navToMeeting = () => {
        navigateMeet("/api/restaurant")
    }

    return(
        <section>
            <button className="MainButtons" onClick={navToGamePage}>Snoople Now</button>
            <button className="MainButtons" onClick={navToMeeting}>Snoople Meet</button>
        </section>

    )
}