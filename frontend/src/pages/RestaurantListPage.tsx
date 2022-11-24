import {Link} from "react-router-dom";
import Restaurant from "../model/Restaurant";
import RestaurantCard from "../components/RestaurantCard";
import "../styles/RestaurantList.css";
import Header from "../components/Header";

type RestaurantListPageProps = {
    restaurants : Restaurant[]
}

export default function RestaurantListPage (props:RestaurantListPageProps) {

    return(
        <section>
            <Header/>
            <Link to={"/"}>&lt; back</Link>
            <div className ="cards">
                {props.restaurants.map((rest) =>
                    <div className={"card"}>
                <RestaurantCard restaurant={rest}/>
                    </div>)}
            </div>
        </section>

    )
}