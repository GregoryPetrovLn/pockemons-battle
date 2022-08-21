import React from 'react';
import './NewGameView.scss'

const NewGameView = ({startNewGame}) => {
    return (
        <div className={'new-game-view'}>
            <div className={'wrapper'}>
                <div>Are you ready?</div>
                <button onClick={startNewGame}>Start new game</button>
            </div>
        </div>
    );
};

export default NewGameView;