import React from 'react';

const CarList = ({ cars }) => {
    return (
        <ul className="car-list">
            {cars.map((car, index) => (
                <li key={index} className="car">
                    {car}
                </li>
            ))}
        </ul>
    );
};

export default CarList;
