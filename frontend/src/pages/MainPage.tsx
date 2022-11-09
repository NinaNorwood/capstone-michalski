import {useNavigate} from "react-router-dom";

export default function MainPage () {

    const navigateUser = useNavigate();
    const navToGamePage = () => {
        navigateUser("/game")
    }

    const navigateMeet = useNavigate();
    const navToMeeting = () => {
        navigateMeet("/search-meeting")
    }

    return(
        <section>
            <button className="MainButtons" onClick={navToGamePage}>Snoople Now</button>
            <button className="MainButtons" onClick={navToMeeting}>Snoople Meet</button>
        </section>

    )
}