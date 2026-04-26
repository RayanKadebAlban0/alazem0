import styled from "styled-components";

export const Styles = styled.div`
  /* .nav {
    background-color: green;
    color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 1000;
    padding: 0 20px;
  }

  .brand-section {
    display: flex;
    align-items: center;
  }
  .logo-photo {
    margin-left: 30px;
    margin-top: 1%;
  }
  .logo {
    margin-left: 10px;
    text-decoration: none;
    color: aliceblue;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: normal;
    text-transform: uppercase;
  }
  .subbar {
    display: flex;
    gap: 20px;
    margin-right: 300px;
    left: 0;
  }
  .item {
    margin-right: 20px;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .navbar-nav a {
    color: aliceblue !important;
    text-decoration: none;
    transition: 0.3s;
  }
  .navbar-nav :hover a {
    color: red !important;
    font-weight: bold;
  } */


   .nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0px;
  height: 78px;
  
  background: green;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;
  z-index: 1000;
}

.brand-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
   margin-right: 220px;

}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;

  background: white;
  padding: 8px 14px;
  border-radius: 10px;
}

.search-box input {
  border: none;
  outline: none;
}

.icon-btn {
  cursor: pointer;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
 
}
`;
