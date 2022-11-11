import axios from "axios";
import {useState} from "react";
import Game from "../model/Game";
import GameDTO from "../model/GameDTO";

export default function useGame() {

    const [games, setGames] = useState();

    const createGame = (player1:string, player2:string) => {
        let newGame:GameDTO = {
            currentQuestion : "",
            round : 0,
            maxRounds : 9,
            currentPlayer : 0,
            players : [player1, player2]
        }
        axios.post("/api/game", newGame)
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

    return (
        {createGame, getGameById, games, updateGame}
    );
}