import React from 'react'
import SecondaryButton from '../Buttons/SecondaryButton'
import PrimaryButton from '../Buttons/PrimaryButton'
import { HashLink } from 'react-router-hash-link'
import HeroSVG from './HeroSVG'


function Hero2() {
return (
<>
    <main className='hero2-container' id='inicio'>

        <div className='hero2'>

            <section className='hero-txt'>
                <div className='hero-svg'>
                    <HeroSVG/>
                </div>
                <br />                
                <div className='hero-txt-buttons'>
                    <HashLink smooth to={'/#nosotros'} className='secondary-button'>Saber más</HashLink>
                    <HashLink smooth to={'/#contacto'} className='primary-button'>Solicitar turno</HashLink>
                </div>
            
            </section>

        </div>

    </main>
</>

)
}

export default Hero2