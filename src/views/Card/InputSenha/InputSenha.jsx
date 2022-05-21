import React, { useState } from 'react'


const Input = props => {
    const [valor, setValor] = useState("")

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="login">
            <label for="password"></label>
            <input type="password" id="password" name="password" placeholder="&#xf023;    Senha" value={valor} onChange={quandoMudar} />
        </div>
    )
}

export default Input