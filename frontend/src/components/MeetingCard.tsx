import {Link} from "react-router-dom";
import Meeting from "../model/Meeting";


type MeetingCardProps = {
    meeting : Meeting
}

export default function MeetingCard(props:MeetingCardProps) {

    return (
        <div>
            <Link to={"/api/confirmation"}>
                <button className="TimeButtons">{props.meeting.meetingDate} <br/>{props.meeting.meetingTime}</button>
            </Link>
        </div>
    )

}