import useQuestions from "../hooks/useQuestions";
import QuestionBox from "../components/QuestionBox";


export default function QuestionPage () {

    const {questions} = useQuestions();

    return(
        <section>
            <QuestionBox questions={questions}/>
        </section>

    )
}