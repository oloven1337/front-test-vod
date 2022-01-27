import React from 'react'
import {Routes, Route} from 'react-router-dom'

import {Banner} from './pages/banner'

export const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<Banner/>}/>
    </Routes>
)
