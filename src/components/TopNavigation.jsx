import React, { useState } from 'react';
import '../css/Components.css';
import logo from "../assets/svg/Logo.svg"
import userprofile from "../assets/svg/UserProfile.svg"
import SearchBar from './SearchBar1';
import arrowdown from "../assets/svg/arrow-down.svg"
import Bellpin from "../assets/svg/Bell_pin_fill.svg"


const TopNavigation = () => {
    const [search, setSearch] = useState('');

    return (
        <header className='headerDiv'>
            <img className="logo" src={logo} alt="Logo" />
            <SearchBar />
            <div className='Container'>
                <img className="bell" src={Bellpin} alt="bell" />
                <div className='Subcontainer'>
                    <p className='userName'>Alexis Fawx</p>
                    <img className="userprofile" src={userprofile} alt="userprofile" />
                    <img className="arrowdown" src={arrowdown} alt="down" />
                </div>

            </div>
        </header>
    );
};

export default TopNavigation;
