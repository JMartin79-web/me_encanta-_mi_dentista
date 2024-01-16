import React from 'react'

import img1 from '../../assets/img/img1.jpg'
import Carrousel from '../Carrousel/Carrousel'
function Section2() {
return (

<main className='section2-container' id='sec2'>

    <section className='section2'>
        <div className='section2-txt'>
            <h3>Clínica implantológica</h3>
            <p>Nos enorgullece ser tu aliado en el cuidado dental integral. 
            <br /> <br />
            Nuestro equipo de profesionales está aquí para brindarte una atención cálida y personalizada. Nos esforzamos por mantener tu sonrisa saludable, y hacer que cada visita sea una experiencia cómoda y positiva.
            <br /><br />
            Recupera la confianza en tu sonrisa con el apoyo de expertos que se preocupan por ti. ¡Agenda tu cita hoy y descubre cómo podemos mejorar tu salud bucal de manera integral!
            </p>
        </div>

        <div className='section2-img'>
            <Carrousel/>
        </div>

    </section>

</main>

)
}

export default Section2