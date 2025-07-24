import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
import Benefits from '../pages/Benefits';
import Subscriptions from '../pages/Subscriptions';
import Schedule from '../pages/Schedule';
import Faq from '../pages/Faq';
import Careers from '../pages/Careers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/benefits" element={<Benefits />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/footer" element={<Footer />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;