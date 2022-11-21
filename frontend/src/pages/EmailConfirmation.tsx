import {Link} from "react-router-dom";
import Header from "../components/Header";


export default function EmailConfirmation(){
    return(
        <div>
            <Header/>
            <section className="pageLayout">
                <div className="QuestionBoxes">
                    <h3>As soon as another snoople confirms your appointment, you will receive an email from us!</h3>
                    <h1>&hearts;</h1>
                </div>
                <Link to="/">
                    <button className="NextButtons">Back</button>
                </Link>
            </section>
        </div>
    )
}