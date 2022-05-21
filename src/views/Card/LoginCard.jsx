import React from 'react'
import './LoginCard.css'

import InputEmail from './InputEmail/InputEmail'
import InputSenha from './InputSenha/InputSenha'
import Footer from './Footer'

const LoginCard = props => (
    <div className="Card">
        <div id="container">
            <h1>Bem-vindo</h1>
            <p>
                Coloque seus dados para entrar.
            </p>
            <form>
                <InputEmail></InputEmail>
                <InputSenha></InputSenha>
            </form>
            <div id="login">
                <button type="submit" class="btn">Entrar</button>
            </div>
            <Footer></Footer>
        </div>
    </div>
)

export default LoginCard


