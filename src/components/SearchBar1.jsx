import React from 'react';
import '../css/SearchBar.css';
import searchIcon from "../assets/svg/searchIcon.svg";

const SearchBar1 = () => {
    return (
        <div className="search-container">
            <div className="search-box">
                <div className="search-icon">
                    <img className="Search" src={searchIcon} alt="Search bar" />
                </div>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Type to Search"
                />
            </div>
        </div>
    );
};

export default SearchBar1;
