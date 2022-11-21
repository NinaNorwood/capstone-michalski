import axios from "axios";
import {useState} from "react";
import Game from "../model/Game";
import GameDTO from "../model/GameDTO";

export default function useGame() {

    const [games, setGames] = useState();

    const createGame2P = (player1:string, player2:string) => {
        let newGame2:GameDTO = {
            currentQuestion : "",
            round : 0,
            maxRounds : 5,
            currentPlayer : 0,
            players : [player1, player2]
        }
        axios.post("/api/game", newGame2)
            .then((response)=> {return response.data})
            .then((data) => setGames(data))
            .catch(error => {console.log(error)})
    }

    const createGame3P = (player1:string, player2:string, player3:string) => {
        let newGame3:GameDTO = {
            currentQuestion : "",
            round : 0,
            maxRounds : 14,
            currentPlayer : 0,
            players : [player1, player2, player3]
        }
        axios.post("/api/game", newGame3)
            .then((response)=> {return response.data})
            .then((data) => setGames(data))
            .catch(error => {console.log(error)})
    }

    const createGame4P = (player1:string, player2:string, player3:string, player4:string) => {
        let newGame4:GameDTO = {
            currentQuestion : "",
            round : 0,
            maxRounds : 19,
            currentPlayer : 0,
            players : [player1, player2, player3, player4]
        }
        axios.post("/api/game", newGame4)
            .then((response)=> {return response.data})
            .then((data) => setGames(data))
            .catch(error => {console.log(error)})
    }

    const createGame5P = (player1:string, player2:string, player3:string, player4:string, player5:string) => {
        let newGame5:GameDTO = {
            currentQuestion : "",
            round : 0,
            maxRounds : 24,
            currentPlayer : 0,
            players : [player1, player2, player3, player4, player5]
        }
        axios.post("/api/game", newGame5)
            .then((response)=> {return response.data})
            .then((data) => setGames(data))
            .catch(error => {console.log(error)})
    }

    const createGame6P = (player1:string, player2:string, player3:string, player4:string, player5:string, player6:string) => {
        let newGame6:GameDTO = {
            currentQuestion : "",
            round : 0,
            maxRounds : 29,
            currentPlayer : 0,
            players : [player1, player2, player3, player4, player5, player6]
        }
        axios.post("/api/game", newGame6)
            .then((response)=> {return response.data})
            .then((data) => setGames(data))
            .catch(error => {console.log(error)})
    }

    const getGameById = (gameId:string) => {
        axios.get("/api/game/" + gameId)
            .then((response) => {return response.data})
            .then((games) => setGames(games))
            .catch(error => {console.log(error)})

    }

    const updateGame = (games:Game) => {
        let newGame = {
            gameId : games.gameId,
            currentQuestion : games.currentQuestion,
            round : games.round +1,
            currentPlayer : games.currentPlayer +1,
            players : games.players
        }
        axios.put("/game" + newGame.gameId, newGame)
            .catch(error => {console.log(error)})
    }

    const deleteGame = (gameId:string) => {
        axios.delete("/api/game/" + gameId)
            .catch(error => {console.log(error)})
    }

    return (
        {createGame2P, createGame3P, createGame4P, createGame5P, createGame6P, getGameById, games, updateGame, deleteGame}
    );
}