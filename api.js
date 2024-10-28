export const fetchData = async (type) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/${type}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return []; // Return an empty array in case of error
    }
};

// Fetch character images for episodes
export const fetchCharacterImagesForEpisode = async (episodeId) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`);
        const episodeData = await response.json();
        const characterImages = await Promise.all(
            episodeData.characters.map(async (url) => {
                const characterResponse = await fetch(url);
                const character = await characterResponse.json();
                return character.image; // Return character image
            })
        );
        return characterImages;
    } catch (error) {
        console.error('Failed to fetch episode images:', error);
        return []; // Return an empty array in case of error
    }
};

// Fetch character images for locations
export const fetchCharacterImagesForLocation = async (locationId) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`);
        const locationData = await response.json();
        const characterImages = await Promise.all(
            locationData.residents.map(async (url) => {
                const characterResponse = await fetch(url);
                const character = await characterResponse.json();
                return character.image; // Return character image
            })
        );
        return characterImages;
    } catch (error) {
        console.error('Failed to fetch location images:', error);
        return []; // Return an empty array in case of error
    }
};
