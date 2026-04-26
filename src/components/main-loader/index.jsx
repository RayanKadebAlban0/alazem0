import React from "react";
import { Styles } from "../main-loader/styles";
import Loader from "react-loaders";

// import Spinner from 'react-bootstrap/Spinner';

const MainLoder = () => {
  return (
    <Styles>
      <Loader type="line-spin-fade-loader" active color="var(--main-color)" />
      {/* <Loader type="ball-clip-rotate" active color="#000" /> */}
      {/* <Spinner  className="spin" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> */}
    </Styles>
  );
};

export default MainLoder;
