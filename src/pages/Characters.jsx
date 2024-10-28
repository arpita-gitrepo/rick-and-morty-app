// src/components/Characters.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';

const Characters = ({ searchTerm }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const res = await axios.get('https://rickandmortyapi.com/api/character');
            setCharacters(res.data.results);
        };
        fetchCharacters();
    }, []);

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='px-10 py-5'>
            <h1 className='font-bold text-4xl my-4 text-lime-800'>Characters</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredCharacters.map(character => (
                    <ItemCard key={character.id} item={character} type="character" />
                ))}
            </div>
        </div>
    );
};

export default Characters;
