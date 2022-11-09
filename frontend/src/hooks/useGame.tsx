import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Game from "../model/Game";

export default function useGame() {

    const [game, setGame] = useState<Game>();

    const {gameId} = useParams()

    const addNames = (player1:string, player2:string) => {
        let newGame = {
            round : 0,
            maxRounds : 9,
            currentPlayer : 0,
            players : [player1, player2]
        }
        axios.post("/game", newGame)
            .catch(error => {console.log(error)})
    }

    useEffect(() => {
        if (gameId) {
            getGameById(gameId)
        }
    }, [gameId])

    const getGameById = (gameId:string) => {
        axios.get("/game/" + gameId)
            .then((response) => {return response.data})
            .then((game) => setGame(game))
            .catch(error => {console.log(error)})
    }

    return (
        {addName: addNames}
    );
}