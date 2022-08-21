import React, {useEffect} from 'react';
import './Battle.scss'
import {Pockemon} from "../../game-instanses/Pockemon";
import {useDispatch, useSelector} from "react-redux";
import {getListPockemons} from "./redux/actions";
import Player from "./components/player/Player";
import './Battle.scss'

const Battle = () => {
    const dispatch = useDispatch()
    const {data, isLoading} = useSelector(state => state.battle)

    useEffect(() => {
        dispatch(getListPockemons())
    }, [])


    const startBattle = () => {
        const player = new Pockemon()
        const opponent = new Pockemon()
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    return (
        <div className={'battle'}>
            <Player name={'Player'} health={80} img={data && data[0].url}/>
            <Player name={'Opponent'} health={30} img={data && data[4].url} isOnRightSide={true}/>
        </div>
    );

};

export default Battle;