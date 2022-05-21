import React from 'react'
import './HomeCard.css'



const HomeCard = props => (
    <div className="HomeCard">
        <div className="Container">
            <h1>Leaf</h1>
            <p>Buscando transformar o mundo de maneira ecológica</p>
            <div className="btn">
                <a href="/about">Saiba mais</a>
            </div>
        </div>
    </div>
)

export default HomeCard