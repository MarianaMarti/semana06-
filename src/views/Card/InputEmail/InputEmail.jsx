import React, { useState } from 'react'


const InputEmail = props => {
    const [valor, setValor] = useState(" ")

    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return (
        <div className="login">
            <label for="email"></label>
            <input type="email" id="email" name="email" placeholder="&#xf003;   Email" value={valor} onChange={quandoMudar} />
        </div>
    )
}

export default InputEmail