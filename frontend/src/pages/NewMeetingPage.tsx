import {ChangeEvent, useState} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import Header from "../components/Header";

type NewMeetingPageProps = {
    newMeeting: (meetingLocation:string, userEmailOne:string) => void
}

export default function NewMeetingPage(props:NewMeetingPageProps){

    const navigateBack = useNavigate()
    const navToBack = () => {
        navigateBack(-1)
    }

    const [userEmailOne, setUserEmailOne] = useState("");
    //const [meetingLocation, setMeetingLocation] = useState("");

    const onChangeEmail = (event:ChangeEvent<HTMLInputElement>) => {
        setUserEmailOne(event.target.value);
    }

    const [thisRestaurant] = useSearchParams()

    let meetingLocation:string = thisRestaurant.get("restoId")!;

    const submitNames = () => {
        props.newMeeting(meetingLocation, userEmailOne);
    }

    return(
        <div>
            <Header/>
        <section className="pageLayout">
                <h4 onClick={navToBack}>&lt; back</h4>
                <h3 className="pageLayout2">Enter your E-Mail address, so we can come back to you if we find another snoople</h3>
                <label>E-Mail
                    <input
                        value={userEmailOne}
                        placeholder="E-Mail"
                        onChange={onChangeEmail}/>
                </label>
                <Link to={"/api/email-confirmation"}>
                    <button className="NextButtons" onClick={submitNames}>Send</button>
                </Link>
            </section>
        </div>
    )

}