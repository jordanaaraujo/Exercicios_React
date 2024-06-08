import React, { useState, useEffect } from 'react';


const Relogio = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relogio">
            <h1 className='ge'>RELÓGIO</h1>
            <h1 className='msg'>DIA E HORA</h1>
            <div className="date"> {dateTime.toLocaleDateString()}</div>
            <div className="time"> {dateTime.toLocaleTimeString()}</div>
            
        </div>
    );
};

export default Relogio;