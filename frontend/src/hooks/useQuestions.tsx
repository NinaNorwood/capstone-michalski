import {useEffect, useState} from "react";
import axios from "axios";
import Question from "../model/Question";

export default function useQuestions() {

    const [questions, setQuestions] = useState<Question>();

    useEffect(() => {
        axios.get("/question")
            .then(response => response.data)
            .then((questions) => {setQuestions(questions)})
            .catch(error => {console.log(error)})
    },[])

    return (
        {questions}
    );
}