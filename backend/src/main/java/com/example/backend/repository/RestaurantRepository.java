package com.example.backend.repository;

import com.example.backend.model.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
}
