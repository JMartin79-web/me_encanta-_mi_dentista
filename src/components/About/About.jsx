import React from 'react'
import Card from '../Cards/Card'
import CardSquare from '../Cards/CardSquare'

// IMGS
import general from './../../assets/img/cards/general.jpg'
import ortodoncia from './../../assets/img/cards/ortodoncia.jpg'
import cirugia from './../../assets/img/cards/cirugia.jpg'
import estetica from './../../assets/img/cards/estetica.jpg'
import protesis from './../../assets/img/cards/protesis.jpg'

function About() {
return (
  <main className='about-container'>
  
    <section className='about' id='about'>
      <h3>Trabajamos todas las especialidades</h3>
    
      <div className='about-content'>
      
        <CardSquare
          txt="General"
          img={general}
        />

        <CardSquare
          txt="Ortodoncia"  
          img={ortodoncia}
        />
        
        <CardSquare
          txt="Cirugía"  
          img={cirugia}
        />

        <CardSquare
          txt="Prótesis"
          img={protesis}

        />

        <CardSquare
          txt="Estética"
          img={estetica}
        />
      
      </div>
    
    </section>

  </main>

)
}

export default About