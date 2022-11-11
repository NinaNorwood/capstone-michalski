import {useEffect, useState} from "react";
import axios from "axios";

export default function useRestaurants () {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getAllRestaurants();
    },[])

    const getAllRestaurants = () => {
        axios.get("/api/restaurant")
            .then(response => {return response.data})
            .then((restaurants) => {setRestaurants(restaurants)})
            .catch(error => {console.log(error)})
    }

    const getRestaurantById = (restaurantId:string) => {
        axios.get("/api/restaurant/" + restaurantId)
            .then(response => {return response.data})
            .then((restaurants) => {setRestaurants(restaurants)})
            .catch(error => {console.log(error)})
    }

    return {restaurants, getRestaurantById}
}