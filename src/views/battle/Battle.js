import React, { useState} from 'react';
import './Battle.scss'
import Player from "./components/player/Player";
import './Battle.scss'
import TableView from "./components/table-view/TableView";
import NewGameView from "./components/new-game/NewGameView";
import {getRandomInt} from "../../utils/service";
import ShowWinner from "./components/show-winner/ShowWinner";
import History from "./components/history/History";
import axios from "axios";

const Pockemon = {
    health: 100,
    history: [],
    image: '',
    name: ''
}
const Battle = () => {
    const [player, setPlayer] = useState(null)
    const [opponent, setOpponent] = useState(null)
    const [isNewGame, setIsNewGame] = useState(true)
    const [lastMove, setLastMove] = useState({you: 0, opponent: 0})
    const [winner, setWinner] = useState(null)

    const getRandomPockemonsImages = async () => {
        let id = getRandomInt(0, 500)
        const randomPockemonPlayer = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const urlPlayer = randomPockemonPlayer.data.sprites.other.dream_world.front_default
        id = getRandomInt(0, 500)
        const randomPockemonOpponent = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const urlOpponent = randomPockemonOpponent.data.sprites.other.dream_world.front_default
        return {urlPlayer, urlOpponent}
    }

    const startNewGame = async (isChanged = true) => {
        const {urlPlayer, urlOpponent} = await getRandomPockemonsImages()
        setIsNewGame(false)
        setLastMove({you: 0, opponent: 0})
        setPlayer(isChanged ? JSON.parse(JSON.stringify({...Pockemon, name: 'Player', image: urlPlayer})) : {
            ...player,
            health: 100
        })
        setOpponent(JSON.parse(JSON.stringify({...Pockemon, name: 'Opponent', image: urlOpponent})))
    }

    const getAttackResults = () => {
        let you = getRandomInt()
        let opp = getRandomInt()
        if (you === 6) {
            alert(`You should throw extra time`)
            you += getRandomInt()
        }

        if (opp === 6) {
            alert(`Opponent should throw extra time`)
            opp += getRandomInt()
        }
        setLastMove({you, opponent: opp})
        const playerHealthAfterHit = player.health - opp
        const opponentHealthAfterHit = opponent.health - you
        return {playerHealthAfterHit, opponentHealthAfterHit, you, opp}
    }

    const attackHandler = () => {
        const {
            playerHealthAfterHit,
            opponentHealthAfterHit,
            you,
            opp
        } = getAttackResults()
        if (playerHealthAfterHit <= 0) {
            setWinner(opponent)
            setPlayer({...player, history: [...player.history, 'Fail']})
        } else if (opponentHealthAfterHit <= 0) {
            setPlayer({...player, history: [...player.history, 'Win']})
            setWinner(player)
        } else {
            setPlayer({...player, health: player.health - opp})
            setOpponent({...opponent, health: opponent.health - you})
        }
    }

    const selectNewHandler = () => {
        startNewGame(true)
        setWinner(null)
    }

    const continueHandler = () => {
        startNewGame(false)
        setWinner(null)
    }


    if (isNewGame) {
        return <NewGameView startNewGame={startNewGame}/>
    }

    if (winner) {
        return <ShowWinner winner={winner}
                           selectNewHandler={selectNewHandler}
                           continueHandler={continueHandler}/>
    }

    return (
        <>
            <div className={'battle'}>
                <Player player={player}/>
                <TableView attackHandler={attackHandler} lastMove={lastMove}/>
                <Player player={opponent} isOnRightSide={true}/>
            </div>
            <History history={player?.history}/>
        </>
    );

};

export default Battle;