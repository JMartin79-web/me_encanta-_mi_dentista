import React from 'react'
import SecondaryButton from '../Buttons/SecondaryButton'
import PrimaryButton from '../Buttons/PrimaryButton'
import { HashLink } from 'react-router-hash-link'
import HeroSVG from './HeroSVG'


function Hero2() {
return (
<>
    <main className='hero2-container'>

        <div className='hero2'>

            <section className='hero-txt'>
                <div className='hero-svg'>
                    <HeroSVG/>
                </div>
                <br />                
                <div className='hero-txt-buttons'>
                    <HashLink smooth to={'/#sec2'} className='secondary-button'>Saber más</HashLink>
                    <HashLink smooth to={'/'} className='primary-button'>Solicitar turno</HashLink>
                </div>
            
            </section>

        </div>

    </main>
</>

)
}

export default Hero2