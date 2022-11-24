import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../components/Home/Home';
import TYpay from '../../components/Pages/typay/TYpay';
import Music from '../../components/Pages/music/Music';
import NotFound from '../../components/Pages/notFound/NotFound';
import Watching from '../../components/Pages/watching/Watching';
import Marketplace from '../../components/Pages/marketplace/Marketplace';


function RoutesHeader() {
    return (
        <>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path='/feed' element={<Home/>}></Route>
                <Route path='/watching' element={<Watching/>}></Route>
                <Route path='/marketplace' element={<Marketplace/>}></Route>
                <Route path='/music' element={<Music/>}></Route>
                <Route path='/typay' element={<TYpay/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>

            </Routes>
        </>
    )
}

export default RoutesHeader;