package com.example.backend.service;

import com.example.backend.model.Restaurant;
import com.example.backend.repository.RestaurantRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;

    public RestaurantService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(String restaurantId) {
        return restaurantRepository.findById(restaurantId)
                .orElseThrow(() -> new NoSuchElementException("Restaurant with the Id " + restaurantId + " doesn't exist!"));
    }
}
