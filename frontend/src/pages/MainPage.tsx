import {useNavigate} from "react-router-dom";
import "../styles/Buttons.css"
import "../styles/StyleAll.css"
import Header from "../components/Header";

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
            <Header/>
            <div className="pageLayout">
                <h3>Welcome 👋</h3>
                <div className="chooseMode">
                    <h4>Choose your mode</h4>
                </div>
                <button className="MainButtons" onClick={navToGamePage}>
                    <img className="cup" src={process.env.PUBLIC_URL + "/cup.png"} alt="cup"/>
                    Snoople Now</button>
                <button className="MainButtons" onClick={navToMeeting}>
                    <img className="cup" src={process.env.PUBLIC_URL + "/groupbig.png"} alt="groupbig"/>
                    Snoople Meet</button>
            </div>
        </section>

    )
}