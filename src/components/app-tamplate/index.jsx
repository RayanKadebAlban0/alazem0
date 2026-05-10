import React, { useState } from "react";
import { Styles } from "./styles";
// import NavbarComponent from "../navbar/index";
import FooterComponent from "../footer/index";
import { Helmet } from "react-helmet";
// import SideBar from "../side-bar";

function AppTemplate({ children, isHaveFooter,pageTitle }) {
  const projectName = "مؤسسة العزم";


  return (
    <Styles>
      <Helmet>
        <title>{`${projectName} | ${pageTitle}`} </title>
      </Helmet>

     <div className="page-container">
        <main className="page-content">
          {children}
        </main>
        {isHaveFooter && <FooterComponent />}
      </div>
    </Styles>
  );
}

export default AppTemplate;
