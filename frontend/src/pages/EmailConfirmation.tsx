import {Link} from "react-router-dom";


export default function EmailConfirmation(){
    return(
        <section className="pageLayout">
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <div className="pageLayout2">
                <h3>As soon as another snoople confirms your appointment, you will receive an email from us!</h3>
                <h1>&hearts;</h1>
                <h3>See you next time</h3>
            </div>
            <Link to="/">
                <button className="NextButtons">Back</button>
            </Link>
        </section>
    )
}