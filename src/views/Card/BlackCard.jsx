import React from 'react'

import './BlackCard.css'

const BlackCard = props =>(
    <div className="BlackCard">
        <h1>{props.titulo}</h1>
        <p>{props.paragrafo}</p>
    </div>
)

export default BlackCard