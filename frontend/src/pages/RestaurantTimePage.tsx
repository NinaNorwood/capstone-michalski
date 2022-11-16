import {Link, useNavigate} from "react-router-dom";


export default function RestaurantTimePage() {

    const navigateBack = useNavigate()
    const navToBack = () => {
        navigateBack(-1)
    }

    return (
        <div className="pageLayout">
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <h4 onClick={navToBack}>&lt; back</h4>
            <h3>There is already someone waiting:</h3>
            <button className="TimeButtons">Tuesday, 15th of November <br/> at 6:00 pm</button>
            <button className="TimeButtons">Tuesday, 15th of November <br/> at 8:00 pm</button>
            <button className="TimeButtons">Wednesday, 16th of November <br/> at 4:00 pm</button>
            <button className="NoTimeButtons">None of this dates fit for me</button>
        </div>


    )
}