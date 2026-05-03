import React from 'react'
import Alazam from "../../assets/images/Alazem.jpg"
import { Styles } from './styles'

const Hero = () => {
  return (
    <Styles>
  <div className='logo-photo'>
      <div >
        <img src={Alazam}  alt='alazem' />
      </div>
        
      </div>
      </Styles>
  )
}

export default Hero
