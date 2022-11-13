package com.example.backend.service;

import com.example.backend.model.Restaurant;
import com.example.backend.repository.RestaurantRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
class RestaurantServiceTest {

    private final RestaurantRepository restaurantRepository= mock(RestaurantRepository.class);
    private final RestaurantService restaurantService = new RestaurantService(restaurantRepository);

    @Test
    void getAllRestaurants() {
        //GIVEN
        when(restaurantRepository.findAll()).thenReturn(
                List.of(new Restaurant("","","","","","","",""),
                        new Restaurant("", "", "", "", "", "","","")));
        //WHEN
        List<Restaurant> actual = restaurantService.getAllRestaurants();
        //THEN
        List<Restaurant> expected = List.of(
                new Restaurant("","","","","","","",""),
                new Restaurant("", "", "", "", "", "","",""));

        verify(restaurantRepository).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void getRestaurantById(){
        //GIVEN
        Restaurant expected = new Restaurant("123","","","","","","","");
        when(restaurantRepository.findById("123")).thenReturn(Optional.of(expected));

        //WHEN
        Restaurant actual = restaurantService.getRestaurantById("123");

        //THEN
        assertEquals(actual, expected);
    }
}