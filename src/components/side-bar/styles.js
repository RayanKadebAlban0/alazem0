import styled from "styled-components";

export const Styles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .sidebar {
    position: fixed;
    top: 70px;
    width: 50px;
    height: 100vh;
    background-color: green;
  }

  .sidebar1 {

    width: 220px;
    height: 100vh;
    background: green;
    position: fixed;
    top: 70px;
  
    
  }
  .main {
    font-size: xx-large;
    color: aliceblue;
    font-weight: bolder;
   
   
   
  }
  .icon {
    color: aliceblue;
    font-size: 30px;
    margin-right: 0px;
    padding-right: 0px;
  }
  ul {
    list-style: none;
    padding: 0;
    width: 100%;
    li {
      text-align: center;
      margin-top: 10px;
      font-size: 22px;
      display: flex;
      justify-content: start;
      gap: 10px;
      padding: 10px 5px ;
      width: 100%;

      a {
        color: wheat;
        text-decoration: none;
      }
    }
  }
`;
