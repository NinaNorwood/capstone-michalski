import {Link} from "react-router-dom";

export default function Confirmation(){
    return(
        <section className="pageLayout">
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <div className="pageLayout2">
                <h3>Great, another snoople is awaiting you at this restaurant!</h3>
                 <h1>&hearts;</h1>
                <h3>Have fun</h3>
            </div>
    </section>
)
}