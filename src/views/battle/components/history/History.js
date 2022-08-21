import React from 'react';

const History = ({history}) => {
    return (
        <div>
            <div>{history?.length >0 && 'History:'}</div>
            {history?.map((item, idx) => (
                <div key={idx}>{`${idx + 1}: ${item}`}</div>
            ))}
        </div>
    );
};

export default History;