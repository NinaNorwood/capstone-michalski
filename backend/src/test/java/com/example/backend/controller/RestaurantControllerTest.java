package com.example.backend.controller;

import com.example.backend.model.Restaurant;
import com.example.backend.repository.RestaurantRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class RestaurantControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @DirtiesContext
    @Test
    void getAllRestaurants() throws Exception {
        //GIVEN
        Restaurant testRestaurant = new Restaurant("","","","","","","");
        restaurantRepository.save(testRestaurant);
        //WHEN&THEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurant"))
                .andExpect(status().is(200))
                        .andExpect(content().string("""
                                [{"restaurantId":"","restaurantName":"","restaurantPicture":"","restaurantAddress":"","restaurantWebsite":"","restaurantLocation":"","restaurantOnMap":""}]"""));

    }
}