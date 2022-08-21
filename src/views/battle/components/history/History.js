import React from 'react';

const History = ({history}) => {
    return (
        <div>
            <div>History:</div>
            {history?.map((item, idx) => (
                <div key={idx}>{`${idx + 1}: ${item}`}</div>
            ))}
        </div>
    );
};

export default History;