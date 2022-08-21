import React from 'react';
import './ShowWinner.scss'

const ShowWinner = ({winner, selectNewHandler, continueHandler}) => {
    return (
        <div className={'show-winner'}>
            <div className={'wrapper'}>
                <div>{winner.name === 'Player' ? 'You win' : 'Game is over'}</div>
                <button onClick={selectNewHandler}>Select new pockemon</button>
                <button onClick={continueHandler}>Continue</button>
            </div>
        </div>
    );
};

export default ShowWinner;