import Restaurant from "../model/Restaurant";
import {Link, useParams} from "react-router-dom";
import "../components/RestaurantCard.css";
import "../styles/RestaurantList.css";

type RestaurantDetailPageProps = {
    restaurants : Restaurant[]
}

export default function RestaurantDetailPage(props:RestaurantDetailPageProps){

    const params = useParams()
    const restId = params.restaurantId

    if(restId === undefined) {
        return(<>No id given!</>);
    }

    const thisRestaurant = props.restaurants.find(thisRestaurant => thisRestaurant.restaurantId === restId)

    if(thisRestaurant === undefined) {
        return (<>Restaurant not found!</>);
    }

    return (
        <div>
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <div className ="cards">
                <Link to={"/api/restaurant"}>&lt; back</Link>
                <div className="restaurant-card">
                    <img className="pic" src={thisRestaurant.restaurantPicture} alt={thisRestaurant.restaurantName}/>
                    <h3>{thisRestaurant.restaurantName}</h3>
                    <p>{thisRestaurant.restaurantAddress}</p>
                    <p>{thisRestaurant.restaurantWebsite}</p>
                </div>
            </div>
            <button className="NextButtons">Next</button>
        </div>
    )




}