import {Link, useNavigate, useSearchParams} from "react-router-dom";
import Meeting from "../model/Meeting";
import MeetingCard from "../components/MeetingCard";

type RestaurantTimePageProps = {
    meetings : Meeting[]
}

export default function RestaurantTimePage(props:RestaurantTimePageProps) {

    const navigateBack = useNavigate()
    const navToBack = () => {
        navigateBack(-1)
    }

    const [thisRestaurant] = useSearchParams()
    console.log(thisRestaurant.get("restoId"))


    return (
        <div className="pageLayout">
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <h4 onClick={navToBack}>&lt; back</h4>
            <h4>There is already someone waiting:</h4>
            <div className="cards">
                {props.meetings
                    .filter((meeting) => meeting.meetingLocation.includes(thisRestaurant.get("restoId")!))
                    .map((meeting) =>
                <MeetingCard key={meeting.meetingId} meeting={meeting}/>)}
            </div>
            <button className="NoTimeButtons">None of this dates fit for me</button>
        </div>


    )
}