import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const OpenModalProvider = createContext();

function StateReelProvider({children}) {
    const [openModalDropReel, setOpenModalDropReel] = useState(false);

    const handleOpenDropReel = () => { 
        setOpenModalDropReel(true);
        document.body.style.overflowY = "hidden";
        
    }
    const handleCloseDropReel = () =>{ 
        setOpenModalDropReel(false)
        document.body.style.overflowY = "scroll";
    }
    const valueArrStateReel = {
        openModalDropReel,handleOpenDropReel,handleCloseDropReel
    }
    return (
        <OpenModalProvider.Provider value={valueArrStateReel}>
            {children}
        </OpenModalProvider.Provider>
    )
}

export default StateReelProvider