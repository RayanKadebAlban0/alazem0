import React from "react";
import { Styles } from "./styles";
import NavbarComponent from "../navbar/index";
import FooterComponent from "../footer/index";
import { Helmet } from "react-helmet";
import SideBar  from "../side-bar";

function AppTemplate({ children, isHaveNavbar, isHaveFooter, isSidebar, pageTitle }) {
  const projectName = "BootCapm Task";
  return (
    <Styles>
      <Helmet>
        <title>{`${projectName} | ${pageTitle}`} </title>
      </Helmet>

      {isHaveNavbar && <NavbarComponent />}

      <div className="layout-wrapper">
        <div className="sideBar">
          {isSidebar && <SideBar />}
        </div>
        <div className="main-content" >
          <div className="main-data">{children}</div>
        </div >
      </div>
      {isHaveFooter && <FooterComponent />}
    </Styles>
  );
}

export default AppTemplate;
