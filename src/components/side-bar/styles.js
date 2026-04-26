import styled from "styled-components";

export const Styles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .sidebar {
    position: fixed;
    right: 0;
    top: 70px;
    width: 50px;
    height: 100vh;
    background-color: green;
  }

  .sidebar1 {
    right: 0;
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
    margin-right: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    width: 100%;
    li {
      text-align: center;
      margin-top: 16px;
      font-size: 22px;
      display: flex;
      justify-content: end;
      gap: 10px;

      padding: 15px 0;
      width: 100%;

      a {
        color: wheat;
        text-decoration: none;
      }
    }
  }
`;
