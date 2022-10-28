import Question from "../model/Question";

type QuestionsBoxProps = {
    questions : Question[];
}

export default function QuestionBox(props:QuestionsBoxProps) {


    function getRandomQuestion (questions: Question[]) {
        return questions[Math.floor(Math.random()*questions.length)]
    }

    const randomQuestion:Question = getRandomQuestion(props.questions);

    return(
        <div>
            <h3>{randomQuestion?.questionText}</h3>

        </div>
    )

}