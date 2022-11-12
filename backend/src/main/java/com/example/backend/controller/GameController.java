package com.example.backend.controller;

import com.example.backend.model.Game;
import com.example.backend.model.GameDTO;
import com.example.backend.service.GameService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/game")
public class GameController {

    private final GameService gameService;


    public GameController(GameService userService) {
        this.gameService = userService;
    }

    @PostMapping
    public Game createGame(@RequestBody GameDTO gameDTO){
        return gameService.createGame(gameDTO);
    }

    @GetMapping("/{gameId}")
    public Game getGameById(@PathVariable String gameId) {
        return gameService.getGameById(gameId);
    }

    @PutMapping("/{gameId}")
    public Game updateGame(@PathVariable String gameId, @RequestBody Game game) {
        return gameService.updateGame(game);
    }

    @DeleteMapping("/{gameId}")
    public void deleteGame(@PathVariable String gameId) {
       gameService.deleteGameById(gameId);
    }


}
