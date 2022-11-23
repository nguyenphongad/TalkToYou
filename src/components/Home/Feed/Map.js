import React from 'react'
import { useState } from 'react';

function Map() {

    const [gift, setGift] = useState('');
    const [gifts, setGifts] = useState([]);

    const handleSubmit = () => {
        setGifts(prev => [...prev, gift]);
        setGift('');
    }
    return (
        <div>
            <input
                value={gift}
                onChange={e => setGift(e.target.value)}
            />
            <button onClick={handleSubmit}>
                add
            </button><br />

            <ul>
                {
                    gifts.map(( gift,index) => (<li key={index}> {gift} </li>))
                }

            </ul>

        </div>
    )
}

export default Map