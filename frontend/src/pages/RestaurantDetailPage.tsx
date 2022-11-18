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
        <div className="pageLayout">
            <Link to="/" className="Title-header">
                <h2>Snoople</h2>
            </Link>
            <div>
                <Link to={"/api/restaurant"}>&lt; back</Link>
                <div className="restaurant-card">
                    <img className="pic" src={thisRestaurant.restaurantPicture} alt={thisRestaurant.restaurantName}/>
                    <h3>{thisRestaurant.restaurantName}</h3>
                    <a href={thisRestaurant.restaurantGMaps} target="_blank" rel="noopener noreferrer">{thisRestaurant.restaurantAddress}</a>
                    <p></p>
                    <a href={thisRestaurant.restaurantWebsite} target="_blank" rel="noopener noreferrer">{thisRestaurant.restaurantWebsite}</a>
                </div>
            </div>
            <Link to={"/api/meetings?restoId=" + thisRestaurant.restaurantId}>
                <button className="NextButtons">Snoople here</button>
            </Link>
        </div>
    )




}