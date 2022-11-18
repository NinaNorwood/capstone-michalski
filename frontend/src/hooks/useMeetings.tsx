import {useEffect, useState} from "react";
import axios from "axios";

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

    return {meetings}
}