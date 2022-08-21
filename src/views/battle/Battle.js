import React, {useEffect, useState} from 'react';
import './Battle.scss'
import {useDispatch, useSelector} from "react-redux";
import {getListPockemons} from "./redux/actions";
import Player from "./components/player/Player";
import './Battle.scss'
import TableView from "./components/table-view/TableView";
import NewGameView from "./components/new-game/NewGameView";
import {getRandomInt} from "../../utils/service";
import ShowWinner from "./components/show-winner/ShowWinner";
import History from "./components/history/History";

const Pockemon = {
    health: 10,
    history: [],
    image: '',
    name: ''
}
const Battle = () => {
    const dispatch = useDispatch()
    const {data, isLoading} = useSelector(state => state.battle)
    const [player, setPlayer] = useState(null)
    const [opponent, setOpponent] = useState(null)
    const [isNewGame, setIsNewGame] = useState(true)
    const [lastMove, setLastMove] = useState({you: 0, opponent: 0})
    const [winner, setWinner] = useState(null)

    useEffect(() => {
        //==============================
        //====== READ ME ===============
        //==============================
        //The api you provided returns an object or a list of objects that does not have an image.
        // Logically, after such a request, the picture can be put already at the initialization of a new game.
        // In my case, there is a static image from a file
        //==============================
        //==============================
        //==============================
        dispatch(getListPockemons())
    }, [])


    const startNewGame = (isChanged = true) => {
        setIsNewGame(false)
        setLastMove({you: 0, opponent: 0})
        setPlayer(isChanged ? JSON.parse(JSON.stringify({...Pockemon, name: 'Player'})) : {...player, health: 10})
        setOpponent(JSON.parse(JSON.stringify({...Pockemon, name: 'Opponent'})))
    }

    const getAttackResults = () => {
        const you = getRandomInt()
        const opp = getRandomInt()
        setLastMove({you, opponent: opp})
        const playerHealthAfterHit = player.health - you
        const opponentHealthAfterHit = opponent.health - opp
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
            setPlayer({...player, health: player.health - you})
            setOpponent({...opponent, health: opponent.health - opp})
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


    if (isLoading) {
        return <span>Loading...</span>
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