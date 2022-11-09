package com.example.backend.controller;

import com.example.backend.model.Game;
import com.example.backend.model.GameDTO;
import com.example.backend.service.GameService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class GameController {

    private final GameService gameService;


    public GameController(GameService userService) {
        this.gameService = userService;
    }

    @PostMapping("/game")
    public Game addNames(@RequestBody GameDTO gameDTO){
        return gameService.addNames(gameDTO);
    }

    @GetMapping("/game/{gameId}")
    public Game getGameById(@PathVariable String gameId) {
        return gameService.getGameById(gameId);
    }





}
