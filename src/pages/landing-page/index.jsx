import React from 'react'
import Hero from '../../components/hero'
import LogIn from '../log-in'
import { Styles } from './style';

const LandinPage = () => {
    return (
        <Styles>
            <div className='landing-page'>
                <div className='login-section'>
                    <LogIn />
                </div>

                <div className='hero-section'>
                    <Hero />
                </div>
            </div>
        </Styles>
    )
}

export default LandinPage
