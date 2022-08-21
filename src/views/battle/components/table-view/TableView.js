import React from 'react';
import './TableView.scss'

const TableView = ({attackHandler,lastMove}) => {
    return (
        <div className={'table-view'}>
            <span>Pockemon Battle Simulator</span>
            <div className={'wrapper'}>
                <div className={'result'}><span>{lastMove?.you}</span></div>
                <div className={'result'}><span>{lastMove?.opponent}</span></div>
            </div>
            <div className={'info'}>
                <div>You hit for {lastMove?.opponent}</div>
                <div>You opponent hit for {lastMove?.you}</div>
            </div>
            <div className={'attack-btn-container'}>
                <button onClick={attackHandler}>Attack!</button>
            </div>
        </div>
    );
};

export default TableView;