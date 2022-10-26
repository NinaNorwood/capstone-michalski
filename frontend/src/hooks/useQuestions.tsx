import {useEffect, useState} from "react";
import axios from "axios";

export default function useQuestions() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get("/question")
            .then(response => {return response.data})
            .then((questions) => {setQuestions(questions)})
            .catch(error => {console.log(error)})
    },[])

    return (
        {questions}
    );
}