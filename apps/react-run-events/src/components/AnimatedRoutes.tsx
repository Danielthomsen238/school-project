import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Animation from '../pages/Animation';
import Home from '../pages/Home';
import NextPage from '../pages/nextPage';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Animation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nextPage" element={<NextPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
