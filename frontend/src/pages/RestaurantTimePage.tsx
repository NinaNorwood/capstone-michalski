import {Link, useNavigate, useSearchParams} from "react-router-dom";
import Meeting from "../model/Meeting";
import MeetingCard from "../components/MeetingCard";
import Header from "../components/Header";

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
        <div>
            <Header/>
            <div className="pageLayout">
                <h4 onClick={navToBack}>&lt; back</h4>
                <h4>There is already someone waiting:</h4>
                <div className="cards">
                    {props.meetings
                        .filter((meeting) => meeting.meetingLocation.includes(thisRestaurant.get("restoId")!))
                        .map((meeting) =>
                    <MeetingCard key={meeting.meetingId} meeting={meeting}/>)}
                </div>
                <Link to={"/api/meetings/add?restoId=" + thisRestaurant.get("restoId")!}>
                  <button className="NoTimeButtons">None of this dates fit for me</button>
                </Link>
            </div>
        </div>


    )
}