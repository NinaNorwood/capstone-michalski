import {useEffect, useState} from "react";
import axios from "axios";
import meetingDTO from "../model/MeetingDTO";

export default function useMeetings () {

    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        getAllMeetings();
    }, [])

    const getAllMeetings = () => {
        axios.get("/api/meetings")
            .then(response => {
                return response.data
            })
            .then((meetings) => {
                setMeetings(meetings)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const addMeeting = (meetingLocation:string, userEmailOne:string) => {
        let newMeeting:meetingDTO = {
            meetingLocation : meetingLocation,
            meetingDate : "",
            meetingTime : "",
            userEmail1 : userEmailOne,
            userEmail2 : ""
        }

        axios.post("/api/meetings/add", newMeeting)
            .catch(error => {
                console.log(error)
            })
    }

    return {meetings, addMeeting}
}