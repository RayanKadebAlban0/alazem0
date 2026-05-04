import React from "react";
import AppTemplate from "../../components/app-tamplate/index";

const PageNotFound = () => {
  return (
    <AppTemplate pageTitle={"404"} isHaveFooter={false} pageTitle= {"Not Found"}>
      PageNotFound
    </AppTemplate>
  );
};

export default PageNotFound;
