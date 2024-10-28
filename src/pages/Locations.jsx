// src/components/Locations.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';

const Locations = ({ searchTerm }) => {
    const [locations, setLocations] = useState([]);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            const res = await axios.get('https://rickandmortyapi.com/api/location');
            setLocations(res.data.results);
        };
        const fetchCharacters = async () => {
            const res = await axios.get('https://rickandmortyapi.com/api/character');
            setCharacters(res.data.results);
        };

        fetchLocations();
        fetchCharacters();
    }, []);

    const filteredLocations = locations.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Fetch random character images for each location
    const locationsWithResidentImages = filteredLocations.map(location => {
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        return {
            ...location,
            residentImages: randomCharacter ? [randomCharacter.image] : [] // Use random character image
        };
    });

    return (
        <div className='px-10 py-5'>
            <h1 className='font-bold text-4xl my-4 text-lime-800'>Locations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {locationsWithResidentImages.map(location => (
                    <ItemCard key={location.id} item={location} type="location" />
                ))}
            </div>
        </div>
    );
};

export default Locations;
