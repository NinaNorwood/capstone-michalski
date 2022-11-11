package com.example.backend.service;

import com.example.backend.model.Restaurant;
import com.example.backend.repository.RestaurantRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

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
                List.of(new Restaurant("","","","","","",""),
                        new Restaurant("", "", "", "", "", "","")));
        //WHEN
        List<Restaurant> actual = restaurantService.getAllRestaurants();
        //THEN
        List<Restaurant> expected = List.of(
                new Restaurant("","","","","","",""),
                new Restaurant("", "", "", "", "", "",""));

        verify(restaurantRepository).findAll();
        assertEquals(expected, actual);
    }
}