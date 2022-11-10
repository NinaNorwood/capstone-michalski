import {useState} from "react";
import axios from "axios";
import Question from "../model/Question";

export default function useQuestions() {

    const [questions, setQuestions] = useState<Question>();

    function getRandomQuestion () {
        axios.get("/question")
            .then(response => {return response.data})
            .then((questions) => {setQuestions(questions)})
            .catch(error => {console.log(error)})
    }

    return (
        {questions, getRandomQuestion}
    );
}