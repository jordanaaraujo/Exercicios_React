import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Buscar livro"
            className="search-bar"
        />
    );
};

export default SearchBar;
