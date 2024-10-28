// src/components/Episodes.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';

const Episodes = ({ searchTerm }) => {
    const [episodes, setEpisodes] = useState([]);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            const res = await axios.get('https://rickandmortyapi.com/api/episode');
            setEpisodes(res.data.results);
        };
        const fetchCharacters = async () => {
            const res = await axios.get('https://rickandmortyapi.com/api/character');
            setCharacters(res.data.results);
        };

        fetchEpisodes();
        fetchCharacters();
    }, []);

    const filteredEpisodes = episodes.filter(episode =>
        episode.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Fetch random character images for each episode
    const episodesWithCharacterImages = filteredEpisodes.map(episode => {
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        return {
            ...episode,
            characterImages: randomCharacter ? [randomCharacter.image] : [] // Use random character image
        };
    });

    return (
        <div className='px-10 py-5'>
            <h1 className='font-bold text-4xl my-4 text-lime-800'>Episodes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {episodesWithCharacterImages.map(episode => (
                    <ItemCard key={episode.id} item={episode} type="episode" />
                ))}
            </div>
        </div>
    );
};

export default Episodes;
