package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document("restaurants")
public class Restaurant {

    @Id
    private String restaurantId;
    private String restaurantName;
    private String restaurantPicture;
    private String restaurantAddress;
    private String restaurantWebsite;
    private String restaurantLocation;
    private String restaurantOnMap;
    private String restaurantGMaps;
}
