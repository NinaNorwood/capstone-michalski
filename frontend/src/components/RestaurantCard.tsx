import Restaurant from "../model/Restaurant";
import "./RestaurantCard.css"

type RestaurantCardProps = {
    restaurant : Restaurant
}

export default function RestaurantCard(props:RestaurantCardProps) {

    return (
        <div className="restaurant-card">
            <p>
                <img className="pic" src={props.restaurant.restaurantPicture} alt={props.restaurant.restaurantName}/>
                <h3>
                    {props.restaurant.restaurantName}
                </h3>
            </p>

        </div>
    )

}