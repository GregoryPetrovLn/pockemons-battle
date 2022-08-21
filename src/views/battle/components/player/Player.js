import React from 'react';
import './Player.scss'
import classNames from "classnames";
import pika from '../../../../images/pika.png'

const Player = ({player, isOnRightSide}) => {
    return player && (
        <div className={classNames('player', isOnRightSide && 'reverse')}>
            <div className={'title'}>{player?.name}</div>
            <div className={'health'}>
                <div className={'health__current'} style={{width: `${player?.health}%`}}></div>
                <div style={{direction: isOnRightSide ? 'ltr' : 'rtl'}}>{`${player?.health}/100`}</div>
            </div>
            <div className={'img-container'}>
                <img src={pika} alt={'#'}/>
            </div>
        </div>
    );
};

export default Player;