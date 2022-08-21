import React from 'react';
import './Player.scss'
import classNames from "classnames";
import pika from '../../../../images/pika.png'

const Player = ({img, health, name, isOnRightSide}) => {
    console.log(img)
    return (
        <div className={classNames('player', isOnRightSide && 'reverse')}>
            <div className={'title'}>{name}</div>
            <div className={'health'}>
                <div className={'health__current'} style={{width: health}}></div>
                <div>{`${health}/100`}</div>
            </div>
            <div className={'img-container'}>
                <img src={pika} alt={'#'}/>
            </div>
        </div>
    );
};

export default Player;