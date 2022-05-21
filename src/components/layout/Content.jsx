import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from '../../views/Páginas/About'
import Home from '../../views/Páginas/Home'
import Login from '../../views/Páginas/Login'

const Content = props => (
    <div className="Content">
        <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </div>
)


export default Content