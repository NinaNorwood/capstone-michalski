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
@Document("game")
public class Game {

    @Id
    private String gameId;
    private String currentQuestionId;
    private Integer round;
    private Integer maxRounds;
    private Integer currentPlayer;
    private String[] players;
}
