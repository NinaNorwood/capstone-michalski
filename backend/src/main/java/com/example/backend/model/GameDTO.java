package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document("game")
public class GameDTO {

    private String currentQuestion;
    private Integer round;
    private Integer maxRounds;
    private Integer currentPlayer;
    private String[] players;
}
