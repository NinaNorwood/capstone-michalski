package com.example.backend.service;

import com.example.backend.model.Game;
import com.example.backend.model.GameDTO;
import com.example.backend.repository.GameRepository;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class GameServiceTest {

    GameRepository gameRepository = mock(GameRepository.class);
    IdService idService = mock(IdService.class);
    GameService gameService = new GameService(gameRepository, idService);

    @Test
    void addNames_shouldReturn_newGame() {
        //GIVEN
        GameDTO gameDTO = new GameDTO("",0,9,0, new String[]{"Klaus" + "Lisa"});
        Game expected = new Game("123","",0,9,0, new String[]{"Klaus" + "Lisa"});
        when(idService.generateID()).thenReturn("123");
        when(gameRepository.save(any())).thenReturn(
                Game.builder()
                        .gameId("123")
                        .currentQuestionId(gameDTO.getCurrentQuestion())
                        .round(gameDTO.getRound())
                        .maxRounds(gameDTO.getMaxRounds())
                        .currentPlayer(gameDTO.getCurrentPlayer())
                        .players(gameDTO.getPlayers())
                        .build());

        //WHEN
        Game actual = gameService.createGame(gameDTO);

        //THEN
        assertEquals(actual, expected);
    }

    @Test
    void getGameById_shouldReturn_oneGameById(){
        //GIVEN
        Game expected = new Game("","",0,9,0, new String[]{"Klaus" + "Lisa"});
        when(gameRepository.findById("123")).thenReturn(Optional.of(expected));

        //WHEN
        Game actual = gameService.getGameById("123");

        //THEN
        assertEquals(actual, expected);
    }

    @Test
    void deleteGameById_shouldDeleteGame(){
        //GIVEN
        Game expected = new Game("","",0,9,0, new String[]{"Klaus" + "Lisa"});
        when(gameRepository.findById("123")).thenReturn(Optional.of(expected));
        //WHEN
        gameService.deleteGameById("123");
        //THEN
        verify(gameRepository).deleteById("123");
    }

}