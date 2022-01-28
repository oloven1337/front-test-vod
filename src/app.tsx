import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Banner } from './pages/banner'
import { Promo } from './pages/promo'

export const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/promo" element={<Promo />} />
    </Routes>
)
