import React from 'react'
import face from "../../assets/images/face.jpg"
import { Styles } from "./styles";

const PhotoProfile = () => {
  return (
    <Styles>
      <img src={face} alt="profile" className="photo-profile" />
    </Styles>
  )
}

export default PhotoProfile
