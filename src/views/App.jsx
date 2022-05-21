import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Content from '../components/layout/Content'

const App = props => (
    <div className="App">
        <BrowserRouter>
            <Navbar></Navbar>
            <Content></Content>
        </BrowserRouter>
    </div>
)


export default App