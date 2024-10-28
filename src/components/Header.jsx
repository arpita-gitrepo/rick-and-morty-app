// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        if (onSearch) {
            onSearch(e.target.value);
        }
    };

    return (
        <header className="bg-lime-700 p-4 text-white flex flex-col md:flex-row justify-between items-center shadow-lg">
            <div className="text-2xl font-semibold mb-2 md:mb-0 font-serif"> Rick and Morty </div>
            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <NavLink to='/characters' className={({ isActive }) => isActive ? 'text-lime-300' : 'hover:text-neutral-300 transition-colors duration-200'}>Characters</NavLink>
                <NavLink to='/episodes' className={({ isActive }) => isActive ? 'text-lime-300' : 'hover:text-neutral-300 transition-colors duration-200'}>Episodes</NavLink>
                <NavLink to='/locations' className={({ isActive }) => isActive ? 'text-lime-300' : 'hover:text-neutral-300 transition-colors duration-200'}>Locations</NavLink>
            </nav>
            <div className="relative mt-2 md:mt-0">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="p-2 rounded-md border border-white bg-lime-800 text-white placeholder-gray-200 focus:outline-none focus:ring focus:ring-lime-300 transition"
                />
                <div className="absolute top-0 right-0 mt-2 mr-3">
                    🔍
                </div>
            </div>
        </header>
    );
};

export default Header;
