import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Careers from '../pages/Careers';


const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/careers" element={<Careers />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;