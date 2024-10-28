// src/components/ItemCard.js
import React from 'react';

const ItemCard = ({ item, type }) => {
    const getImage = () => {
        if (type === 'character') {
            return item.image || 'https://via.placeholder.com/150';
        } else if (type === 'episode') {
            const characterImages = item.characterImages || [];
            return characterImages.length > 0 ? characterImages[0] : 'https://via.placeholder.com/150';
        } else if (type === 'location') {
            const residentImages = item.residentImages || [];
            return residentImages.length > 0 ? residentImages[0] : 'https://via.placeholder.com/150';
        }
        return 'https://via.placeholder.com/150';
    };

    return (
        <div className="border rounded-lg overflow-hidden shadow-md m-4 hover:bg-lime-100">
            <div className='flex justify-center pt-5'>
                <img src={getImage()} alt={`${item.name}`} className="max-w-40 h-auto object-cover rounded-md" />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold text-lime-800">{item.name}</h2>
                {type === 'episode' ? (
                    <>
                        <p>Air Date: {item.air_date}</p>
                        <p>Episode: {item.episode}</p>
                    </>
                ) : type === 'location' ? (
                    <>
                        <p>Dimension: {item.dimension}</p>
                        <p>Type: {item.type}</p>
                    </>
                ) : (
                    <p>Status: {item.status}</p>
                )}
            </div>
        </div>
    );
};

export default ItemCard;
