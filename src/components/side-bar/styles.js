import styled from "styled-components";

export const Styles = styled.div`
 
  width: ${(props) => (props.expanded ? "200px" : "80px")};
  height: 100vh;
  background-color: rgb(39, 100, 172);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  color: white;
  overflow: hidden;
  position: sticky; 
  top: 0;
  /* z-index: 1000; */
  padding-top: 1%;


  .main{
    padding: 20px;
    cursor: pointer;
    display: flex;
width: 100%;
    justify-content: ${props => props.expanded ? 'flex-end' : 'center'};
    &:hover { background: rgba(0,0,0,0.1); }

  }
  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
  .nav-item {
    display: flex;
    align-items: center;
    padding: 15px;
    text-decoration: none;
    color: white;
    gap: 15px;
    white-space: nowrap; 
    transition: 0.2s;
    justify-content: ${props => props.expanded ? 'flex-start' : 'center'};

    &:hover { background: rgba(255,255,255,0.1); }
    
    &.active {
      background: rgba(255, 255, 255, 0.2);
      border-right: 5px solid #ffd700;
    }
  }

  .label {
    font-size: 1rem;
    font-weight: 500;
  }


  //collapsed
  /* .collapsed {
    right: 0;
    position: fixed;
    top: 80px;
    width: 90px;
    height: calc(100vh - 80px);
    background-color: rgb(39, 100, 172);
    transition: 0.8s;
  } */

  //expand
  /* .expanded {
    right: 0;
    width: 220px;
    height: calc(100vh - 80px);
    background: rgb(39, 100, 172);
    position: fixed;
    top: 80px;
    transition: 0.8s;
  }
  .main {
    cursor: pointer;
    margin-top: 10px;
    transition: margin-right 0.3s ease;
    padding: 20px;
  }
  .main.expanded {
    margin-right: 220px;
  }
  .main.collapsed {
    margin-right: 70px;
  }
  .nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    text-decoration: none;
    color: white;
    width: 100%;
    box-sizing: border-box;
  }

  .nav-item.active {
    background: rgba(255, 255, 255, 0.15);
    border-right: 10px solid rgb(225, 201, 51);
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      text-align: center;
      margin-top: 10px;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 10px;
      width: 100%;
      li:has(a.active) {
        background: rgba(255, 255, 255, 0.15);
        border-right: 4px solid #ffd700;
      }
      a {
        text-decoration: none;
      }
    }
  } */
`;
