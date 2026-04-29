import styled from "styled-components";

export const Styles = styled.div`
  .landing-page {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  .login-section,
  .hero-section {
    flex: 1;
  }

  ,
  .login-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ,
  .hero-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  ,
  .photo img {
    width: 80%;
    max-width: 500px;
    height: auto;
  }
`;
