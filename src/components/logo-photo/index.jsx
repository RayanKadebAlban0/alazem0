import React from 'react'
import Alazem from "../../assets/images/Alazem.jpg"
import { Styles } from "./styles";

const LogoPhoto = () => {
  return (
    <Styles>
      <img src={Alazem} alt="Logo" className="logo-photo" />
    </Styles>
  )
}

export default LogoPhoto
