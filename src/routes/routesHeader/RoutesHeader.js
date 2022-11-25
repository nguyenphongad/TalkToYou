import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../components/Home/Home';
import TYpay from '../../components/Pages/typay/TYpay';
import Music from '../../components/Pages/music/Music';
import NotFound from '../../components/Pages/notFound/NotFound';
import Watching from '../../components/Pages/watching/Watching';
import Marketplace from '../../components/Pages/marketplace/Marketplace';
import Friends from '../../components/Pages/friends/Friends';


function RoutesHeader() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/feed" element={<Home/>} />
                <Route path="/watching" element={<Watching/>} />
                <Route path="/marketplace" element={<Marketplace/>} />
                <Route path="/music" element={<Music/>} />
                <Route path="/typay" element={<TYpay/>} />
                <Route path="*" element={<NotFound/>} />

                <Route path="/friends" element={<Friends/>}/>

            </Routes>
        </>
    )
}

export default RoutesHeader;