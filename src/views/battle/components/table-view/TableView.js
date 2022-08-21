import React from 'react';
import './TableView.scss'

const TableView = () => {
    return (
        <div className={'table-view'}>
            <span>Pockemon Battle Simulator</span>
            <div className={'wrapper'}>
                <div className={'result'}></div>
                <div className={'result'}></div>
            </div>
            <div className={'info'}>
                <div>You hit for {5}</div>
                <div>You opponent hit for {3}</div>
            </div>
            <div className={'attack-btn-container'}>
                <button>Attack!</button>
            </div>
        </div>
    );
};

export default TableView;