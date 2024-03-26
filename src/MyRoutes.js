import React from 'react'
import { Route, Routes } from "react-router-dom"
import { HomePage } from './Pages/HomePage'
import { Blog } from './Pages/Blog';
import BlagDetails from './Pages/BlagDetails';


export const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/1' element={<BlagDetails />} />
        </Routes>
    )
}

