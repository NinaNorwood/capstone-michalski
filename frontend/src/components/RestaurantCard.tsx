import Restaurant from "../model/Restaurant";
import "./RestaurantCard.css"
import {Link} from "react-router-dom";

type RestaurantCardProps = {
    restaurant : Restaurant
}

export default function RestaurantCard(props:RestaurantCardProps) {

    return (
        <div className="restaurant-card">
            <Link to={"/api/restaurant/" + props.restaurant.restaurantId}>
                <img className="pic" src={props.restaurant.restaurantPicture} alt={props.restaurant.restaurantName}/>
                <h3>
                    {props.restaurant.restaurantName}
                </h3>
            </Link>

        </div>
    )

}