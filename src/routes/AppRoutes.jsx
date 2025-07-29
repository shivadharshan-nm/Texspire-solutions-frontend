import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Careers from '../pages/Careers';
import Schedule from '../pages/Schedule';


const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/careers" element={<Careers />} />
                <Route path='/schedule' element={<Schedule />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;