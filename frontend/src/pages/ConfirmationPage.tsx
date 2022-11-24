import {Link} from "react-router-dom";
import Header from "../components/Header";

export default function Confirmation(){
    return(
        <div>
            <Header/>
            <section className="pageLayout">
                <div className="QuestionBoxes">
                    <h3>Great, another snoople is awaiting you at this restaurant!</h3>
                     <h1>&hearts;</h1>
                    <h3>Have fun</h3>
                </div>
                <Link to="/">
                    <button className="NextButtons">Back</button>
                </Link>
            </section>
        </div>
)
}