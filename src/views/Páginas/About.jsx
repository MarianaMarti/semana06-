import React from 'react'

import BlackCard from '../Card/BlackCard'
import BlueCard from '../Card/BlueCard'
import './Pages.css'

const About = props => (
    <div className="About">
       <BlackCard titulo='O que é a Leaf?' paragrafo= 'Somos uma empresa de consultoria ambiental com a missão de tornar outras empresas em empreendimentos sustentáveis.' ></BlackCard>
        <BlueCard titulo='Tornamos sua empresa mais verde' paragrafo='A equipe de consultoria mais preparada para desenvolver a sustentabilidade no seu empreendimento'></BlueCard>
        <BlackCard titulo='Por que contratar a Leaf?' paragrafo='Proporcionamos soluções sustentáveis eficazes para diminuir os custos da sua empresa sem deixar de lado o aumento dos lucros'>
        </BlackCard>
    </div>
)

export default About