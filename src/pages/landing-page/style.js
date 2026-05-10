import styled from "styled-components";

export const Styles = styled.div`

  .landing-page {
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: row;
    overflow: hidden ;  
    align-items: stretch;
    margin: 0;
    padding: 0;
    /* background-color: red; للتأكد من اللون */
  }


  
  .login-section {
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f6f6f7; /* لون خلفية هادئ */
   
  }
 
  .hero-section {
       flex: 1.5; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

  }
  
  .photo img {
    width: 80%;
    max-width: 500px;
    height: auto;
  }

  @media (max-width: 768px) {
    .landing-page {
      flex-direction: column; /* تحويل لتصميم موبايل عند صغر الشاشة */
    height: 100%;
    }
  } 
`;
