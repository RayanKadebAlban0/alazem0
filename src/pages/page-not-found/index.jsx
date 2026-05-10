import React from "react";
import AppTemplate from "../../components/app-tamplate/index";
import notfound from "../../assets/images/notfound.jpg";
import { Styles } from "./styles";

const PageNotFound = () => {
  return (
    <Styles>
    <AppTemplate pageTitle={"404"} isHaveFooter={false} pageTitle={"Not Found"}>
      <div className="Div">
        <h1>الصفحة غير موجودة!!</h1>
        <div> <img src={notfound} alt="notfound" />  </div>
      </div>
      </AppTemplate>
      </Styles>
  );
};

export default PageNotFound;
