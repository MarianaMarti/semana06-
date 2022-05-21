import React from 'react'

import './BlueCard.css'

const BlueCard = props =>(
    <div className="BlueCard">
        <h1>{props.titulo}</h1>
        <p>{props.paragrafo}</p>
    </div>
)

export default BlueCard