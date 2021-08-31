import React from "react";
import "./SearchBox.css";

interface searchBoxProps {
    onInputChange: (inputValue: string) => void;
}

const SearchBox = ({ onInputChange }: searchBoxProps) => {
    return (
        <input
                onChange={(e) => {
                    console.log(e.target.value);
                    onInputChange(e.target.value); 
                }}        
                className="search"
                type="search"
                placeholder="search pokemons" />
    )
}

export default SearchBox
